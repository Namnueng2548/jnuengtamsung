import { MessageCircle, Sparkles } from "lucide-react";

const LINE_URL = "https://line.me/R/";

const messages = [
  { from: "user", text: "กินอะไรดี" },
  { from: "ai", text: "วันนี้อยากได้เผ็ดไหมครับ? 🌶️" },
  { from: "user", text: "เผ็ดนิดหน่อย" },
  { from: "ai", text: "แนะนำข้าวกะเพราไก่เผ็ดกลางครับ อร่อยและกำลังดี! 🍳" },
  { from: "user", text: "เอาเลย สั่งได้เลย" },
  { from: "ai", text: "รับทราบครับ! สั่งข้าวกะเพราไก่ 1 จาน เดี๋ยวทำให้เลยนะครับ ✅" },
];

const ChatDemoPage = () => (
  <main className="pt-24 pb-20">
    <div className="container max-w-lg">
      <div className="text-center mb-8 space-y-2">
        <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full font-body text-sm">
          <Sparkles className="w-4 h-4" />
          AI Chat Demo
        </div>
        <h1 className="font-heading text-3xl font-bold">ลองคุยกับ <span className="text-primary">AI</span></h1>
        <p className="font-body text-muted-foreground">ตัวอย่างการสนทนากับ AI ใน LINE</p>
      </div>

      {/* Chat container */}
      <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg">
        {/* Chat header */}
        <div className="bg-foreground px-5 py-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
            AI
          </div>
          <div>
            <p className="font-heading text-sm font-semibold text-background">AI สั่ง Bot</p>
            <p className="font-body text-xs text-background/60">ออนไลน์</p>
          </div>
        </div>

        {/* Messages */}
        <div className="p-5 space-y-4 min-h-[400px] bg-muted/30">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"} animate-bubble-in`}
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              <div
                className={`px-4 py-2.5 rounded-2xl font-body text-sm max-w-[80%] ${
                  msg.from === "user"
                    ? "bg-secondary text-secondary-foreground rounded-br-md"
                    : "bg-card text-foreground rounded-bl-md border border-border"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Fake input */}
        <div className="p-4 border-t border-border flex gap-3 items-center">
          <div className="flex-1 bg-muted rounded-full px-4 py-2.5 font-body text-sm text-muted-foreground">
            พิมพ์ข้อความ...
          </div>
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-primary-foreground" />
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#06C755] text-primary-foreground px-8 py-3 rounded-full font-heading font-semibold hover:brightness-110 transition-all"
        >
          <MessageCircle className="w-5 h-5" />
          ไปสั่งใน LINE
        </a>
      </div>
    </div>
  </main>
);

export default ChatDemoPage;
