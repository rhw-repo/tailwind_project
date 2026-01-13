import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

export interface StoreItemCardProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

export const StoreItemCard: React.FC<StoreItemCardProps> = ({
  id,
  name,
  price,
  imgUrl,
}) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <div key={id} className="shadow-sm p-4 rounded-sm h-full">
      <div className="aspect-3/2 w-full">
        <img
          src={imgUrl}
          alt={name}
          className="w-full h-full object-cover rounded-sm"
        />
      </div>
      <div className="flex justify-between items-baseline mb-8">
        <h2 className="font-extrabold text-2xl text-black-600 hover:text-gray-900 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 active:text-purple-950">
          {name}
        </h2>
        <p className="text-lg font-semibold text-gray-800 hover:text-gray-900 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 active:text-purple-950">
          {formatCurrency(price)}
        </p>
      </div>

      <div className="mt-auto">
        {quantity === 0 ? (
          <button
            onClick={() => increaseCartQuantity(id)}
            className="w-full bg-blue-700 text-neutral-100 rounded-sm px-4 py-2"
          >
            Add To Cart
          </button>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={() => increaseCartQuantity(id)}
                className="bg-blue-700 text-neutral-100 rounded-sm px-4 py-2"
              >
                +
              </button>
              <span className="text-2xl">{quantity} in cart</span>
              <button
                onClick={() => decreaseCartQuantity(id)}
                className="bg-blue-700 text-neutral-100 rounded-sm px-4 py-2"
              >
                -
              </button>
            </div>
            <button
              onClick={() => removeFromCart(id)}
              className="bg-red-400 text-xs sm:text-sm md:text-base lg:text-lg text-neutral-100 rounded-sm p-2 m-4"
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
