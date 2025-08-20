import Link from "next/link";

export default function FooterContact() {
  return (
    <div data-aos="fade-up" data-aos-delay="300">
      <h2 className="text-2xl font-bold mb-5 text-white dark:text-gray-100">
        <Link href="/contact" className="hover:text-[#22c55e] transition">
          ارتباط با ما
        </Link>
      </h2>
      <ul className="space-y-4 text-base leading-8 dark:text-gray-300">
        <li>آدرس: رشت، بلوار امام خمینی، نرسیده به میدان فرهنگ، کوچه شیرمحمدی، فرعی ۱، مرکز نوآوری صنایع خلاق</li>
        <li>تلفن: ۰۱۳۵۵۴۵۱۳۲۳</li>
        <li>ایمیل: info@cetec.com</li>
      </ul>
    </div>
  );
}
