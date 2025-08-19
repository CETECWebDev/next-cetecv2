import Link from "next/link";

export default function FooterProducts() {
  const products = [
    { href: "/product/product1", label: "سامانه شمارش هوشمند افراد" },
    { href: "/product/product2", label: "تردد شمار جاده‌ای" },
    { href: "/product/product3", label: "مدیریت زنجیره تولید" },
    { href: "/product/product4", label: "دیتالاگرهای پیشرفته" },
    { href: "/product/product5", label: "پهپاد عمود پرواز هوشمند" },
  ];

  return (
    <div data-aos="fade-up" data-aos-delay="200">
      <h2 className="text-2xl font-bold mb-5 text-white dark:text-gray-100">محصولات</h2>
      <ul className="space-y-3 text-lg">
        {products.map((product, i) => (
          <li key={i}>
            <Link href={product.href} className="hover:text-[#22c55e] transition flex items-center gap-2">
              <span className="text-[#22c55e] text-xl">›</span> {product.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
