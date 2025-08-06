import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, User } from "lucide-react";

interface Appointment {
  id: string;
  time: string;
  patient: string;
  doctor: string;
  type: string;
  status: "Scheduled" | "In Progress" | "Completed" | "Cancelled";
  room: string;
}

const appointments: Appointment[] = [
  {
    id: "A001",
    time: "09:00 AM",
    patient: "Sarah Johnson",
    doctor: "Dr. Smith",
    type: "General Checkup",
    status: "Scheduled",
    room: "Room 101"
  },
  {
    id: "A002",
    time: "09:30 AM",
    patient: "Michael Chen",
    doctor: "Dr. Williams",
    type: "Consultation",
    status: "In Progress",
    room: "Room 203"
  },
  {
    id: "A003",
    time: "10:00 AM",
    patient: "Emily Davis",
    doctor: "Dr. Brown",
    type: "Follow-up",
    status: "Scheduled",
    room: "Room 105"
  },
  {
    id: "A004",
    time: "10:30 AM",
    patient: "Robert Wilson",
    doctor: "Dr. Johnson",
    type: "Surgery Prep",
    status: "Scheduled",
    room: "Room 301"
  }
];

const getStatusColor = (status: Appointment["status"]) => {
  switch (status) {
    case "Scheduled":
      return "bg-primary text-primary-foreground";
    case "In Progress":
      return "bg-accent text-accent-foreground";
    case "Completed":
      return "bg-secondary text-secondary-foreground";
    case "Cancelled":
      return "bg-destructive text-destructive-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export const AppointmentScheduler = () => {
  return (
    <Card className="bg-gradient-card shadow-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-foreground">Today's Appointments</CardTitle>
          <Button variant="outline" size="sm">
            Schedule New
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:shadow-card transition-all duration-200">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-primary">
                  <Clock className="w-4 h-4" />
                  <span className="font-medium text-sm">{appointment.time}</span>
                </div>
                
                <div>
                  <div className="flex items-center space-x-2">
                    <User className="w-3 h-3 text-muted-foreground" />
                    <p className="font-medium text-foreground text-sm">{appointment.patient}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">{appointment.doctor} • {appointment.type}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <MapPin className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{appointment.room}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Badge className={getStatusColor(appointment.status)}>
                  {appointment.status}
                </Badge>
                <Button variant="ghost" size="sm" className="text-xs">
                  Manage
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};