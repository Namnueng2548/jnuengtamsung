import { useState } from "react";
import { Search } from "lucide-react";
import { menuItems } from "@/data/menu";
import AddToCartButton from "@/components/AddToCartButton";

const filters = ["ทั้งหมด", "เผ็ด", "ของทอด", "สุขภาพ"];

const MenuPage = () => {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("ทั้งหมด");

  const filtered = menuItems.filter((item) => {
    const matchSearch = item.name.includes(search) || item.description.includes(search);
    const matchFilter = active === "ทั้งหมด" || item.category.includes(active);
    return matchSearch && matchFilter;
  });

  return (
    <main className="pt-24 pb-20">
      <div className="container">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-center mb-2">
          เมนู<span className="text-primary">ทั้งหมด</span>
        </h1>
        <p className="text-center font-body text-muted-foreground mb-8">เลือกเมนูที่ชอบแล้วสั่งได้เลย</p>

        {/* Search */}
        <div className="max-w-md mx-auto mb-6 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="ค้นหาเมนู..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full bg-card border border-border font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full font-heading text-sm font-semibold transition-all ${
                active === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-primary/10"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div key={item.id} className="card-food">
              <div className="aspect-square overflow-hidden">
                <img src={item.image} alt={item.name} loading="lazy" width={640} height={640} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-heading text-lg font-bold">{item.name}</h3>
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-xs font-body font-semibold bg-accent/30 text-accent-foreground px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="font-body text-sm text-muted-foreground">{item.description}</p>
                <div className="flex items-center justify-between pt-1">
                  <span className="font-heading text-xl font-bold text-primary">฿{item.price}</span>
                  <AddToCartButton item={item} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center font-body text-muted-foreground py-12">ไม่พบเมนูที่ค้นหา</p>
        )}
      </div>
    </main>
  );
};

export default MenuPage;
