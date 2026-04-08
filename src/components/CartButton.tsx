import { ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const CartButton = () => {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className="relative p-2 rounded-full hover:bg-muted transition-colors"
      aria-label="เปิดตะกร้า"
    >
      <ShoppingBag className="w-5 h-5 text-foreground/70" />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center animate-scale-in">
          {totalItems}
        </span>
      )}
    </button>
  );
};

export default CartButton;
