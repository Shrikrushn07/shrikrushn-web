import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getPosts } from "../utils/blog";
import { ArrowRight, Search, Clock, Star } from "lucide-react";
import { SectionLabel } from "../components/ui/SectionLabel";

export const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        getPosts().then((data) => {
            setPosts(data);
        });
    }, []);

    const filteredPosts = posts.filter((post) => {
        if (!search) return true;
        const query = search.toLowerCase();
        const title = (post.title || "").toLowerCase();
        const summary = (post.summary || post.excerpt || "").toLowerCase();
        const tags = Array.isArray(post.tags)
            ? post.tags.map((t) => t.toLowerCase()).join(" ")
            : (post.tags || "").toLowerCase();
        return title.includes(query) || summary.includes(query) || tags.includes(query);
    });

    const featuredPost = filteredPosts[0];
    const restPosts = filteredPosts.slice(1);

    return (
        <div className="px-6 py-12 max-w-5xl mx-auto">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
            >
                <SectionLabel>Thoughts & Insights</SectionLabel>
                <h1 className="text-4xl md:text-6xl font-black mb-4">Writings</h1>
                <p className="text-[#A1A1AA] max-w-2xl text-lg mb-8">
                    Thoughts on AI, building products, startup mindset, and the journey of learning.
                </p>

                {/* Search */}
                <div className="relative max-w-lg">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A1A1AA]" size={18} />
                    <input
                        type="text"
                        placeholder="Search posts..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-12 pr-6 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] focus:border-brand-red/40 focus:outline-none transition-colors text-white placeholder:text-[#A1A1AA]/50 text-sm"
                    />
                </div>
            </motion.div>

            {/* Featured article */}
            {featuredPost && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-10"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <Star size={12} className="text-brand-red fill-brand-red" />
                        <span className="text-xs font-bold text-brand-red uppercase tracking-widest">Featured Article</span>
                    </div>

                    <Link to={`/blog/${featuredPost.slug}`}>
                        <div className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-brand-red/20 card-hover overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-[#A1A1AA]">
                                <span>{featuredPost.date}</span>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                    <Clock size={13} />
                                    {featuredPost.readTime}
                                </span>
                                <span>•</span>
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-red/10 text-brand-red border border-brand-red/20 text-xs font-semibold">
                                    {Array.isArray(featuredPost.tags) ? featuredPost.tags[0] : featuredPost.tags}
                                </span>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-black text-white mb-3 group-hover:text-brand-red transition-colors duration-200">
                                {featuredPost.title}
                            </h2>

                            <p className="text-[#A1A1AA] leading-relaxed mb-6 max-w-2xl">
                                {featuredPost.summary}
                            </p>

                            <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-red group-hover:gap-3 transition-all">
                                Read Article <ArrowRight size={15} />
                            </span>
                        </div>
                    </Link>
                </motion.div>
            )}

            {/* Rest of posts */}
            <div className="grid gap-5">
                {restPosts.map((post, idx) => (
                    <motion.article
                        key={post.slug}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 + idx * 0.08 }}
                        className="group flex flex-col sm:flex-row gap-5 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-brand-red/20 card-hover"
                    >
                        <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-3 mb-3 text-xs text-[#A1A1AA]">
                                <span>{post.date}</span>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                    <Clock size={12} />
                                    {post.readTime}
                                </span>
                                <span className="px-2 py-0.5 rounded-full bg-brand-red/10 text-brand-red border border-brand-red/20 font-semibold">
                                    {Array.isArray(post.tags) ? post.tags[0] : post.tags}
                                </span>
                            </div>

                            <h2 className="text-lg font-bold text-white mb-2 group-hover:text-brand-red transition-colors duration-200">
                                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                            </h2>

                            <p className="text-[#A1A1AA] text-sm leading-relaxed line-clamp-2 mb-4">
                                {post.summary}
                            </p>

                            <Link
                                to={`/blog/${post.slug}`}
                                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red hover:text-brand-red-light transition-colors"
                            >
                                Read Article <ArrowRight size={14} />
                            </Link>
                        </div>
                    </motion.article>
                ))}
            </div>

            {filteredPosts.length === 0 && (
                <div className="text-center text-[#A1A1AA] py-24">
                    No posts found matching your search.
                </div>
            )}
        </div>
    );
};
