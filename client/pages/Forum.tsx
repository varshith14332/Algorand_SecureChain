import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, HelpCircle, Lock } from "lucide-react";

export default function Forum() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-muted/30 border border-muted/40 text-muted-foreground text-sm font-medium">
              <MessageCircle className="w-4 h-4 mr-2" /> Forum / Q&A
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Community Forum</h1>
            <p className="text-muted-foreground">Discuss quantum-safe wallets, PQC, and AI Guardian best practices.</p>

            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="text-xl flex items-center justify-center gap-2">
                  <Lock className="w-5 h-5 text-quantum-400" /> Coming Soon
                </CardTitle>
                <CardDescription>Interactive threads, Q&A, and knowledge base</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  We're building a dedicated community space. In the meantime, check the Community Hub for updates.
                </p>
                <div className="flex items-center justify-center gap-3">
                  <Button asChild>
                    <a href="/community">Go to Community Hub</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="mailto:hello@example.com">Contact Team</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
