const features = [
  {
    icon: <img src="/assets/icons/mp2-infobox-map-pointer.svg" alt="icon" />,
    title: "Fast, Free Shipping",
    desc: "On order over $50",
  },
  {
    icon: <img src="/assets/icons/mp2-infobox-bundle.svg" alt="icon" />,
    title: "Next Day Delivery",
    desc: "Free – spend over $99",
  },
  {
    icon: <img src="/assets/icons/mp2-infobox-like.svg" alt="icon" />,
    title: "60-Day Free Returns",
    desc: "All shipping methods",
  },
  {
    icon: <img src="/assets/icons/mp2-infobox-phone-clrd.svg" alt="icon" />,
    title: "Expert Customer Service",
    desc: "Choose chat or call us",
  },
  {
    icon: <img src="/assets/icons/mp2-infobox-heart.svg" alt="icon" />,
    title: "Exclusive Brands",
    desc: "More exclusive products",
  },
];

export default function ShippingBanner() {
  return (
    <div className="bg-[#0d0625] max-w-[1400px] md:w-full w-[90%] mx-auto text-white rounded-full px-6 py-4 mt-10">
      <div className="flex gap-4 items-center overflow-x-auto md:overflow-visible flex-nowrap md:flex-wrap justify-start md:justify-between scroll-smooth">
        {features.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 min-w-[250px] flex-shrink-0 md:flex-1 md:min-w-[180px] justify-start md:justify-center"
          >
            <div className="text-[#7354ee]">{item.icon}</div>
            <div className="text-start">
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
