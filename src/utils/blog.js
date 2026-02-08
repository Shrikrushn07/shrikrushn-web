// Custom browser-safe frontmatter parser
// Removes dependency on gray-matter/Buffer
const parseFrontmatter = (fileContent) => {
  const frontmatterRegex = /^---\s*([\s\S]*?)\s*---\s*([\s\S]*)$/;
  const match = frontmatterRegex.exec(fileContent);

  if (!match) {
    return {
      data: {},
      content: fileContent
    };
  }

  const frontmatterBlock = match[1];
  const content = match[2];
  const data = {};

  frontmatterBlock.split('\n').forEach(line => {
    const parts = line.split(':');
    if (parts.length < 2) return;

    const key = parts[0].trim();
    let value = parts.slice(1).join(':').trim();

    // Handle quoted strings
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1);
    }

    // Handle arrays like ["a", "b"]
    if (value.startsWith('[') && value.endsWith(']')) {
      try {
        // Safe JSON parse for simple arrays
        // Replace single quotes with double quotes for valid JSON if needed
        const jsonStr = value.replace(/'/g, '"');
        data[key] = JSON.parse(jsonStr);
      } catch (e) {
        // Fallback: simple split if parse fails
        data[key] = value.slice(1, -1).split(',').map(s => s.trim().replace(/['"]/g, ''));
      }
    } else {
      data[key] = value;
    }
  });

  return { data, content };
};

const processPostData = (data) => {
  const tags = Array.isArray(data.tags)
    ? data.tags
    : (typeof data.tags === 'string' ? [data.tags] : []);

  return {
    ...data,
    tags,
    summary: data.summary || data.excerpt || "No summary available.",
    excerpt: data.excerpt || data.summary || "No excerpt available.",
    readTime: data.readTime || "5 min read",
    title: data.title || "Untitled Post",
    date: data.date || new Date().toISOString()
  };
};

export const getPosts = async () => {
  console.log("[Blog Loader] Starting safe load...");

  // Absolute path glob
  const modules = import.meta.glob("/src/blog/*.md", { query: "?raw", import: "default" });
  const paths = Object.keys(modules);

  console.log(`[Blog Loader] Found ${paths.length} modules`);
  const posts = [];

  for (const path in modules) {
    try {
      const rawContent = await modules[path]();
      // Use custom safe parser instead of gray-matter
      const { data } = parseFrontmatter(rawContent);

      const slug = path.split("/").pop().replace(".md", "");
      const processed = processPostData(data);

      posts.push({
        slug,
        ...processed,
      });
    } catch (error) {
      console.error(`[Blog Loader] Error processing ${path}:`, error);
    }
  }

  console.log(`[Blog Loader] Loaded ${posts.length} posts successfully`);
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const getPostBySlug = async (slug) => {
  try {
    const modules = import.meta.glob("/src/blog/*.md", { query: "?raw", import: "default" });
    const match = Object.keys(modules).find(path => path.endsWith(`/${slug}.md`));

    if (!match) return null;

    const rawContent = await modules[match]();
    const { data, content } = parseFrontmatter(rawContent);

    return {
      slug,
      ...processPostData(data),
      content, // Return markdown content for rendering
    };
  } catch (e) {
    console.error(`[Blog Loader] Error fetching post by slug ${slug}:`, e);
    return null;
  }
};
