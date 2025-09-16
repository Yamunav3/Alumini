import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User,
  Minimize2,
  Maximize2
} from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Asthra Assistant. I can help you with information about mentorships, internships, events, and more. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);

  const quickActions = [
    "Find a mentor",
    "Search internships",
    "Upcoming webinars",
    "How to donate",
    "Contact support"
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: message,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(message),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (userMessage: string): string => {
    const lowercaseMessage = userMessage.toLowerCase();
    
    if (lowercaseMessage.includes('mentor')) {
      return "Great! I can help you find mentors. We have 250+ experienced alumni ready to guide you. You can browse mentors by expertise, company, or industry. Would you like me to show you some popular mentors in a specific field?";
    } else if (lowercaseMessage.includes('internship')) {
      return "We have 89 internship opportunities available right now! These include positions at top companies like Tesla, Spotify, and Airbnb. Would you like me to filter by location, duration, or field of interest?";
    } else if (lowercaseMessage.includes('webinar') || lowercaseMessage.includes('event')) {
      return "Upcoming webinars and events are a great way to learn! We have 45 webinars scheduled, including 'Building Your Tech Career' and 'Advanced React Patterns'. Many are free! Would you like to see the full schedule?";
    } else if (lowercaseMessage.includes('donation') || lowercaseMessage.includes('donate')) {
      return "Thank you for your interest in supporting students! Donations help fund scholarships, events, and mentorship programs. You can donate any amount starting from $10. Would you like to learn about our current fundraising campaigns?";
    } else if (lowercaseMessage.includes('hello') || lowercaseMessage.includes('hi')) {
      return "Hello! Welcome to Asthra. I'm here to help you navigate our alumni network and find the resources you need. What would you like to explore today?";
    } else {
      return "I understand you're looking for information. I can help you with mentorships, internships, webinars, donations, and general navigation. Could you please be more specific about what you're looking for?";
    }
  };

  const handleQuickAction = (action: string) => {
    setMessage(action);
    handleSendMessage();
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300"
          size="icon"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`w-80 shadow-2xl border-0 bg-card/95 backdrop-blur-sm transition-all duration-300 ${
        isMinimized ? 'h-16' : 'h-96'
      }`}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 cursor-pointer" onClick={() => setIsMinimized(!isMinimized)}>
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>
                <Bot className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-sm">Asthra Assistant</CardTitle>
              <CardDescription className="text-xs">Always here to help</CardDescription>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={(e) => {
                e.stopPropagation();
                setIsMinimized(!isMinimized);
              }}
            >
              {isMinimized ? <Maximize2 className="h-3 w-3" /> : <Minimize2 className="h-3 w-3" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0 flex flex-col h-80">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-2 rounded-lg text-sm ${
                      msg.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="px-3 py-2 border-t">
              <div className="flex flex-wrap gap-1 mb-2">
                {quickActions.map((action) => (
                  <Badge
                    key={action}
                    variant="secondary"
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground text-xs"
                    onClick={() => handleQuickAction(action)}
                  >
                    {action}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-3 border-t flex space-x-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 h-8 text-sm"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSendMessage();
                  }
                }}
              />
              <Button
                size="sm"
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className="h-8 w-8 p-0 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
              >
                <Send className="h-3 w-3" />
              </Button>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default ChatBot;