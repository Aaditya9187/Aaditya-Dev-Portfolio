import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Plus } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAdmin } from "@/hooks/useAdmin";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { BlogPost } from "@/types/blog";

const Blogs = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const { isAdmin } = useAdmin();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("published", true)
      .order("created_at", { ascending: false });

    if (!error && data) {
      setPosts(data as unknown as BlogPost[]);
    }
    setLoading(false);
  };

  const readTime = (content: string) => {
    const words = content.split(/\s+/).length;
    return Math.max(1, Math.ceil(words / 200));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="section-padding pt-28">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <p className="font-mono text-primary text-sm mb-2">// Blog</p>
              <h1 className="text-3xl sm:text-4xl font-bold">
                Thoughts & <span className="text-gradient">Insights</span>
              </h1>
              <p className="text-muted-foreground mt-2">
                Technical articles, tutorials, and case studies.
              </p>
            </div>
            {isAdmin && (
              <div className="flex gap-3">
                <Link
                  to="/blog/new"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity text-sm"
                >
                  <Plus size={16} /> New Post
                </Link>
              </div>
            )}
          </motion.div>

          {loading ? (
            <div className="grid gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="glass rounded-xl p-6 animate-pulse">
                  <div className="h-6 bg-muted rounded w-2/3 mb-3" />
                  <div className="h-4 bg-muted rounded w-full mb-2" />
                  <div className="h-4 bg-muted rounded w-1/2" />
                </div>
              ))}
            </div>
          ) : posts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass rounded-xl p-12 text-center"
            >
              <p className="text-muted-foreground text-lg">
                No blog posts yet. Check back soon!
              </p>
            </motion.div>
          ) : (
            <div className="grid gap-6">
              {posts.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="block glass rounded-xl p-6 hover-lift group"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      {post.cover_image && (
                        <img
                          src={post.cover_image}
                          alt={post.title}
                          className="w-full md:w-48 h-32 object-cover rounded-lg"
                          loading="lazy"
                        />
                      )}
                      <div className="flex-1">
                        <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h2>
                        {post.excerpt && (
                          <p className="text-muted-foreground mb-3 line-clamp-2">
                            {post.excerpt}
                          </p>
                        )}
                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                          <span className="inline-flex items-center gap-1">
                            <Calendar size={14} />
                            {new Date(post.created_at).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Clock size={14} />
                            {readTime(post.content)} min read
                          </span>
                          {post.tags?.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <ArrowRight
                        size={20}
                        className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 hidden md:block"
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blogs;
