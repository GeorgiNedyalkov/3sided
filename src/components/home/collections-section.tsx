export default function CollectionsSection() {
  return (
    <div className="p-20">
      <h2 className="pb-10 text-4xl font-bold">Collections</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20">
        <div className="w-full">
          <div className="h-96 w-full bg-stone-600"></div>
          <h3 className="py-4 text-center text-2xl font-semibold">Collection Name</h3>
        </div>
        <div className="w-full">
          <div className="h-96 w-full bg-stone-600"></div>
          <h3 className="py-4 text-center text-2xl font-semibold">Collection Name</h3>
        </div>
        <div className="w-full">
          <div className="h-96 w-full bg-stone-600"></div>
          <h3 className="py-4 text-center text-2xl font-semibold">Collection Name</h3>
        </div>
        <div className="w-full">
          <div className="h-96 w-full bg-stone-600"></div>
          <h3 className="py-4 text-center text-2xl font-semibold">Collection Name</h3>
        </div>
      </div>
    </div>
  );
}
