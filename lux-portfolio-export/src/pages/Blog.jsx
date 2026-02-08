import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getPosts } from "../utils/blog";
import { ArrowRight, Search, Clock } from "lucide-react";

export const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        getPosts().then(data => {
            console.log("Blog Component: Loaded posts:", data.length, data);
            setPosts(data);
        });
    }, []);

    const filteredPosts = posts.filter(post => {
        if (!search) return true;

        const query = search.toLowerCase();
        const title = (post.title || "").toLowerCase();
        // Use summary or excerpt or empty string fallback
        const summary = (post.summary || post.excerpt || "").toLowerCase();
        // Handle tags properly (could be array or string)
        const tags = Array.isArray(post.tags)
            ? post.tags.map(t => t.toLowerCase()).join(" ")
            : (post.tags || "").toLowerCase();

        return title.includes(query) || summary.includes(query) || tags.includes(query);
    });

    console.log("Blog Component: Filtered posts count:", filteredPosts.length);

    return (
        <div className="px-6 py-20 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Thoughts & Writings</h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
                    Insights on web development, AI, and my journey as a developer.
                </p>

                {/* Search Bar */}
                <div className="relative max-w-lg mx-auto">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                    <input
                        type="text"
                        placeholder="Search posts..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-12 pr-6 py-3 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:outline-none transition-colors text-white placeholder:text-gray-500"
                    />
                </div>
            </motion.div>

            <div className="grid gap-8">
                {filteredPosts.map((post, idx) => (
                    <motion.article
                        key={post.slug}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.1)] relative overflow-hidden"
                    >
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                                <span>{post.date}</span>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                    <Clock size={14} /> {post.readTime}
                                </span>
                                <span>•</span>
                                <span className="text-blue-400 font-medium">
                                    {post.tags.join(", ")}
                                </span>
                            </div>

                            <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-200 transition-colors">
                                <Link to={`/blog/${post.slug}`}>
                                    {post.title}
                                </Link>
                            </h2>

                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {post.summary}
                            </p>

                            <Link
                                to={`/blog/${post.slug}`}
                                className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-white transition-colors"
                            >
                                Read Article <ArrowRight size={16} />
                            </Link>
                        </div>
                    </motion.article>
                ))}

                {filteredPosts.length === 0 && (
                    <div className="text-center text-gray-500 py-20">
                        No posts found matching your search.
                    </div>
                )}
            </div>
        </div>
    );
};
