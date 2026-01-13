import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();

  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <div className="flex gap-4 justify-between items-start">
      <div className="flex gap-2 justify-start items-center">
        <div key={id} className="shadow-sm p-0 rounded-sm">
          <div className="aspect-3/2 w-20">
            <img
              src={item.imgUrl}
              alt={item.name}
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <p>
            {item.name}
            {quantity > 1 && <span className="text-xs p-2">x {quantity}</span>}
          </p>
          <p className="text-xs">{formatCurrency(item.price)}</p>
        </div>
      </div>
      <div className="flex justify-end items-center gap-4">
        <div className="flex flex-col justify-center items-end">
          <p>{formatCurrency(item.price * quantity)}</p>
        </div>
        <button
          onClick={() => removeFromCart(item.id)}
          className="w-8 h-8 flex justify-center items-center border border-red-600 rounded-sm text-red-600 transition-colors hover:text-white hover:bg-red-600 active:bg-red-900 active:text-white"
        >
          &times;
        </button>
      </div>
    </div>
  );
};
