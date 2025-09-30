import { useMemo, useState } from "react";
import { Activity, AlertTriangle, ShieldCheck, Ban, Filter, Search, Clock, Shield, Bug, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

 type LogRecord = {
  id: string;
  timestamp: string; // ISO
  type: "threat" | "anomaly" | "blocked";
  severity: "low" | "medium" | "high" | "critical";
  source: string;
  action: string;
  description: string;
 };

 const ICONS: Record<LogRecord["type"], React.ComponentType<any>> = {
  threat: AlertTriangle,
  anomaly: Bug,
  blocked: Ban,
 };

 const SEVERITY_CLASS: Record<LogRecord["severity"], string> = {
  low: "bg-muted/30 text-muted-foreground",
  medium: "bg-algorand-500/10 text-algorand-400",
  high: "bg-neural-500/10 text-neural-400",
  critical: "bg-quantum-500/10 text-quantum-400",
 };

 const SAMPLE_LOGS: LogRecord[] = [
  {
    id: "1",
    timestamp: new Date(Date.now() - 2 * 60 * 1000).toISOString(),
    type: "threat",
    severity: "high",
    source: "Transaction Monitor",
    action: "Flagged",
    description: "Unusual transfer pattern detected across multiple addresses.",
  },
  {
    id: "2",
    timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
    type: "blocked",
    severity: "critical",
    source: "AI Guardian",
    action: "Blocked",
    description: "Attempted withdrawal from unrecognized device blocked.",
  },
  {
    id: "3",
    timestamp: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
    type: "anomaly",
    severity: "medium",
    source: "Behavioral Engine",
    action: "Observed",
    description: "Login location deviates from historical profile (2,100km).",
  },
  {
    id: "4",
    timestamp: new Date(Date.now() - 45 * 60 * 1000).toISOString(),
    type: "threat",
    severity: "low",
    source: "Signature Verifier",
    action: "Flagged",
    description: "Non-standard signing sequence detected; verified as safe.",
  },
 ];

 export default function Logs() {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState<"all" | LogRecord["type"]>("all");

  const items = useMemo(() => {
    return SAMPLE_LOGS.filter((l) => (tab === "all" ? true : l.type === tab))
      .filter((l) => {
        const q = query.toLowerCase();
        return (
          !q ||
          l.description.toLowerCase().includes(q) ||
          l.source.toLowerCase().includes(q) ||
          l.action.toLowerCase().includes(q) ||
          l.severity.toLowerCase().includes(q)
        );
      })
      .sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1));
  }, [query, tab]);

  return (
    <div className="min-h-screen bg-background pt-16">
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-quantum-500/10 border border-quantum-500/20 text-quantum-400 text-sm font-medium mb-3">
                  <Shield className="w-4 h-4 mr-2" /> AI Guardian
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">Logs & Activity</h1>
                <p className="text-muted-foreground">Detailed history of detections, anomalies, and blocked attempts.</p>
              </div>
              <div className="flex items-center gap-3 w-full md:w-80">
                <div className="relative w-full">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search logs..."
                    className="pl-9"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    aria-label="Search logs"
                  />
                </div>
              </div>
            </div>

            <Tabs value={tab} onValueChange={(v) => setTab(v as any)}>
              <TabsList className="grid grid-cols-4 w-full md:w-auto">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="threat">Threats</TabsTrigger>
                <TabsTrigger value="anomaly">Anomalies</TabsTrigger>
                <TabsTrigger value="blocked">Blocked</TabsTrigger>
              </TabsList>
              <TabsContent value={tab} className="mt-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">Recent Activity</CardTitle>
                    <CardDescription>Chronological event stream</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Time</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Severity</TableHead>
                          <TableHead>Source</TableHead>
                          <TableHead>Action</TableHead>
                          <TableHead>Description</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {items.map((log) => {
                          const Icon = ICONS[log.type];
                          return (
                            <TableRow key={log.id}>
                              <TableCell>
                                <div className="flex items-center gap-2 text-sm">
                                  <Clock className="w-4 h-4 text-muted-foreground" />
                                  <span className="font-mono">
                                    {new Date(log.timestamp).toLocaleString()}
                                  </span>
                                </div>
                              </TableCell>
                              <TableCell>
                                <div className="inline-flex items-center gap-2">
                                  <Icon className="w-4 h-4" />
                                  <span className="capitalize">{log.type}</span>
                                </div>
                              </TableCell>
                              <TableCell>
                                <Badge className={SEVERITY_CLASS[log.severity]}>
                                  {log.severity.toUpperCase()}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-muted-foreground">{log.source}</TableCell>
                              <TableCell>
                                <span className="text-foreground">{log.action}</span>
                              </TableCell>
                              <TableCell className="max-w-[420px] text-muted-foreground">
                                {log.description}
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">24h Summary</CardTitle>
                  <CardDescription>Snapshot of security posture</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Threats", value: 12, icon: AlertTriangle, color: "text-quantum-400" },
                    { label: "Anomalies", value: 31, icon: Bug, color: "text-neural-400" },
                    { label: "Blocked", value: 7, icon: Ban, color: "text-algorand-400" },
                  ].map((m) => (
                    <div key={m.label} className="p-3 rounded-lg bg-muted/20 border border-muted/20">
                      <div className={`flex items-center gap-2 text-sm ${m.color}`}>
                        <m.icon className="w-4 h-4" /> {m.label}
                      </div>
                      <div className="text-2xl font-bold mt-1">{m.value}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Engines</CardTitle>
                  <CardDescription>Active protection modules</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { name: "Behavioral Engine", status: "Active", icon: Eye, color: "text-neural-400" },
                    { name: "Threat Classifier", status: "Active", icon: ShieldCheck, color: "text-quantum-400" },
                    { name: "Signature Verifier", status: "Active", icon: Shield, color: "text-algorand-400" },
                  ].map((e) => (
                    <div key={e.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/20 border border-muted/20">
                      <div className="flex items-center gap-3">
                        <e.icon className={`w-5 h-5 ${e.color}`} />
                        <div>
                          <div className="font-medium">{e.name}</div>
                          <div className="text-xs text-muted-foreground">Status: {e.status}</div>
                        </div>
                      </div>
                      <Badge className="bg-emerald-500/10 text-emerald-400">OK</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Recommendations</CardTitle>
                  <CardDescription>Automated security guidance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="p-3 rounded-lg bg-muted/20 border border-muted/20">Enable geo-fencing for withdrawals above your daily limit.</div>
                  <div className="p-3 rounded-lg bg-muted/20 border border-muted/20">Review access logs for new devices added this week.</div>
                  <div className="p-3 rounded-lg bg-muted/20 border border-muted/20">Consider stricter anomaly thresholds during night hours.</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
 }
