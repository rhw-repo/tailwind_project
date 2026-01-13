import { useEffect, useRef } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/items.json";

export const ShoppingCart = () => {
  const { isOpen, closeCart, cartItems } = useShoppingCart();

  const isOpenRef = useRef(isOpen);
  const closeCartRef = useRef(closeCart);

  useEffect(() => {
    isOpenRef.current = isOpen;
    closeCartRef.current = closeCart;
  }, [isOpen, closeCart]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpenRef.current) {
        closeCartRef.current();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <div
        onClick={closeCart}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <aside
          role="dialog"
          aria-modal="true"
          aria-hidden={!isOpen}
          className={`fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl
          transform transition-transform duration-300 ease-in-out
          flex flex-col
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
        >
          <header className="flex items-center justify-between px-6 py-4 border-b">
            <h2 className="text-xl font-semibold">Cart</h2>
            <button
              onClick={closeCart}
              aria-label="Close cart"
              className="p-2 text-gray-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
            >
              ✕
            </button>
          </header>

          <div className="p-6 overflow-y-auto">
            <div className="flex flex-col gap-4 text-gray-500">
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>
            <p className="text-gray-950 text-right font-bold mt-4">
              Total:{" "}
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </p>
          </div>
          <footer className="px-6 py-4 border-t">
            <button className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">
              Checkout
            </button>
          </footer>
        </aside>
      </div>
    </>
  );
};
