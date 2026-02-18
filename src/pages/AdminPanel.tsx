import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Plus, Pencil, Trash2, ArrowLeft, GripVertical,
  FolderKanban, FileText, Award,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useAdmin } from "@/hooks/useAdmin";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import { toast } from "sonner";

type Tab = "projects" | "blogs" | "certificates";

/* ───── Project form ───── */
interface ProjectForm {
  title: string;
  description: string;
  tags: string;
  github_url: string;
  live_url: string;
  cover_image: string;
  display_order: number;
}
const emptyProject: ProjectForm = { title: "", description: "", tags: "", github_url: "", live_url: "", cover_image: "", display_order: 0 };

/* ───── Certificate form ───── */
interface CertForm {
  name: string;
  issuer: string;
  image_url: string;
  display_order: number;
}
const emptyCert: CertForm = { name: "", issuer: "", image_url: "", display_order: 0 };

const AdminPanel = () => {
  const { user, loading: authLoading } = useAuth();
  const { isAdmin, loading: adminLoading } = useAdmin();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [tab, setTab] = useState<Tab>("projects");

  // Project state
  const [projectForm, setProjectForm] = useState<ProjectForm>(emptyProject);
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);
  const [showProjectForm, setShowProjectForm] = useState(false);

  // Certificate state
  const [certForm, setCertForm] = useState<CertForm>(emptyCert);
  const [editingCertId, setEditingCertId] = useState<string | null>(null);
  const [showCertForm, setShowCertForm] = useState(false);

  useEffect(() => {
    if (!authLoading && !adminLoading) {
      if (!user || !isAdmin) navigate("/");
    }
  }, [user, authLoading, isAdmin, adminLoading, navigate]);

  /* ═══════ Queries ═══════ */
  const { data: projects = [], isLoading: loadingProjects } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const { data, error } = await supabase.from("projects").select("*").order("display_order");
      if (error) throw error;
      return data;
    },
    enabled: !!user,
  });

  const { data: blogs = [], isLoading: loadingBlogs } = useQuery({
    queryKey: ["admin-blogs"],
    queryFn: async () => {
      const { data, error } = await supabase.from("blog_posts").select("*").eq("user_id", user!.id).order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
    enabled: !!user,
  });

  const { data: certificates = [], isLoading: loadingCerts } = useQuery({
    queryKey: ["certificates"],
    queryFn: async () => {
      const { data, error } = await supabase.from("certificates").select("*").order("display_order");
      if (error) throw error;
      return data;
    },
    enabled: !!user,
  });

  /* ═══════ Project mutations ═══════ */
  const saveProject = useMutation({
    mutationFn: async (form: ProjectForm) => {
      const payload = {
        title: form.title, description: form.description,
        tags: form.tags.split(",").map(t => t.trim()).filter(Boolean),
        github_url: form.github_url || null, live_url: form.live_url || null,
        cover_image: form.cover_image || null, display_order: form.display_order,
        user_id: user!.id,
      };
      if (editingProjectId) {
        const { error } = await supabase.from("projects").update(payload).eq("id", editingProjectId);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("projects").insert(payload);
        if (error) throw error;
      }
    },
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: ["projects"] }); toast.success(editingProjectId ? "Project updated!" : "Project added!"); resetProjectForm(); },
    onError: (e: Error) => toast.error(e.message),
  });

  const deleteProject = useMutation({
    mutationFn: async (id: string) => { const { error } = await supabase.from("projects").delete().eq("id", id); if (error) throw error; },
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: ["projects"] }); toast.success("Project deleted!"); },
    onError: (e: Error) => toast.error(e.message),
  });

  /* ═══════ Blog mutations ═══════ */
  const deleteBlog = useMutation({
    mutationFn: async (id: string) => { const { error } = await supabase.from("blog_posts").delete().eq("id", id); if (error) throw error; },
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: ["admin-blogs"] }); toast.success("Blog post deleted!"); },
    onError: (e: Error) => toast.error(e.message),
  });

  /* ═══════ Certificate mutations ═══════ */
  const saveCert = useMutation({
    mutationFn: async (form: CertForm) => {
      const payload = { name: form.name, issuer: form.issuer, image_url: form.image_url || null, display_order: form.display_order, user_id: user!.id };
      if (editingCertId) {
        const { error } = await supabase.from("certificates").update(payload).eq("id", editingCertId);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("certificates").insert(payload);
        if (error) throw error;
      }
    },
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: ["certificates"] }); toast.success(editingCertId ? "Certificate updated!" : "Certificate added!"); resetCertForm(); },
    onError: (e: Error) => toast.error(e.message),
  });

  const deleteCert = useMutation({
    mutationFn: async (id: string) => { const { error } = await supabase.from("certificates").delete().eq("id", id); if (error) throw error; },
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: ["certificates"] }); toast.success("Certificate deleted!"); },
    onError: (e: Error) => toast.error(e.message),
  });

  /* ═══════ Helpers ═══════ */
  const resetProjectForm = () => { setProjectForm(emptyProject); setEditingProjectId(null); setShowProjectForm(false); };
  const resetCertForm = () => { setCertForm(emptyCert); setEditingCertId(null); setShowCertForm(false); };

  const startEditProject = (p: any) => {
    setProjectForm({ title: p.title, description: p.description, tags: (p.tags || []).join(", "), github_url: p.github_url || "", live_url: p.live_url || "", cover_image: p.cover_image || "", display_order: p.display_order || 0 });
    setEditingProjectId(p.id); setShowProjectForm(true);
  };

  const startEditCert = (c: any) => {
    setCertForm({ name: c.name, issuer: c.issuer, image_url: c.image_url || "", display_order: c.display_order || 0 });
    setEditingCertId(c.id); setShowCertForm(true);
  };

  if (authLoading || adminLoading || !user || !isAdmin) return null;

  const tabs: { key: Tab; label: string; icon: React.ReactNode }[] = [
    { key: "projects", label: "Projects", icon: <FolderKanban size={16} /> },
    { key: "blogs", label: "Blogs", icon: <FileText size={16} /> },
    { key: "certificates", label: "Certificates", icon: <Award size={16} /> },
  ];

  const inputClass = "w-full bg-card border border-border rounded-lg px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="section-padding pt-28 max-w-5xl mx-auto">
        <button onClick={() => navigate("/")} className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary text-sm mb-2 transition-colors">
          <ArrowLeft size={14} /> Back to site
        </button>
        <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>

        {/* Tabs */}
        <div className="flex gap-1 mb-8 glass rounded-xl p-1.5 w-fit">
          {tabs.map(t => (
            <button key={t.key} onClick={() => { setTab(t.key); resetProjectForm(); resetCertForm(); }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${tab === t.key ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {/* ═══════ PROJECTS TAB ═══════ */}
        {tab === "projects" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Projects</h2>
              {!showProjectForm && (
                <button onClick={() => { resetProjectForm(); setShowProjectForm(true); }} className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity text-sm">
                  <Plus size={16} /> Add Project
                </button>
              )}
            </div>

            {showProjectForm && (
              <motion.form initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} onSubmit={e => { e.preventDefault(); saveProject.mutate(projectForm); }} className="glass rounded-xl p-6 mb-8 space-y-4">
                <h3 className="text-lg font-semibold">{editingProjectId ? "Edit Project" : "New Project"}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><label className="block text-sm font-medium text-muted-foreground mb-1">Title *</label><input type="text" value={projectForm.title} onChange={e => setProjectForm({ ...projectForm, title: e.target.value })} required className={inputClass} placeholder="Project name" /></div>
                  <div><label className="block text-sm font-medium text-muted-foreground mb-1">Tags</label><input type="text" value={projectForm.tags} onChange={e => setProjectForm({ ...projectForm, tags: e.target.value })} className={inputClass} placeholder="React, TypeScript" /></div>
                </div>
                <div><label className="block text-sm font-medium text-muted-foreground mb-1">Description *</label><textarea value={projectForm.description} onChange={e => setProjectForm({ ...projectForm, description: e.target.value })} required rows={3} className={`${inputClass} resize-none`} placeholder="Brief description" /></div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><label className="block text-sm font-medium text-muted-foreground mb-1">GitHub URL</label><input type="url" value={projectForm.github_url} onChange={e => setProjectForm({ ...projectForm, github_url: e.target.value })} className={inputClass} /></div>
                  <div><label className="block text-sm font-medium text-muted-foreground mb-1">Live URL</label><input type="url" value={projectForm.live_url} onChange={e => setProjectForm({ ...projectForm, live_url: e.target.value })} className={inputClass} /></div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><label className="block text-sm font-medium text-muted-foreground mb-1">Cover Image URL</label><input type="url" value={projectForm.cover_image} onChange={e => setProjectForm({ ...projectForm, cover_image: e.target.value })} className={inputClass} /></div>
                  <div><label className="block text-sm font-medium text-muted-foreground mb-1">Display Order</label><input type="number" value={projectForm.display_order} onChange={e => setProjectForm({ ...projectForm, display_order: parseInt(e.target.value) || 0 })} className={inputClass} /></div>
                </div>
                <div className="flex gap-3 pt-2">
                  <button type="submit" disabled={saveProject.isPending} className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50">{saveProject.isPending ? "Saving..." : editingProjectId ? "Update" : "Add Project"}</button>
                  <button type="button" onClick={resetProjectForm} className="border border-border text-muted-foreground px-6 py-2.5 rounded-lg font-medium hover:text-foreground transition-colors">Cancel</button>
                </div>
              </motion.form>
            )}

            {loadingProjects ? <p className="text-muted-foreground">Loading...</p> : projects.length === 0 ? (
              <div className="glass rounded-xl p-12 text-center"><p className="text-muted-foreground">No projects yet.</p></div>
            ) : (
              <div className="space-y-3">
                {projects.map(p => (
                  <motion.div key={p.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass rounded-xl p-4 flex items-center gap-4">
                    <GripVertical size={16} className="text-muted-foreground/40 shrink-0" />
                    {p.cover_image && <img src={p.cover_image} alt={p.title} className="w-16 h-12 object-cover rounded-lg shrink-0" />}
                    <div className="flex-1 min-w-0"><h3 className="font-semibold truncate">{p.title}</h3><p className="text-sm text-muted-foreground truncate">{p.description}</p></div>
                    <div className="flex gap-2 shrink-0">
                      <button onClick={() => startEditProject(p)} className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-primary transition-colors"><Pencil size={16} /></button>
                      <button onClick={() => { if (confirm("Delete this project?")) deleteProject.mutate(p.id); }} className="p-2 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"><Trash2 size={16} /></button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ═══════ BLOGS TAB ═══════ */}
        {tab === "blogs" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Blog Posts</h2>
              <button onClick={() => navigate("/blog/new")} className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity text-sm">
                <Plus size={16} /> New Post
              </button>
            </div>

            {loadingBlogs ? <p className="text-muted-foreground">Loading...</p> : blogs.length === 0 ? (
              <div className="glass rounded-xl p-12 text-center"><p className="text-muted-foreground">No blog posts yet.</p></div>
            ) : (
              <div className="space-y-3">
                {blogs.map(b => (
                  <motion.div key={b.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass rounded-xl p-4 flex items-center gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold truncate">{b.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
                        <span className={`inline-block w-2 h-2 rounded-full ${b.published ? "bg-green-500" : "bg-muted-foreground"}`} />
                        {b.published ? "Published" : "Draft"}
                        <span>·</span>
                        <span>{new Date(b.created_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <button onClick={() => navigate(`/blog/edit/${b.slug}`)} className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-primary transition-colors"><Pencil size={16} /></button>
                      <button onClick={() => { if (confirm("Delete this post?")) deleteBlog.mutate(b.id); }} className="p-2 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"><Trash2 size={16} /></button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ═══════ CERTIFICATES TAB ═══════ */}
        {tab === "certificates" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Certificates</h2>
              {!showCertForm && (
                <button onClick={() => { resetCertForm(); setShowCertForm(true); }} className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity text-sm">
                  <Plus size={16} /> Add Certificate
                </button>
              )}
            </div>

            {showCertForm && (
              <motion.form initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} onSubmit={e => { e.preventDefault(); saveCert.mutate(certForm); }} className="glass rounded-xl p-6 mb-8 space-y-4">
                <h3 className="text-lg font-semibold">{editingCertId ? "Edit Certificate" : "New Certificate"}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><label className="block text-sm font-medium text-muted-foreground mb-1">Name *</label><input type="text" value={certForm.name} onChange={e => setCertForm({ ...certForm, name: e.target.value })} required className={inputClass} placeholder="Certificate name" /></div>
                  <div><label className="block text-sm font-medium text-muted-foreground mb-1">Issuer *</label><input type="text" value={certForm.issuer} onChange={e => setCertForm({ ...certForm, issuer: e.target.value })} required className={inputClass} placeholder="Issuing organization" /></div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><label className="block text-sm font-medium text-muted-foreground mb-1">Image URL</label><input type="url" value={certForm.image_url} onChange={e => setCertForm({ ...certForm, image_url: e.target.value })} className={inputClass} placeholder="https://example.com/cert.png" /></div>
                  <div><label className="block text-sm font-medium text-muted-foreground mb-1">Display Order</label><input type="number" value={certForm.display_order} onChange={e => setCertForm({ ...certForm, display_order: parseInt(e.target.value) || 0 })} className={inputClass} /></div>
                </div>
                <div className="flex gap-3 pt-2">
                  <button type="submit" disabled={saveCert.isPending} className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50">{saveCert.isPending ? "Saving..." : editingCertId ? "Update" : "Add Certificate"}</button>
                  <button type="button" onClick={resetCertForm} className="border border-border text-muted-foreground px-6 py-2.5 rounded-lg font-medium hover:text-foreground transition-colors">Cancel</button>
                </div>
              </motion.form>
            )}

            {loadingCerts ? <p className="text-muted-foreground">Loading...</p> : certificates.length === 0 ? (
              <div className="glass rounded-xl p-12 text-center"><p className="text-muted-foreground">No certificates yet.</p></div>
            ) : (
              <div className="space-y-3">
                {certificates.map(c => (
                  <motion.div key={c.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass rounded-xl p-4 flex items-center gap-4">
                    {c.image_url ? <img src={c.image_url} alt={c.name} className="w-10 h-10 object-contain rounded shrink-0" /> : <Award size={18} className="text-primary shrink-0" />}
                    <div className="flex-1 min-w-0"><h3 className="font-semibold truncate">{c.name}</h3><p className="text-sm text-muted-foreground">{c.issuer}</p></div>
                    <div className="flex gap-2 shrink-0">
                      <button onClick={() => startEditCert(c)} className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-primary transition-colors"><Pencil size={16} /></button>
                      <button onClick={() => { if (confirm("Delete this certificate?")) deleteCert.mutate(c.id); }} className="p-2 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"><Trash2 size={16} /></button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default AdminPanel;
