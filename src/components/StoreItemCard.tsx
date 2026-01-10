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
    <h2 className="font-extrabold text-2xl text-black-600 hover:text-gray-900 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 active:text-purple-950">
      {name}
    </h2>
    <p className="text-lg font-semibold text-gray-800 hover:text-gray-900 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 active:text-purple-950">
      &euro;{price}
    </p>
  </div>
);

// text-gray-600 hover:text-gray-900 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 active:text-purple-950
