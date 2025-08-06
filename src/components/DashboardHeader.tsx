import { Bell, User, Search, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface DashboardHeaderProps {
  onToggleChat: () => void;
}

export const DashboardHeader = ({ onToggleChat }: DashboardHeaderProps) => {
  return (
    <header className="bg-card border-b border-border shadow-card px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">HMS</span>
            </div>
            <h1 className="text-xl font-bold text-foreground">MediCare AI</h1>
          </div>
          
          <div className="hidden md:flex relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search patients, doctors, appointments..." 
              className="pl-10 w-96"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button
            onClick={onToggleChat}
            variant="outline"
            size="sm"
            className="flex items-center space-x-2 hover:bg-primary hover:text-primary-foreground"
          >
            <MessageSquare className="w-4 h-4" />
            <span className="hidden sm:inline">AI Assistant</span>
          </Button>
          
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground rounded-full w-4 h-4 text-xs flex items-center justify-center">
              3
            </span>
          </Button>

          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback className="bg-primary text-primary-foreground">
              <User className="w-4 h-4" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};