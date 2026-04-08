import { useState } from "react";
import { Sparkles, MessageCircle } from "lucide-react";
import { menuItems } from "@/data/menu";

const LINE_URL = "https://line.me/R/";

const moods = [
  { label: "หิวมาก 🍖", value: "hungry" },
  { label: "อยากเผ็ด 🌶️", value: "spicy" },
  { label: "อยากกินคลีน 🥗", value: "healthy" },
  { label: "อยากกินเร็ว ⚡", value: "quick" },
];

const recommendations: Record<string, string[]> = {
  hungry: ["1", "8", "2"],
  spicy: ["1", "5", "3"],
  healthy: ["7", "4"],
  quick: ["6", "1"],
};

const RecommendPage = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const moodLabel = moods.find((m) => m.value === selected)?.label;
  const recIds = selected ? recommendations[selected] || [] : [];
  const recItems = recIds.map((id) => menuItems.find((m) => m.id === id)!).filter(Boolean);

  return (
    <main className="pt-24 pb-20">
      <div className="container max-w-2xl">
        <div className="text-center mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-body text-sm">
            <Sparkles className="w-4 h-4" />
            AI Recommendation
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold">
            ให้ AI ช่วย<span className="text-primary">เลือกเมนู</span>ของคุณ
          </h1>
          <p className="font-body text-muted-foreground">เลือกอารมณ์ของคุณ แล้ว AI จะแนะนำเมนูที่ใช่</p>
        </div>

        {/* Step 1 */}
        <div className="mb-10">
          <h2 className="font-heading text-lg font-semibold mb-4">Step 1: เลือกอารมณ์</h2>
          <div className="grid grid-cols-2 gap-4">
            {moods.map((mood) => (
              <button
                key={mood.value}
                onClick={() => setSelected(mood.value)}
                className={`p-5 rounded-2xl font-heading font-semibold text-lg transition-all border-2 ${
                  selected === mood.value
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-card text-foreground hover:border-primary/50"
                }`}
              >
                {mood.label}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2 */}
        {selected && (
          <div className="space-y-6 fade-in-up">
            <h2 className="font-heading text-lg font-semibold">
              Step 2: AI แนะนำสำหรับ "{moodLabel}"
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {recItems.map((item) => (
                <div key={item.id} className="card-food">
                  <div className="aspect-square overflow-hidden">
                    <img src={item.image} alt={item.name} loading="lazy" width={640} height={640} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5 space-y-2">
                    <h3 className="font-heading text-lg font-bold">{item.name}</h3>
                    <p className="font-body text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#06C755] text-primary-foreground px-8 py-3 rounded-full font-heading font-semibold hover:brightness-110 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                สั่งผ่าน LINE เลย
              </a>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default RecommendPage;
