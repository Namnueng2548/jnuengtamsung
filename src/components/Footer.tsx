import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-background py-12">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-heading text-xl font-bold mb-3">🍳 AI สั่ง</h3>
          <p className="font-body text-sm opacity-70">
            ร้านอาหารตามสั่งยุคใหม่ สั่งง่ายผ่าน LINE ด้วย AI
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3">ลิงก์</h4>
          <div className="space-y-2 font-body text-sm opacity-70">
            <Link to="/menu" className="block hover:opacity-100 transition-opacity">เมนู</Link>
            <Link to="/chat-demo" className="block hover:opacity-100 transition-opacity">AI Chat Demo</Link>
            <Link to="/recommend" className="block hover:opacity-100 transition-opacity">AI แนะนำ</Link>
            <Link to="/about" className="block hover:opacity-100 transition-opacity">เกี่ยวกับเรา</Link>
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3">ติดต่อ</h4>
          <p className="font-body text-sm opacity-70">
            สั่งอาหารได้ตลอด 10:00 - 21:00<br />
            ผ่าน LINE Official Account
          </p>
        </div>
      </div>
      <div className="border-t border-background/20 mt-8 pt-6 text-center font-body text-sm opacity-50">
        © 2026 AI สั่ง — Made with 🧡 and AI
      </div>
    </div>
  </footer>
);

export default Footer;
