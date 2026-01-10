import storeItems from "../data/items.json";

export const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {storeItems.map((item) => JSON.stringify(item))}
      </div>
    </>
  );
};
