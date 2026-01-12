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
}) => (
  <div key={id} className="shadow-sm p-4 rounded-sm">
    <div className="aspect-3/2 w-full">
      <img
        src={imgUrl}
        alt={name}
        className="w-full h-full object-cover rounded-sm"
      />
    </div>
    <div className="flex justify-between items-baseline">
      <h2 className="font-extrabold text-2xl text-black-600 hover:text-gray-900 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 active:text-purple-950">
        {name}
      </h2>
      <p className="text-lg font-semibold text-gray-800 hover:text-gray-900 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 active:text-purple-950">
        {formatCurrency(price)}
      </p>
    </div>
    <div className="flex justify-center gap-4">
      <button className="bg-blue-700 text-neutral-100 rounded-sm px-4 py-2">
        +
      </button>
      <span>no. in cart</span>
      <button className="bg-blue-700 text-neutral-100 rounded-sm px-4 py-2">
        -
      </button>
    </div>
    <div className="flex justify-center">
      <button className="bg-red-400 text-neutral-100 rounded-sm p-2 m-4">
        Remove
      </button>
    </div>
  </div>
);

// text-gray-600 hover:text-gray-900 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 active:text-purple-950
