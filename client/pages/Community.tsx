import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Newspaper, Megaphone, Globe, Tag } from "lucide-react";

const posts = [
  {
    id: "p1",
    title: "Post-Quantum Cryptography: State of 2025",
    excerpt: "A practical look at NIST selections and adoption across wallets and chains.",
    tag: "Research",
    date: "2025-09-15",
  },
  {
    id: "p2",
    title: "Algorand and PQC: What Developers Need to Know",
    excerpt: "Integration patterns, performance trade-offs, and migration steps.",
    tag: "Developers",
    date: "2025-09-10",
  },
  {
    id: "p3",
    title: "AI + Security: Building an Intelligent Guardian",
    excerpt: "Behavioral analytics, anomaly detection, and safe automation.",
    tag: "Security",
    date: "2025-08-28",
  },
];

export default function Community() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-8">
            <div>
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-quantum-500/10 border border-quantum-500/20 text-quantum-400 text-sm font-medium mb-3">
                <Newspaper className="w-4 h-4 mr-2" /> Community Hub
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">Quantum-Safe Updates</h1>
              <p className="text-muted-foreground">Blog, news, and resources from the community.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">Latest Articles</CardTitle>
                  <CardDescription>Curated quantum-safe content</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {posts.map((p) => (
                    <div key={p.id} className="p-4 rounded-lg border bg-card/50">
                      <div className="flex items-center justify-between gap-4 mb-1">
                        <h3 className="text-lg font-semibold">{p.title}</h3>
                        <Badge className="bg-muted/30 text-muted-foreground flex items-center gap-1"><Tag className="w-3 h-3" /> {p.tag}</Badge>
                      </div>
                      <p className="text-muted-foreground">{p.excerpt}</p>
                      <div className="text-xs text-muted-foreground mt-2">{new Date(p.date).toLocaleDateString()}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2"><Megaphone className="w-4 h-4 text-neural-400" /> Announcements</CardTitle>
                    <CardDescription>Project and ecosystem</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="p-3 rounded bg-muted/20 border">v1.1 ships with enhanced AI Guardian analytics.</div>
                    <div className="p-3 rounded bg-muted/20 border">New PQC benchmarks added to Performance Dashboard.</div>
                    <div className="p-3 rounded bg-muted/20 border">Community call scheduled next month.</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2"><Globe className="w-4 h-4 text-algorand-400" /> Resources</CardTitle>
                    <CardDescription>External links</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <a className="block p-3 rounded bg-muted/20 border hover:border-quantum-500/30 transition-colors" href="https://csrc.nist.gov/projects/post-quantum-cryptography" target="_blank" rel="noreferrer">NIST PQC Project</a>
                    <a className="block p-3 rounded bg-muted/20 border hover:border-quantum-500/30 transition-colors" href="https://www.algorand.foundation/" target="_blank" rel="noreferrer">Algorand Foundation</a>
                    <a className="block p-3 rounded bg-muted/20 border hover:border-quantum-500/30 transition-colors" href="https://pmnd.rs/" target="_blank" rel="noreferrer">pmndrs (3D/React)</a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
