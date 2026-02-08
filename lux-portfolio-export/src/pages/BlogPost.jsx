import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import { getPostBySlug } from "../utils/blog";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";

export const BlogPost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPostBySlug(slug).then((data) => {
            setPost(data);
            setLoading(false);
        });
    }, [slug]);

    if (loading) return <div className="text-center py-20">Loading...</div>;
    if (!post) return <div className="text-center py-20">Post not found</div>;

    return (
        <article className="px-6 py-20 max-w-3xl mx-auto">
            <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-10 transition-colors"
            >
                <ArrowLeft size={18} /> Back to Blog
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="flex gap-4 items-center text-sm text-gray-400 mb-6">
                    <span className="flex items-center gap-2">
                        <Calendar size={16} /> {post.date}
                    </span>
                    <span className="flex items-center gap-2">
                        <Clock size={16} /> {post.readTime}
                    </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                    {post.title}
                </h1>

                <div className="prose prose-invert prose-lg max-w-none prose-pre:bg-[#1a1b1e] prose-pre:border prose-pre:border-white/10 prose-headings:text-blue-100">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            code({ node, inline, className, children, ...props }) {
                                const match = /language-(\w+)/.exec(className || "");
                                return !inline && match ? (
                                    <SyntaxHighlighter
                                        style={atomDark}
                                        language={match[1]}
                                        PreTag="div"
                                        {...props}
                                    >
                                        {String(children).replace(/\n$/, "")}
                                    </SyntaxHighlighter>
                                ) : (
                                    <code className={className} {...props}>
                                        {children}
                                    </code>
                                );
                            },
                        }}
                    >
                        {post.content}
                    </ReactMarkdown>
                </div>
            </motion.div>
        </article>
    );
};
