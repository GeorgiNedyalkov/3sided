export default function AddToCartButton({
  onAddToCart,
}: {
  onAddToCart: () => void;
}) {
  // Adds item to user cart based on quantity selected
  return (
    <button
      onClick={onAddToCart}
      className="bg-gray-900 py-2 px-4 h-12 rounded-xl text-gray-100"
    >
      Add to cart
    </button>
  );
}
