import storeItems from "../data/items.json";
import { StoreItemCard } from "../components/StoreItemCard";

export const Store: React.FC = () => {
  return (
    <>
      <h1 className="self-start ml-64 text-4xl font-extrabold text-back-600">
        Store
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
        {storeItems.map((item) => (
          <StoreItemCard key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};
