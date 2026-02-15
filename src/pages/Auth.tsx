import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import Navbar from "@/components/Navbar";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();

  if (user) {
    navigate("/blogs");
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    if (isLogin) {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setError(error.message);
      } else {
        navigate("/blogs");
      }
    } else {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) {
        setError(error.message);
      } else {
        setMessage("Check your email for a confirmation link!");
      }
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="section-padding pt-28 flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-xl p-8 w-full max-w-md"
        >
          <h1 className="text-2xl font-bold mb-2">
            {isLogin ? "Welcome back" : "Create account"}
          </h1>
          <p className="text-muted-foreground mb-6 text-sm">
            {isLogin
              ? "Sign in to manage your blog posts."
              : "Sign up to start writing blog posts."}
          </p>

          {error && (
            <div className="bg-destructive/10 border border-destructive/30 text-destructive rounded-lg p-3 mb-4 text-sm">
              {error}
            </div>
          )}
          {message && (
            <div className="bg-primary/10 border border-primary/30 text-primary rounded-lg p-3 mb-4 text-sm">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-muted-foreground">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-muted-foreground">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? "Loading..." : isLogin ? "Sign In" : "Sign Up"}
            </button>
          </form>

          <p className="text-sm text-muted-foreground mt-4 text-center">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setError("");
                setMessage("");
              }}
              className="text-primary hover:underline"
            >
              {isLogin ? "Sign up" : "Sign in"}
            </button>
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Auth;
