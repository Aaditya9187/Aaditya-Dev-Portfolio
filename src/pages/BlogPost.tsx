import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Edit, Trash2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { BlogPost as BlogPostType } from "@/types/blog";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) fetchPost();
  }, [slug]);

  const fetchPost = async () => {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", slug!)
      .maybeSingle();

    if (!error && data) {
      setPost(data as unknown as BlogPostType);
    }
    setLoading(false);
  };

  const handleDelete = async () => {
    if (!post || !confirm("Delete this post?")) return;
    await supabase.from("blog_posts").delete().eq("id", post.id);
    navigate("/blogs");
  };

  const readTime = (content: string) => {
    const words = content.split(/\s+/).length;
    return Math.max(1, Math.ceil(words / 200));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="section-padding pt-28 max-w-3xl mx-auto animate-pulse">
          <div className="h-8 bg-muted rounded w-2/3 mb-4" />
          <div className="h-4 bg-muted rounded w-full mb-2" />
          <div className="h-4 bg-muted rounded w-full mb-2" />
          <div className="h-4 bg-muted rounded w-1/2" />
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="section-padding pt-28 max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link to="/blogs" className="text-primary hover:underline">
            ← Back to blogs
          </Link>
        </div>
      </div>
    );
  }

  const isOwner = user?.id === post.user_id;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <article className="section-padding pt-28">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors mb-8 text-sm"
          >
            <ArrowLeft size={16} /> Back to blogs
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {post.cover_image && (
              <img
                src={post.cover_image}
                alt={post.title}
                className="w-full h-64 md:h-80 object-cover rounded-xl mb-8"
              />
            )}

            <div className="flex items-start justify-between gap-4 mb-4">
              <h1 className="text-3xl sm:text-4xl font-bold">{post.title}</h1>
              {isOwner && (
                <div className="flex gap-2 shrink-0">
                  <Link
                    to={`/blog/edit/${post.slug}`}
                    className="p-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors"
                  >
                    <Edit size={16} />
                  </Link>
                  <button
                    onClick={handleDelete}
                    className="p-2 rounded-lg border border-border hover:border-destructive hover:text-destructive transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-8">
              <span className="inline-flex items-center gap-1">
                <Calendar size={14} />
                {new Date(post.created_at).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock size={14} />
                {readTime(post.content)} min read
              </span>
              {post.tags?.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="prose prose-invert prose-amber max-w-none leading-relaxed text-foreground/90 whitespace-pre-wrap">
              {post.content}
            </div>
          </motion.div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default BlogPost;
