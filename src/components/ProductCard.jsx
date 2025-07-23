import { url } from "inspector";

// components/ProductCard.jsx
export default function ProductCard({
  image,
  brand,
  title,
  description,
  bg = "bg-white",
  text = "text-black",
}) {
  return (
    <div
      className={`${bg} ${text} min-h-[500px]  p-6 rounded-2xl flex flex-col justify-end text-center shadow-sm`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <img src={image} alt={title} className="w-full  object-cover " /> */}
      <p className="text-sm  font-semibold opacity-80 mb-1">{brand}</p>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm opacity-70 mb-4">{description}</p>
      <button className="bg-[#e14a5c] w-[100px] flex justify-center mx-auto cursor-pointer    text-white font-medium text-sm py-2 px-1 rounded-full hover:bg-[#c7374c] transition">
        Shop Now
      </button>
    </div>
  );
}
