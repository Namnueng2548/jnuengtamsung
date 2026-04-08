import { X, Minus, Plus, ShoppingBag, Trash2, PartyPopper, MessageCircle } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const LINE_URL = "https://lin.ee/RaIqlSp";

const CartDrawer = () => {
  const {
    items, updateQuantity, removeItem, clearCart,
    totalItems, totalPrice, isCartOpen, setIsCartOpen,
    isCheckoutDone, setIsCheckoutDone,
  } = useCart();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setIsCheckoutDone(true);
    clearCart();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-foreground/40 backdrop-blur-sm z-50 animate-fade-in"
        onClick={() => { setIsCartOpen(false); setIsCheckoutDone(false); }}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-background z-50 shadow-2xl flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-primary" />
            <h2 className="font-heading text-xl font-bold">ตะกร้าสินค้า</h2>
            {totalItems > 0 && (
              <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={() => { setIsCartOpen(false); setIsCheckoutDone(false); }}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-muted transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5">
          {isCheckoutDone ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4 fade-in-up">
              <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center">
                <PartyPopper className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="font-heading text-2xl font-bold">สั่งอาหารสำเร็จ! 🎉</h3>
              <p className="font-body text-muted-foreground">
                ออเดอร์ของคุณถูกบันทึกเรียบร้อยแล้ว<br />
                (Demo Mode — ไม่มีการสั่งจริง)
              </p>
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#06C755] text-primary-foreground px-6 py-3 rounded-full font-heading font-semibold hover:brightness-110 transition-all mt-2"
              >
                <MessageCircle className="w-5 h-5" />
                หรือสั่งผ่าน LINE จริง
              </a>
            </div>
          ) : items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-3">
              <ShoppingBag className="w-16 h-16 text-muted-foreground/30" />
              <p className="font-body text-muted-foreground">ตะกร้ายังว่างอยู่</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.menuItem.id}
                  className="flex gap-3 bg-card rounded-2xl p-3 border border-border hover:shadow-md transition-shadow"
                >
                  <img
                    src={item.menuItem.image}
                    alt={item.menuItem.name}
                    className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading font-bold text-sm truncate">{item.menuItem.name}</h4>
                    <p className="font-body text-primary font-semibold text-sm mt-0.5">
                      ฿{item.menuItem.price}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="inline-flex items-center gap-1.5 bg-muted rounded-full px-1 py-0.5">
                        <button
                          onClick={() => updateQuantity(item.menuItem.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center rounded-full bg-background hover:bg-primary/10 transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="font-heading font-bold text-sm w-5 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.menuItem.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center rounded-full bg-background hover:bg-primary/10 transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.menuItem.id)}
                        className="text-destructive/60 hover:text-destructive transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {!isCheckoutDone && items.length > 0 && (
          <div className="border-t border-border p-5 space-y-4">
            <div className="flex justify-between font-heading">
              <span className="text-muted-foreground">รวมทั้งหมด</span>
              <span className="text-xl font-bold text-primary">฿{totalPrice}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-primary text-primary-foreground py-4 rounded-full font-heading font-bold text-lg hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg"
            >
              สั่งอาหาร (Demo)
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
