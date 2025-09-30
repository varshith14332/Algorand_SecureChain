import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Badge } from "@/components/ui/badge";
import { Activity, Gauge, Cpu, MemoryStick, Timer, Shield, Rocket } from "lucide-react";
import { Area, AreaChart, CartesianGrid, Line, LineChart, XAxis, YAxis, Bar, BarChart } from "recharts";

const latencyData = Array.from({ length: 12 }).map((_, i) => ({
  label: `${i + 1}m`,
  latency: 45 + Math.round(Math.sin(i) * 10 + Math.random() * 8),
}));

const pqcData = Array.from({ length: 8 }).map((_, i) => ({
  algo: ["Dilithium", "Kyber", "SPHINCS+", "Falcon"][i % 4],
  sign: 2.5 + Math.random() * 1.5,
  verify: 1.4 + Math.random() * 1.2,
}));

const tpsData = Array.from({ length: 10 }).map((_, i) => ({
  label: `T${i}`,
  tps: 520 + Math.round(Math.cos(i) * 60 + Math.random() * 50),
}));

export default function Performance() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-6">
            <div>
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-neural-500/10 border border-neural-500/20 text-neural-400 text-sm font-medium mb-3">
                <Gauge className="w-4 h-4 mr-2" /> Performance
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">Performance Dashboard</h1>
              <p className="text-muted-foreground">Wallet metrics, PQC benchmarks, and AI Guardian resource usage.</p>
            </div>

            <div className="grid lg:grid-cols-4 gap-6">
              {[{label:"Avg Latency", value:"~58 ms", icon:Timer, color:"text-neural-400"},{label:"Peak TPS", value:"~640", icon:Rocket, color:"text-quantum-400"},{label:"CPU", value:"42%", icon:Cpu, color:"text-foreground"},{label:"Memory", value:"3.1 GB", icon:MemoryStick, color:"text-muted-foreground"}].map(card => (
                <Card key={card.label}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2"><card.icon className={`w-4 h-4 ${card.color}`} /> {card.label}</CardTitle>
                    <CardDescription>Live average</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{card.value}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">Latency Over Time</CardTitle>
                  <CardDescription>Signature + broadcast end-to-end</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      latency: { label: "Latency (ms)", color: "hsl(var(--neural-400))" },
                    }}
                  >
                    <LineChart data={latencyData} margin={{ left: 12, right: 12 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="label" tickLine={false} axisLine={false} />
                      <YAxis tickLine={false} axisLine={false} />
                      <Line type="monotone" dataKey="latency" stroke="var(--color-latency)" strokeWidth={2} dot={false} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </LineChart>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">AI Guardian Usage</CardTitle>
                  <CardDescription>Resource allocation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: "Behavioral Engine", value: 62, color: "bg-neural-500" },
                    { name: "Threat Classifier", value: 48, color: "bg-quantum-500" },
                    { name: "Signature Verifier", value: 35, color: "bg-algorand-500" },
                  ].map((r) => (
                    <div key={r.name}>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-muted-foreground">{r.name}</span>
                        <span className="font-medium">{r.value}%</span>
                      </div>
                      <div className="h-2 rounded bg-muted/30 overflow-hidden">
                        <div className={`h-full ${r.color}`} style={{ width: `${r.value}%` }} />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">PQC Benchmarks</CardTitle>
                  <CardDescription>Average sign/verify (ms)</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={{ sign: { label: "Sign", color: "hsl(var(--quantum-400))" }, verify: { label: "Verify", color: "hsl(var(--algorand-400))" } }}>
                    <BarChart data={pqcData} margin={{ left: 12, right: 12 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="algo" tickLine={false} axisLine={false} />
                      <YAxis tickLine={false} axisLine={false} />
                      <Bar dataKey="sign" fill="var(--color-sign)" radius={4} />
                      <Bar dataKey="verify" fill="var(--color-verify)" radius={4} />
                      <ChartLegend content={<ChartLegendContent />} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">Throughput</CardTitle>
                  <CardDescription>Transactions per second</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={{ tps: { label: "TPS", color: "hsl(var(--neural-400))" } }}>
                    <AreaChart data={tpsData} margin={{ left: 12, right: 12 }}>
                      <defs>
                        <linearGradient id="tpsGradient" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--neural-400))" stopOpacity={0.4} />
                          <stop offset="95%" stopColor="hsl(var(--neural-400))" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="label" tickLine={false} axisLine={false} />
                      <YAxis tickLine={false} axisLine={false} />
                      <Area dataKey="tps" stroke="var(--color-tps)" fill="url(#tpsGradient)" strokeWidth={2} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </AreaChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
