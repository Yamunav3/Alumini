import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import StudentPortal from "./pages/StudentPortal";
import Gamification from "./pages/Gamification";
import AlumniNetwork from "./pages/AlumniNetwork";
import CareerPortal from "./pages/CareerPortal";
import AdminPanel from "./pages/AdminPanel";  
import StaffPortal from "./pages/StaffPortal";
import DonationPortal from "./pages/DonationPortal";
import Analytics from "./pages/Analytics";
import EventManagement from "./pages/EventManagement";

import AlumniProfiles from "./pages/AlumniProfiles";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/alumni" element={<Layout><AlumniNetwork /></Layout>} />
          <Route path="/careers" element={<Layout><CareerPortal /></Layout>} />
          <Route path="/student-portal" element={<Layout><StudentPortal /></Layout>} />
          <Route path="/gamification" element={<Layout><Gamification /></Layout>} />
          <Route path="/admin" element={<Layout><AdminPanel /></Layout>} />
          <Route path="/staff" element={<Layout><StaffPortal /></Layout>} />
          <Route path="/donations" element={<Layout><DonationPortal /></Layout>} />
          <Route path="/analytics" element={<Layout><Analytics /></Layout>} />
          <Route path="/events" element={<Layout><EventManagement /></Layout>} />
          <Route path="/profile" element={<Layout><AlumniProfiles /></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
