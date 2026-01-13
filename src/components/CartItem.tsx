import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";

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
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      </div>
      <div className="flex justify-end items-center gap-4">
        <div className="flex flex-col justify-center items-end">
          <p>{quantity}</p>
          <p>total</p>
        </div>
        <button className="p-4">X</button>
      </div>
    </div>
  );
};
