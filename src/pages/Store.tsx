import storeItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem";

export const Store: React.FC = () => {
  return (
    <>
      <h1>Store</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 m-4">
        {storeItems.map((item) => (
          <StoreItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};
