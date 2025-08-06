import { useState } from "react";
import { Users, UserCheck, Calendar, Activity } from "lucide-react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { StatsCard } from "@/components/StatsCard";
import { PatientTable } from "@/components/PatientTable";
import { AppointmentScheduler } from "@/components/AppointmentScheduler";
import { AIChat } from "@/components/AIChat";
import hospitalHero from "@/assets/hospital-hero.jpg";
import medicalDashboard from "@/assets/medical-dashboard.jpg";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <DashboardHeader onToggleChat={() => setIsChatOpen(true)} />
      
      <div className="flex">
        {/* Sidebar */}
        <DashboardSidebar />
        
        {/* Main Content */}
        <main className="flex-1 p-6 space-y-6">
          {/* Hero Section */}
          <div className="relative bg-gradient-hero rounded-xl overflow-hidden shadow-elevated">
            <div className="absolute inset-0">
              <img 
                src={hospitalHero} 
                alt="Hospital" 
                className="w-full h-full object-cover opacity-20"
              />
            </div>
            <div className="relative p-8 text-primary-foreground">
              <h1 className="text-3xl font-bold mb-2">Welcome to MediCare AI</h1>
              <p className="text-lg opacity-90 mb-4">
                Advanced Hospital Management System with AI-powered assistance
              </p>
              <p className="text-sm opacity-75">
                Streamline operations, enhance patient care, and optimize workflows with intelligent automation
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Total Patients"
              value="1,245"
              change="+12% from last month"
              changeType="positive"
              icon={Users}
            />
            <StatsCard
              title="Active Doctors"
              value="18"
              change="2 new this week"
              changeType="positive"
              icon={UserCheck}
            />
            <StatsCard
              title="Appointments Today"
              value="47"
              change="+5 from yesterday"
              changeType="positive"
              icon={Calendar}
            />
            <StatsCard
              title="Emergency Cases"
              value="3"
              change="All handled"
              changeType="neutral"
              icon={Activity}
            />
          </div>

          {/* Dashboard Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <PatientTable />
              
              {/* Medical Analytics Preview */}
              <div className="bg-gradient-card rounded-xl p-6 shadow-card">
                <h3 className="text-lg font-semibold text-foreground mb-4">Medical Analytics</h3>
                <div className="relative">
                  <img 
                    src={medicalDashboard} 
                    alt="Medical Dashboard" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-primary/10 rounded-lg flex items-center justify-center">
                    <p className="text-foreground font-medium">Interactive Charts & Reports</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <AppointmentScheduler />
            </div>
          </div>
        </main>
      </div>

      {/* AI Chat Modal */}
      <AIChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default Index;
