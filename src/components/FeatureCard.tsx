import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import type { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: Props) {
  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardHeader className="flex flex-row items-center gap-3">
        <div className="text-cyan-400">{icon}</div>

        <CardTitle className="text-white">{title}</CardTitle>
      </CardHeader>

      <CardContent className="text-slate-400 text-sm">
        {description}
      </CardContent>
    </Card>
  );
}
