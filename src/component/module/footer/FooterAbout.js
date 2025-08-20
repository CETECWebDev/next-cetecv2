import Link from "next/link";

export default function FooterAbout() {
  const links = [
    { href: "/about", label: "درباره شرکت" },
    { href: "/about2", label: "چشم انداز و ماموریت" },
    { href: "/collaboration", label: "همکاری و سرمایه گذاری" },
    { href: "/faq", label: "سوالات متداول" },
  ];

  return (
    <div data-aos="fade-up" data-aos-delay="100">
      <h2 className="text-2xl font-bold mb-5 text-white dark:text-gray-100">قطب دانش</h2>
      <ul className="space-y-3 text-lg">
        {links.map((link, i) => (
          <li key={i}>
            <Link href={link.href} className="hover:text-[#22c55e] transition flex items-center gap-2">
              <span className="text-[#22c55e] text-xl">›</span> {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
