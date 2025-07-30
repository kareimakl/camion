import { FaInfoCircle, FaKeyboard, FaLayerGroup } from "react-icons/fa";

export default function ProductDetails() {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-10">
      {/* Specification Section */}
      <section className="bg-[#f6f5f8] p-2 rounded-2xl ">
        <h2 className="text-lg font-semibold mb-4">Specification</h2>
        <div className="bg-gray-100 rounded-xl p-4 space-y-4">
          {/* Overview */}
          <div>
            <div className="flex items-center gap-2 font-medium text-gray-700 mb-2">
              <FaInfoCircle className="text-red-500" />
              Overview
            </div>
            <div className="grid grid-cols-2 text-sm text-[#777777] border-t border-gray-300 py-2">
              <div className="font-medium">Brand</div>
              <div>Asus</div>
              <div className="font-medium">Material</div>
              <div>Metal</div>
            </div>
          </div>

          {/* Features */}
          <div>
            <div className="flex items-center gap-2 font-medium text-gray-700 mb-2">
              <FaKeyboard className="text-red-500" />
              Features
            </div>
            <div className="grid grid-cols-2 text-sm text-[#777777] border-t border-gray-300 py-2">
              <div className="font-medium">Features</div>
              <div>USB A</div>
            </div>
          </div>

          {/* General */}
          <div>
            <div className="flex items-center gap-2 font-medium text-gray-700 mb-2">
              <FaLayerGroup className="text-red-500" />
              General
            </div>
            <div className="grid grid-cols-2 text-sm text-[#777777] border-t border-gray-300 py-2">
              <div className="font-medium">Color</div>
              <div>White</div>
              <div className="font-medium">Material</div>
              <div>Metal</div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Description</h2>
        <div className="bg-gray-100 rounded-xl p-6 space-y-6">
          <div className="text-center">
            <h3 className="font-medium text-sm text-[#777777]">MacBook Pro</h3>
            <h2 className="text-2xl font-bold mt-1">
              Mind-blowing.
              <br />
              Head-turning
            </h2>

            <img
              src="/assets/images/description-m3-img-1-1.jpg.webp"
              alt="MacBook Banner"
              className="mt-6 w-full mx-auto rounded-md"
            />
            <p className="mt-4 text-[#777777] max-w mx-auto">
              Processors that are designed for high–end professionals. Screens
              on which you can create a world. Camera, sound and ports for all
              the extra tools. Complete minced meat for those looking for a
              reliable assistant for years to come.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Three giant leaps</h3>
            <p className="text-gray-700">
              MacBook Pro blasts forward with the M3, M3 Pro, and M3 Max chips.
              Built on 3–nanometer technology and featuring an all–new GPU
              architecture, they’re the most advanced chips ever built for a
              personal computer. And each one brings more pro performance and
              capability.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
