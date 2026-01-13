import { useEffect, useRef } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";

type ShoppingCartItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export const ShoppingCart: React.FC<ShoppingCartItemProps> = () => {
  const { isOpen, closeCart } = useShoppingCart();

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
            <p className="text-gray-500">Your cart is empty.</p>
            <p className="text-gray-950 font-bold">Total:</p>
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
