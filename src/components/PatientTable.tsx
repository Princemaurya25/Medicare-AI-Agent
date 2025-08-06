import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreHorizontal, Eye, Edit } from "lucide-react";

interface Patient {
  id: string;
  name: string;
  age: number;
  condition: string;
  status: "Critical" | "Stable" | "Recovering";
  lastVisit: string;
  doctor: string;
}

const patients: Patient[] = [
  {
    id: "P001",
    name: "Sarah Johnson",
    age: 34,
    condition: "Hypertension",
    status: "Stable",
    lastVisit: "2024-01-15",
    doctor: "Dr. Smith"
  },
  {
    id: "P002",
    name: "Michael Chen",
    age: 67,
    condition: "Diabetes",
    status: "Critical",
    lastVisit: "2024-01-14",
    doctor: "Dr. Williams"
  },
  {
    id: "P003",
    name: "Emily Davis",
    age: 29,
    condition: "Pneumonia",
    status: "Recovering",
    lastVisit: "2024-01-13",
    doctor: "Dr. Brown"
  },
  {
    id: "P004",
    name: "Robert Wilson",
    age: 45,
    condition: "Heart Disease",
    status: "Stable",
    lastVisit: "2024-01-12",
    doctor: "Dr. Johnson"
  }
];

const getStatusColor = (status: Patient["status"]) => {
  switch (status) {
    case "Critical":
      return "bg-destructive text-destructive-foreground";
    case "Stable":
      return "bg-secondary text-secondary-foreground";
    case "Recovering":
      return "bg-accent text-accent-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export const PatientTable = () => {
  return (
    <Card className="bg-gradient-card shadow-card">
      <CardHeader>
        <CardTitle className="text-foreground">Recent Patients</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {patients.map((patient) => (
            <div key={patient.id} className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:shadow-card transition-all duration-200">
              <div className="flex items-center space-x-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {patient.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div>
                  <div className="flex items-center space-x-2">
                    <p className="font-medium text-foreground">{patient.name}</p>
                    <span className="text-muted-foreground text-sm">({patient.age}y)</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{patient.condition}</p>
                  <p className="text-xs text-muted-foreground">Assigned to {patient.doctor}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Badge className={getStatusColor(patient.status)}>
                  {patient.status}
                </Badge>
                
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Last Visit</p>
                  <p className="text-sm font-medium text-foreground">{patient.lastVisit}</p>
                </div>

                <div className="flex space-x-1">
                  <Button variant="ghost" size="sm">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};