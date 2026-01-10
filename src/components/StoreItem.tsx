export interface StoreItemProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

export const StoreItem: React.FC<StoreItemProps> = ({
  id,
  name,
  price,
  imgUrl,
}) => (
  <div key={id}>
    <div className="aspect-3/2 w-full">
      <img
        src={imgUrl}
        alt={name}
        className="w-full h-full object-cover rounded-sm"
      />
    </div>
    <h2>{name}</h2>
    <p>{price}</p>
  </div>
);
