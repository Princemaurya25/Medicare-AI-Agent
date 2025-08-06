import { 
  LayoutDashboard, 
  Users, 
  UserCheck, 
  Calendar, 
  FileText, 
  DollarSign, 
  Settings,
  Stethoscope,
  Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarItem {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  badge?: string;
}

const sidebarItems: SidebarItem[] = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Users, label: "Patients", badge: "245" },
  { icon: UserCheck, label: "Doctors", badge: "18" },
  { icon: Calendar, label: "Appointments", badge: "12" },
  { icon: Stethoscope, label: "Consultations" },
  { icon: FileText, label: "Medical Records" },
  { icon: Activity, label: "Vital Signs" },
  { icon: DollarSign, label: "Billing" },
  { icon: Settings, label: "Settings" }
];

export const DashboardSidebar = () => {
  return (
    <aside className="w-64 bg-card border-r border-border shadow-card">
      <div className="p-6">
        <nav className="space-y-2">
          {sidebarItems.map((item, index) => (
            <Button
              key={index}
              variant={item.active ? "default" : "ghost"}
              className={cn(
                "w-full justify-start h-11 px-4",
                item.active && "bg-gradient-primary shadow-medical"
              )}
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && (
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">
                  {item.badge}
                </span>
              )}
            </Button>
          ))}
        </nav>
      </div>
    </aside>
  );
};