import { Bot, MessageCircle, Heart } from "lucide-react";

const LINE_URL = "https://lin.ee/RaIqlSp";

const AboutPage = () => (
  <main className="pt-24 pb-20">
    <div className="container max-w-3xl">
      <div className="text-center mb-12 space-y-4">
        <h1 className="font-heading text-3xl md:text-4xl font-bold">
          เกี่ยวกับ <span className="text-primary">AI สั่ง</span>
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
          ร้านอาหารตามสั่งยุคใหม่ ที่ใช้ AI ช่วยให้การตัดสินใจง่ายขึ้น
        </p>
      </div>

      <div className="space-y-8">
        <div className="bg-card rounded-2xl p-8 border border-border space-y-4">
          <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
            <Heart className="w-7 h-7 text-primary" />
          </div>
          <h2 className="font-heading text-2xl font-bold">เรื่องราวของเรา</h2>
          <p className="font-body text-muted-foreground leading-relaxed">
            เราเริ่มต้นจากปัญหาง่าย ๆ ที่ทุกคนเคยเจอ — "ไม่รู้จะกินอะไร" เลยนำ AI มาช่วยแนะนำเมนู 
            ผสมกับระบบสั่งอาหารผ่าน LINE ที่ทุกคนใช้อยู่แล้ว ทำให้การสั่งอาหารง่ายกว่าที่เคย
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 border border-border space-y-4">
          <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center">
            <Bot className="w-7 h-7 text-secondary" />
          </div>
          <h2 className="font-heading text-2xl font-bold">Mission</h2>
          <p className="font-body text-muted-foreground leading-relaxed">
            ลดปัญหา "ไม่รู้จะกินอะไร" ด้วย AI Chatbot ที่เข้าใจความต้องการ 
            และทำให้ทุกมื้ออาหารเป็นเรื่องง่ายแค่แชทเดียวจบ
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-primary/5 rounded-2xl p-6 text-center space-y-3">
            <Bot className="w-10 h-10 text-primary mx-auto" />
            <h3 className="font-heading font-bold text-lg">AI Chatbot</h3>
            <p className="font-body text-sm text-muted-foreground">
              AI ที่เข้าใจรสชาติ อารมณ์ และความชอบของคุณ
            </p>
          </div>
          <div className="bg-secondary/5 rounded-2xl p-6 text-center space-y-3">
            <MessageCircle className="w-10 h-10 text-secondary mx-auto" />
            <h3 className="font-heading font-bold text-lg">LINE Ordering</h3>
            <p className="font-body text-sm text-muted-foreground">
              สั่งอาหารผ่าน LINE ไม่ต้องโหลดแอปเพิ่ม
            </p>
          </div>
        </div>

        <div className="text-center pt-4">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#06C755] text-primary-foreground px-8 py-3 rounded-full font-heading font-semibold hover:brightness-110 transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            ติดต่อเราผ่าน LINE
          </a>
        </div>
      </div>
    </div>
  </main>
);

export default AboutPage;
