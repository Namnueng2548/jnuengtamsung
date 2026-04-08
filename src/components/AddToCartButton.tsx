import { Plus, Minus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import type { MenuItem } from "@/data/types";

const AddToCartButton = ({ item }: { item: MenuItem }) => {
  const { items, addItem, updateQuantity } = useCart();
  const cartItem = items.find((i) => i.menuItem.id === item.id);
  const qty = cartItem?.quantity || 0;

  if (qty === 0) {
    return (
      <button
        onClick={(e) => { e.stopPropagation(); addItem(item); }}
        className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-2 rounded-full font-heading text-sm font-semibold hover:brightness-110 hover:scale-105 active:scale-95 transition-all"
      >
        <Plus className="w-4 h-4" />
        เพิ่มลงตะกร้า
      </button>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-1 py-1">
      <button
        onClick={(e) => { e.stopPropagation(); updateQuantity(item.id, qty - 1); }}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-primary-foreground hover:brightness-110 active:scale-90 transition-all"
      >
        <Minus className="w-4 h-4" />
      </button>
      <span className="font-heading font-bold text-sm w-6 text-center text-foreground">{qty}</span>
      <button
        onClick={(e) => { e.stopPropagation(); addItem(item); }}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-primary-foreground hover:brightness-110 active:scale-90 transition-all"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
};

export default AddToCartButton;
