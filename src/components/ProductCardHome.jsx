// app/components/FeaturedProducts.jsx
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  return (
    <section className="bg-[#f7f7fb] py-12 px-4">
      <div className=" containermx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard
          image="/assets/images/banner-l-watch.jpg"
          brand=" WATCH ULTRA 2"
          title="Next level adventure"
          description="A magical new way to use your watch without touching the screen. The brightest Apple display ever."
        />
        <ProductCard
          image="/assets/images/banner-l-furniture.jpg"
          brand="ROSS GARDAM"
          title="Hearth loft series"
          description="The expansive proportions of the seating’s surface, combined with the soft, curved arms create the ideal haven for relaxation."
          bg="bg-black"
          text="text-white"
        />
        <ProductCard
          image="/assets/images/banner-l-hair-dryer-w.jpg"
          brand="dyson supersonic"
          title="Hair dryer blue blush"
          description="Finished in Blue Blush, cushioned with soft fabric and a removable lid that is also a non-slip mat for your hair dryer."
        />
      </div>
    </section>
  );
}
