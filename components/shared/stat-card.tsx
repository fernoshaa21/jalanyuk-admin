import { Card, CardContent, CardHeader } from "@/components/ui/card";

type StatCardProps = {
  label: string;
  value: string;
  helper: string;
};

export function StatCard({ label, value, helper }: StatCardProps) {
  return (
    <Card className="bg-white/90">
      <CardHeader className="pb-3">
        <p className="text-sm font-medium text-slate-500">{label}</p>
      </CardHeader>
      <CardContent className="space-y-1">
        <p className="text-3xl font-semibold text-slate-950">{value}</p>
        <p className="text-sm text-slate-500">{helper}</p>
      </CardContent>
    </Card>
  );
}
