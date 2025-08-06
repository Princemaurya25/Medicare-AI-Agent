import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: React.ElementType;
  className?: string;
}

export const StatsCard = ({ title, value, change, changeType, icon: Icon, className }: StatsCardProps) => {
  return (
    <Card className={cn("bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-muted-foreground text-sm font-medium">{title}</p>
            <p className="text-2xl font-bold text-foreground mt-1">{value}</p>
            <p className={cn(
              "text-sm mt-1 font-medium",
              changeType === "positive" && "text-secondary",
              changeType === "negative" && "text-destructive",
              changeType === "neutral" && "text-muted-foreground"
            )}>
              {change}
            </p>
          </div>
          <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-medical">
            <Icon className="w-6 h-6 text-primary-foreground" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};