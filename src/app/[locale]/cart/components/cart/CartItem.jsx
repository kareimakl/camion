import Image from "next/image";

export default function CartItem({ item, onRemove, onQuantityChange }) {
  const price = parseFloat(item.price || 0);
  const total = price * item.quantity;

  const handleIncrease = () => {
    onQuantityChange(item.id, item.quantity + 1);
  };

  const handleDecrease = () => {
    onQuantityChange(item.id, item.quantity > 1 ? item.quantity - 1 : 1);
  };

  return (
    <main className="flex flex-col gap-4">
      <div className="rounded-lg p-5 shadow-md flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left side: image + info */}
        <div className="flex items-center gap-5 w-full md:w-2/3">
          <div className="relative w-24 h-24">
            <Image
              src={item?.image || "/favicon.ico"}
              alt={item?.title || "Product image"}
              fill
              unoptimized
              className="object-contain rounded-md"
            />
            {item.discountPercentage > 0 && (
              <span className="absolute top-0 left-0 bg-[#B92123] text-white text-xs px-2 py-0.5 rounded-br-lg">
                {item.discountPercentage}%
              </span>
            )}
          </div>

          <div className="flex-1">
            <p className="text-gray-800 text-sm md:text-lg font-semibold line-clamp-1">
              {item.title || "Unnamed Product"}
            </p>
            <p className="text-gray-500 text-xs md:text-sm mt-1">
              Add $25 and get free delivery.
            </p>

            {/* Quantity Controls */}
            <div className="flex items-center gap-3 mt-3">
              <button
                onClick={handleDecrease}
                className="w-8 h-8 cursor-pointer rounded-full bg-red-100 text-[#B92123] font-bold flex items-center justify-center"
              >
                -
              </button>
              <span className="text-sm font-medium">{item.quantity}</span>
              <button
                onClick={handleIncrease}
                className="w-8 h-8 cursor-pointer rounded-full bg-red-100 text-[#B92123] font-bold flex items-center justify-center"
              >
                +
              </button>
            </div>

            <button
              onClick={() => onRemove(item.productId)}
              className="text-sm cursor-pointer text-[#B92123] mt-2 hover:underline"
            >
              Remove item
            </button>
          </div>
        </div>

        {/* Right side: total */}
        <div className="text-right w-full md:w-1/3">
          <p className="text-gray-800 text-sm md:text-lg font-medium mb-2">
            Total: {total.toFixed(2)}$
          </p>
        </div>
      </div>
    </main>
  );
}
