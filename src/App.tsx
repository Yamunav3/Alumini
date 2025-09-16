import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import RoleBasedLayout from "./components/RoleBasedLayout";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import StudentPortal from "./pages/StudentPortal";
import StudentDashboard from "./pages/StudentDashboard";
import AlumniDashboard from "./pages/AlumniDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import StaffDashboard from "./pages/StaffDashboard";
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
          {/* Welcome/Landing page */}
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/" element={<Welcome />} />
          
          {/* Authentication */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Role-based Dashboards */}
          <Route path="/student-dashboard" element={<RoleBasedLayout userRole="student"><StudentDashboard /></RoleBasedLayout>} />
          <Route path="/alumni-dashboard" element={<RoleBasedLayout userRole="alumni"><AlumniDashboard /></RoleBasedLayout>} />
          <Route path="/admin-dashboard" element={<RoleBasedLayout userRole="admin"><AdminDashboard /></RoleBasedLayout>} />
          <Route path="/staff-dashboard" element={<RoleBasedLayout userRole="staff"><StaffDashboard /></RoleBasedLayout>} />
          
          {/* Shared pages with role-based navigation */}
          <Route path="/home" element={<RoleBasedLayout userRole="student"><Home /></RoleBasedLayout>} />
          <Route path="/careers" element={<RoleBasedLayout userRole="student"><CareerPortal /></RoleBasedLayout>} />
          <Route path="/events" element={<RoleBasedLayout userRole="student"><EventManagement /></RoleBasedLayout>} />
          <Route path="/profile" element={<RoleBasedLayout userRole="student"><AlumniProfiles /></RoleBasedLayout>} />
          
          {/* Legacy routes (keeping for backward compatibility) */}
          <Route path="/alumni" element={<Layout><AlumniNetwork /></Layout>} />
          <Route path="/student-portal" element={<Layout><StudentPortal /></Layout>} />
          <Route path="/gamification" element={<Layout><Gamification /></Layout>} />
          <Route path="/admin" element={<Layout><AdminPanel /></Layout>} />
          <Route path="/staff" element={<Layout><StaffPortal /></Layout>} />
          <Route path="/donations" element={<Layout><DonationPortal /></Layout>} />
          <Route path="/analytics" element={<Layout><Analytics /></Layout>} />
          
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
