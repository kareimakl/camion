import Footer from "@/componentsedit/layout/footer/footer";
import Header from "@/componentsedit/layout/header/header";

export const metadata = {
  title: "Policies – Camion App",
  description:
    "Camion App policies: Terms of Use, Product, Payment, Shipping & Delivery, Return & Refund, Privacy, and Limitation of Liability.",
};

export default function PoliciesPage() {
  const lastUpdated = "August 25, 2025"; // Update when policies change

  return (
    <div>
      <Header />

      <main className="min-h-screen bg-gray-50 text-gray-800">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-50/80 via-transparent to-transparent" />
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
            <div className="space-y-4 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs font-medium text-indigo-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-indigo-500" />
                Camion App Policies
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                Policies – Camion App
              </h1>
              <p className="mx-auto max-w-3xl text-base sm:text-lg text-gray-600">
                Please read these policies carefully. By using Camion, you agree
                to the terms and practices outlined below.
              </p>
              <p className="text-sm text-gray-500">
                Last updated: {lastUpdated}
              </p>
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* TOC */}
            <aside className="lg:col-span-4 xl:col-span-3 order-last lg:order-first">
              <div className="sticky top-6 rounded-2xl border border-gray-200 bg-white shadow-sm p-5">
                <h2 className="text-sm font-semibold text-gray-900">
                  On this page
                </h2>
                <nav className="mt-3 space-y-2 text-sm">
                  {[
                    { id: "terms-of-use", label: "1. Terms of Use" },
                    { id: "product-policy", label: "2. Product Policy" },
                    { id: "payment-policy", label: "3. Payment Policy" },
                    {
                      id: "shipping-delivery",
                      label: "4. Shipping & Delivery",
                    },
                    { id: "return-refund", label: "5. Return & Refund" },
                    { id: "privacy-policy", label: "6. Privacy Policy" },
                    {
                      id: "limitation-liability",
                      label: "7. Limitation of Liability",
                    },
                  ].map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block rounded-lg px-3 py-2 hover:bg-gray-50 hover:text-indigo-700 transition"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main content */}
            <div className="lg:col-span-8 xl:col-span-9 space-y-6">
              <PolicyCard id="terms-of-use" title="1. Terms of Use">
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    By using Camion, you agree to comply with all the terms and
                    conditions stated in this policy.
                  </li>
                  <li>
                    Camion reserves the right to update or modify these policies
                    at any time. Users will be notified of any changes via the
                    app or email.
                  </li>
                  <li>
                    The app must not be used for any illegal activities or in
                    violation of local or international laws.
                  </li>
                </ul>
              </PolicyCard>

              <PolicyCard id="product-policy" title="2. Product Policy">
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    All products listed on Camion are original and match the
                    specifications described on the product page.
                  </li>
                  <li>
                    Prices include VAT (if applicable) and do not include
                    shipping fees unless otherwise stated.
                  </li>
                  <li>
                    Product colors may slightly vary due to screen settings or
                    manufacturing differences.
                  </li>
                </ul>
              </PolicyCard>

              <PolicyCard id="payment-policy" title="3. Payment Policy">
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Camion supports multiple payment methods (credit/debit
                    cards, bank transfer, e-wallets, and cash on delivery if
                    available).
                  </li>
                  <li>
                    All payments are secured through certified payment service
                    providers.
                  </li>
                  <li>
                    If a payment fails, the order will not be confirmed, and the
                    user may retry using a different method.
                  </li>
                </ul>
              </PolicyCard>

              <PolicyCard
                id="shipping-delivery"
                title="4. Shipping & Delivery Policy"
              >
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Camion provides worldwide shipping through trusted
                    international courier services.
                  </li>
                  <li>
                    Delivery time varies depending on the destination country
                    and shipping provider.
                  </li>
                  <li>
                    Customers will receive a tracking number once their order
                    has been dispatched.
                  </li>
                  <li>
                    Camion is not responsible for delays caused by customs,
                    natural events, or courier issues beyond our control.
                  </li>
                </ul>
              </PolicyCard>

              <PolicyCard id="return-refund" title="5. Return & Refund Policy">
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Customers may request a return within 14 days of receiving
                    the order, provided the item is unused, undamaged, and in
                    its original packaging.
                  </li>
                  <li>
                    Certain items such as personal care products, food, or
                    customized items are non-returnable.
                  </li>
                  <li>
                    Refunds will be processed to the original payment method
                    within 7–14 business days after the returned item is
                    inspected.
                  </li>
                  <li>
                    Shipping fees are non-refundable, and return shipping costs
                    are the responsibility of the customer (unless the item is
                    defective or incorrect).
                  </li>
                </ul>
              </PolicyCard>

              <PolicyCard id="privacy-policy" title="6. Privacy Policy">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Camion respects and protects your personal data.</li>
                  <li>
                    We collect information (such as name, address, contact
                    details, and payment info) only to process orders and
                    improve user experience.
                  </li>
                  <li>
                    Personal data will never be sold or shared with third
                    parties, except with shipping and payment partners to
                    complete your order.
                  </li>
                  <li>
                    All data is securely stored, and users have the right to
                    request access, correction, or deletion of their personal
                    information.
                  </li>
                </ul>
              </PolicyCard>

              <PolicyCard
                id="limitation-liability"
                title="7. Limitation of Liability"
              >
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Camion is not liable for any indirect, incidental, or
                    consequential damages arising from the use of the app or
                    purchased products.
                  </li>
                  <li>
                    Responsibility for product usage lies with the customer.
                  </li>
                  <li>
                    In case of disputes, Camion’s liability is limited to the
                    order value only.
                  </li>
                </ul>
              </PolicyCard>

              {/* Footer note */}
              <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6 sm:p-8">
                <p className="text-sm sm:text-base text-indigo-900">
                  Need help or have questions about these policies? Contact our
                  support team at{" "}
                  <a
                    href="mailto:support@camion-app.com"
                    className="font-semibold underline underline-offset-4"
                  >
                    support@camion-app.com
                  </a>
                  .
                </p>
              </div>

              <div className="pt-2 text-center">
                <a
                  href="#top"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm shadow-sm hover:bg-gray-50"
                >
                  ↑ Back to top
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function PolicyCard({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500" />
        <div className="p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
            {title}
          </h2>
          <div className="mt-4 text-gray-700 leading-relaxed">{children}</div>
        </div>
      </div>
    </section>
  );
}
