import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import CartButton from "@/components/CartButton";

const navItems = [
  { label: "หน้าแรก", to: "/" },
  { label: "เมนู", to: "/menu" },
  { label: "AI Chat Demo", to: "/chat-demo" },
  { label: "AI แนะนำ", to: "/recommend" },
  { label: "เกี่ยวกับ", to: "/about" },
];

const LINE_URL = "https://lin.ee/RaIqlSp";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="font-heading text-2xl font-bold text-primary">
          🍳 AI<span className="text-secondary">สั่ง</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`font-body text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === item.to ? "text-primary" : "text-foreground/70"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <CartButton />
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#06C755] text-primary-foreground px-5 py-2.5 rounded-full font-heading font-semibold text-sm hover:brightness-110 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            สั่งผ่าน LINE
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-b border-border px-6 pb-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={`block font-body text-sm font-medium py-2 ${
                location.pathname === item.to ? "text-primary" : "text-foreground/70"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#06C755] text-primary-foreground px-5 py-2.5 rounded-full font-heading font-semibold text-sm w-full justify-center"
          >
            <MessageCircle className="w-4 h-4" />
            สั่งผ่าน LINE
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
