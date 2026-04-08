import { Link } from "react-router-dom";
import { MessageCircle, Sparkles, Send, ChefHat, Star } from "lucide-react";
import heroFood from "@/assets/hero-food.jpg";
import { menuItems } from "@/data/menu";
import AddToCartButton from "@/components/AddToCartButton";

const LINE_URL = "https://lin.ee/RaIqlSp";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroFood} alt="อาหารไทย" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
    </div>
    <div className="container relative z-10 py-20">
      <div className="max-w-xl space-y-6">
        <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full font-body text-sm">
          <Sparkles className="w-4 h-4" />
          AI-Powered Food Ordering
        </div>
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
          หิวแล้ว<br />กินอะไรดี?
          <span className="block text-accent">ให้ AI ช่วยเลือกให้คุณ</span>
        </h1>
        <p className="font-body text-lg text-primary-foreground/80">
          สั่งอาหารตามสั่งง่าย ๆ ผ่าน LINE แค่แชทเดียวจบ
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#06C755] text-primary-foreground px-8 py-4 rounded-full font-heading font-semibold text-lg hover:brightness-110 transition-all shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            สั่งอาหารผ่าน LINE
          </a>
          <Link
            to="/chat-demo"
            className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur text-primary-foreground border border-primary-foreground/30 px-8 py-4 rounded-full font-heading font-semibold text-lg hover:bg-primary-foreground/30 transition-all"
          >
            <Sparkles className="w-5 h-5" />
            ลอง AI Demo
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const steps = [
  { icon: Send, title: "พิมพ์สิ่งที่อยากกิน", desc: "บอก AI ว่าอยากกินอะไร อารมณ์ไหน" },
  { icon: Sparkles, title: "AI เข้าใจและแนะนำ", desc: "AI วิเคราะห์และแนะนำเมนูที่ใช่" },
  { icon: ChefHat, title: "กดสั่งผ่าน LINE", desc: "สั่งเลย ส่งตรงถึงมือคุณ" },
];

const HowItWorks = () => (
  <section className="py-20 bg-card">
    <div className="container">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
        สั่งง่ายแค่ <span className="text-primary">3 ขั้นตอน</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div key={i} className="text-center space-y-4 fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
            <div className="w-20 h-20 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
              <step.icon className="w-10 h-10 text-primary" />
            </div>
            <div className="font-heading text-sm font-semibold text-primary">ขั้นตอนที่ {i + 1}</div>
            <h3 className="font-heading text-xl font-bold">{step.title}</h3>
            <p className="font-body text-muted-foreground">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FeaturedMenu = () => (
  <section className="py-20">
    <div className="container">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
        เมนู<span className="text-primary">ยอดนิยม</span>
      </h2>
      <p className="text-center font-body text-muted-foreground mb-12">เมนูที่ลูกค้าสั่งมากที่สุด</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.slice(0, 6).map((item) => (
          <div key={item.id} className="card-food">
            <div className="aspect-square overflow-hidden">
              <img src={item.image} alt={item.name} loading="lazy" width={640} height={640} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-5 space-y-2">
              <div className="flex items-center gap-2">
                <h3 className="font-heading text-lg font-bold">{item.name}</h3>
                {item.tags.map((tag) => (
                  <span key={tag} className="text-xs font-body font-semibold bg-accent/30 text-accent-foreground px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground">{item.description}</p>
              <div className="flex items-center justify-between pt-1">
                <span className="font-heading text-lg font-bold text-primary">฿{item.price}</span>
                <AddToCartButton item={item} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/menu" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-heading font-semibold hover:brightness-110 transition-all">
          ดูเมนูทั้งหมด
        </Link>
      </div>
    </div>
  </section>
);

const AiHighlight = () => (
  <section className="py-20 bg-card">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            AI ช่วยคุณ<span className="text-primary">เลือกเมนู</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            ไม่ต้องคิดเอง แค่บอก AI ว่าอยากกินแบบไหน เดี๋ยว AI จัดให้!
          </p>
          <Link
            to="/chat-demo"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-heading font-semibold hover:brightness-110 transition-all"
          >
            <Sparkles className="w-5 h-5" />
            ลองคุยกับ AI
          </Link>
        </div>
        <div className="bg-foreground/5 rounded-2xl p-6 space-y-4 max-w-md mx-auto w-full">
          <div className="flex justify-end">
            <div className="bg-secondary text-secondary-foreground px-4 py-2.5 rounded-2xl rounded-br-md font-body text-sm max-w-[80%]">
              กินอะไรดี
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-muted text-foreground px-4 py-2.5 rounded-2xl rounded-bl-md font-body text-sm max-w-[80%]">
              ลองข้าวผัดกะเพราหมูไหมครับ เผ็ดกลางกำลังดี! 🌶️
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-secondary text-secondary-foreground px-4 py-2.5 rounded-2xl rounded-br-md font-body text-sm max-w-[80%]">
              เอาเลย! สั่งได้เลย
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-muted text-foreground px-4 py-2.5 rounded-2xl rounded-bl-md font-body text-sm max-w-[80%]">
              รับทราบครับ! สั่งข้าวกะเพราหมู 1 จาน เดี๋ยวทำให้เลยนะครับ 🍳
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const reviews = [
  { name: "มิ้นท์", comment: "สะดวกมากค่ะ แค่พิมพ์ไป AI ก็แนะนำเมนูให้เลย ชอบมาก!", rating: 5 },
  { name: "เบนซ์", comment: "ไม่ต้องคิดเอง บอก AI ว่าหิวมาก ก็จัดเมนูให้ทันที 555", rating: 5 },
  { name: "แพร", comment: "สั่งผ่าน LINE สะดวก ไม่ต้องโหลดแอปเพิ่ม ดีมากค่ะ", rating: 4 },
  { name: "โอม", comment: "อาหารอร่อย สั่งง่าย AI เข้าใจสิ่งที่เราอยากกินจริง ๆ", rating: 5 },
];

const Reviews = () => (
  <section className="py-20">
    <div className="container">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
        ลูกค้า<span className="text-primary">พูดถึงเรา</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="bg-card rounded-2xl p-6 space-y-3 border border-border">
            <div className="flex gap-1">
              {Array.from({ length: r.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="font-body text-sm text-muted-foreground">"{r.comment}"</p>
            <p className="font-heading font-semibold text-sm">{r.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-20 bg-primary">
    <div className="container text-center space-y-6">
      <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground">
        หิวเมื่อไหร่ แค่ทัก LINE
      </h2>
      <p className="font-body text-lg text-primary-foreground/80">สั่งอาหารง่าย ๆ ให้ AI ช่วยคิดเมนูให้คุณ</p>
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-10 py-4 rounded-full font-heading font-bold text-lg hover:scale-105 transition-all shadow-xl"
      >
        <MessageCircle className="w-6 h-6" />
        สั่งเลย
      </a>
    </div>
  </section>
);

const HomePage = () => (
  <main>
    <HeroSection />
    <HowItWorks />
    <FeaturedMenu />
    <AiHighlight />
    <Reviews />
    <FinalCTA />
  </main>
);

export default HomePage;
