import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Send, Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";
import aiDoctorIcon from "@/assets/ai-doctor-icon.jpg";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

interface AIChatProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AIChat = ({ isOpen, onClose }: AIChatProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your AI Medical Assistant. I can help you with patient information, appointment scheduling, medical queries, and hospital operations. How can I assist you today?",
      sender: "ai",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputValue);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        sender: "ai",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  const generateAIResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes("appointment") || lowerQuery.includes("schedule")) {
      return "I can help you schedule an appointment. Would you like to book a new appointment or check existing ones? Please provide the patient's name and preferred doctor.";
    } else if (lowerQuery.includes("patient") || lowerQuery.includes("medical record")) {
      return "I can assist with patient information. Please provide the patient ID or name to retrieve their medical records and current status.";
    } else if (lowerQuery.includes("doctor") || lowerQuery.includes("staff")) {
      return "I can provide information about our medical staff, their specializations, and availability. Which department or doctor are you looking for?";
    } else if (lowerQuery.includes("symptom") || lowerQuery.includes("headache") || lowerQuery.includes("fever")) {
      return "Based on the symptoms you've described, I recommend scheduling an appointment with a General Physician. Would you like me to check available time slots for today or tomorrow?";
    } else if (lowerQuery.includes("emergency") || lowerQuery.includes("urgent")) {
      return "For medical emergencies, please contact emergency services immediately or visit our Emergency Department. If this is non-urgent, I can help schedule a priority appointment.";
    } else if (lowerQuery.includes("billing") || lowerQuery.includes("insurance")) {
      return "I can help with billing inquiries and insurance claims. Please provide the patient ID or invoice number for specific assistance.";
    } else {
      return "I understand you need assistance. Could you please provide more specific details about what you're looking for? I can help with appointments, patient records, doctor information, symptoms assessment, or billing inquiries.";
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl h-[600px] bg-gradient-card shadow-elevated flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img src={aiDoctorIcon} alt="AI Doctor" className="w-full h-full object-cover" />
            </div>
            <div>
              <CardTitle className="text-foreground">AI Medical Assistant</CardTitle>
              <p className="text-sm text-muted-foreground">Always here to help</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col p-0">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex items-start space-x-3",
                  message.sender === "user" && "flex-row-reverse space-x-reverse"
                )}
              >
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center",
                  message.sender === "ai" ? "bg-gradient-primary" : "bg-secondary"
                )}>
                  {message.sender === "ai" ? (
                    <Bot className="w-4 h-4 text-primary-foreground" />
                  ) : (
                    <User className="w-4 h-4 text-secondary-foreground" />
                  )}
                </div>
                
                <div className={cn(
                  "max-w-[80%] p-3 rounded-lg",
                  message.sender === "ai"
                    ? "bg-muted text-foreground"
                    : "bg-primary text-primary-foreground"
                )}>
                  <p className="text-sm">{message.content}</p>
                  <p className={cn(
                    "text-xs mt-1",
                    message.sender === "ai" ? "text-muted-foreground" : "text-primary-foreground/70"
                  )}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="border-t border-border p-4">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about patients, appointments, symptoms..."
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} className="bg-gradient-primary shadow-medical">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};