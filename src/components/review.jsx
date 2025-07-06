// app/testimonials/page.tsx أو pages/testimonials.tsx حسب نوع مشروعك
import Image from "next/image";

const testimonials = [
  {
    name: "حسن علي",
    handle: "arkan-altahrir@",
    image: "/clients/1.jpg",
    text: "التعامل مع الشركة كان أكثر من رائع! ساعدوني في تحسين متجري الإلكتروني وزيادة المبيعات من خلال استراتيجيات تسويقية فعالة. فريق محترف ومتعاون دائماً.",
  },
  {
    name: "سامح زيدان",
    handle: "sameh-zidan-academy@",
    image: "/clients/2.jpg",
    text: "ساعدوني في تطوير موقعي الإلكتروني وتحسين ظهوره في محركات البحث (SEO)، مما زاد من عدد العملاء المحتملين. أنصح أي شخص يبحث عن شركة برمجة متكاملة بالتعامل معهم.",
  },
  {
    name: "آدم بركات",
    handle: "sparkile-paints@",
    image: "/clients/3.jpg",
    text: "كنت بحاجة لحلول برمجية مبتكرة لمشروعي، وفريق الشركة قدم لي خطة متكاملة زادت من تفاعل العملاء مع علامتي التجارية. تجربة مميزة وخدمة تستحق الثقة!",
  },
  {
    name: "محمود صادق",
    handle: "atlas-facades@",
    image: "/clients/4.jpg",
    text: "تعاملت مع العديد من شركات برمجة، ولكن هذه الشركة كانت الأفضل من حيث الجودة والالتزام بالمواعيد. حققنا نتائج رائعة.",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="bg-gradient-to-br from-[#f7f9fc] to-white py-16 px-4 text-right">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold">
              ما يقوله <span className="text-blue-600">عملاؤنا</span> عنا...
            </h2>
            <p className="text-gray-600 mt-2 text-sm max-w-md">
              نؤمن بمنطق win-win لذا عملاؤنا هم أهم أولوياتنا ونحن نؤمن أن نجاحهم هو أساس نجاحنا...
            </p>
          </div>
          <div className="text-blue-600 text-4xl bg-blue-100 rounded-full p-4">
            <span className="font-bold">“</span>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition duration-300"
            >
              <p className="text-gray-700 mb-6 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-blue-600 text-sm">{t.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
