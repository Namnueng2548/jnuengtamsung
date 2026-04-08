import { MessageCircle } from "lucide-react";

const LINE_URL = "https://line.me/R/";

const FloatingLineButton = () => (
  <a
    href={LINE_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#06C755] text-primary-foreground px-5 py-3.5 rounded-full font-heading font-semibold text-sm shadow-lg hover:shadow-xl hover:brightness-110 transition-all animate-float"
  >
    <MessageCircle className="w-5 h-5" />
    <span className="hidden sm:inline">Order via LINE</span>
  </a>
);

export default FloatingLineButton;
