// app/testimonials/page.tsx أو pages/testimonials.tsx حسب نوع مشروعك
import Image from "next/image";

const testimonials = [
  {
    name: "حسن علي",
    handle: "arkan-altahrir@",
    image: "/assets/images/review-1.jpg",
    text: "التعامل مع الشركة كان أكثر من رائع! ساعدوني في تحسين متجري الإلكتروني وزيادة المبيعات من خلال استراتيجيات تسويقية فعالة. فريق محترف ومتعاون دائماً.",
  },
  {
    name: "سامح زيدان",
    handle: "sameh-zidan-academy@",
    image: "/assets/images/review-2.jpg",
    text: "ساعدوني في تطوير موقعي الإلكتروني وتحسين ظهوره في محركات البحث (SEO)، مما زاد من عدد العملاء المحتملين. أنصح أي شخص يبحث عن شركة برمجة متكاملة بالتعامل معهم.",
  },
  {
    name: "آدم بركات",
    handle: "sparkile-paints@",
    image: "/assets/images/review-3.jpg",
    text: "كنت بحاجة لحلول برمجية مبتكرة لمشروعي، وفريق الشركة قدم لي خطة متكاملة زادت من تفاعل العملاء مع علامتي التجارية. تجربة مميزة وخدمة تستحق الثقة!",
  },
  {
    name: "محمود صادق",
    handle: "atlas-facades@",
    image: "/assets/images/review-4.jpg",
    text: "تعاملت مع العديد من شركات برمجة، ولكن هذه الشركة كانت الأفضل من حيث الجودة والالتزام بالمواعيد. حققنا نتائج رائعة.",
  },
];

export default function TestimonialsPage() {
  const testimonial = testimonials[1];
  const testimonialTow = testimonials[0];
  const testimonialThree = testimonials[2];
  const testimonialFoure = testimonials[3];
  return (
    <div className="bg-gradient-to-br from-[#f7f9fc] to-white md:py-16 py-4 px-4 text-right">
      <div className="max-w-[1200px] md:flex md:flex-row flex-col  mx-auto">
        <div className="flex items-start md:w-[40%] justify-between mb-10">
          <div className="flex justify-between gap-2 ">
            <div className="text-[#fff]   md:h-[80px] h-[60px]  w-[90px] text-center bg-[#2B00FF] rounded-full ">
              <span className="font-bold md:text-[40px] text-[30px] text-center  p-0">,,</span>
            </div>
            <div>
              <p className="text-black mb-4 text-sm max-w-md">آراء عملائنا</p>
              <h2 className="text-3xl font-bold">
                ما يقوله <span className="text-primary">عملاؤنا</span> عنا...
              </h2>
              <p className="text-gray-600 mt-2 text-sm max-w-md">
                نؤمن بمنطق win-win لذا عملاؤنا هم أهم أولوياتنا ونحن نؤمن أن
                نجاحهم هو أساس نجاحنا...
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 md:w-[60%] justify-evenly m-auto  gap-4 ">
          <div
            className="bg-white p-6 w-[310px] h-[280px] flex flex-col  justify-center items-center m-auto rounded-2xl  hover:shadow-md transition duration-300"
            style={{ boxShadow: "0px 0px 11px 2px rgba(0, 0, 0, 0.18)" }}
          >
            <p className="text-gray-700 mb-6 leading-relaxed">
              "{testimonial?.text}"
            </p>
            <div className="flex items-center gap-4">
              <Image
                src={testimonial?.image}
                alt={testimonial?.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="font-bold">{testimonial?.name}</p>
                <p className="text-sm" style={{ color: "#2B00FF" }}>
                  {testimonial?.handle}
                </p>
              </div>
            </div>
          </div>
          <div
            className="bg-white p-6 w-[310px] h-[280px] md:translate-y-10 flex flex-col  justify-center items-center m-auto rounded-2xl  hover:shadow-md transition duration-300"
            style={{ boxShadow: "0px 0px 11px 2px rgba(0, 0, 0, 0.18)" }}
          >
            <p className="text-gray-700 mb-6 leading-relaxed">
              "{testimonialTow?.text}"
            </p>
            <div className="flex items-center gap-4">
              <Image
                src={testimonialTow?.image}
                alt={testimonialTow?.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="font-bold">{testimonialTow?.name}</p>
                <p className="text-sm" style={{ color: "#2B00FF" }}>
                  {testimonialTow?.handle}
                </p>
              </div>
            </div>
          </div>
          <div
            className="bg-white p-6 w-[310px] h-[280px] flex flex-col  justify-center items-center m-auto rounded-2xl  hover:shadow-md transition duration-300"
            style={{ boxShadow: "0px 0px 11px 2px rgba(0, 0, 0, 0.18)" }}
          >
            <p className="text-gray-700 mb-6 leading-relaxed">
              "{testimonialThree?.text}"
            </p>
            <div className="flex items-center gap-4">
              <Image
                src={testimonialThree?.image}
                alt={testimonialThree?.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="font-bold">{testimonialThree?.name}</p>
                <p className="text-sm" style={{ color: "#2B00FF" }}>
                  {testimonialThree?.handle}
                </p>
              </div>
            </div>
          </div>
          <div
            className="bg-white p-6 w-[310px] h-[280px] md:translate-y-10 flex flex-col  justify-center items-center m-auto rounded-2xl  hover:shadow-md transition duration-300"
            style={{ boxShadow: "0px 0px 11px 2px rgba(0, 0, 0, 0.18)" }}
          >
            <p className="text-gray-700 mb-6 leading-relaxed">
              "{testimonialFoure?.text}"
            </p>
            <div className="flex items-center gap-4">
              <Image
                src={testimonialFoure?.image}
                alt={testimonialFoure?.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="font-bold">{testimonialFoure?.name}</p>
                <p className="text-sm" style={{ color: "#2B00FF" }}>
                  {testimonialFoure?.handle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
