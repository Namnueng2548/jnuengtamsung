import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/contexts/CartContext";
import Navbar from "@/components/Navbar";
import FloatingLineButton from "@/components/FloatingLineButton";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import ChatDemoPage from "./pages/ChatDemoPage";
import RecommendPage from "./pages/RecommendPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/chat-demo" element={<ChatDemoPage />} />
            <Route path="/recommend" element={<RecommendPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <CartDrawer />
          <FloatingLineButton />
        </CartProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
