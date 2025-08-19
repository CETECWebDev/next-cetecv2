import { FaInstagram, FaFacebook, FaLinkedin, FaTelegramPlane } from "react-icons/fa";

export default function FooterSocial() {
  const socialLinks = [
    { href: "https://instagram.com", icon: <FaInstagram />, rotate: "rotate-6" },
    { href: "https://facebook.com", icon: <FaFacebook />, rotate: "-rotate-6" },
    { href: "https://linkedin.com", icon: <FaLinkedin />, rotate: "rotate-6" },
    { href: "https://t.me", icon: <FaTelegramPlane />, rotate: "-rotate-6" },
  ];

  return (
    <div data-aos="fade-up" data-aos-delay="400">
      <h2 className="text-2xl font-bold mb-5 text-white dark:text-gray-100">شبکه‌های اجتماعی</h2>
      <div className="flex gap-6 text-4xl overflow-hidden">
        {socialLinks.map((social, i) => (
          <a
            key={i}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:text-[#22c55e] transition transform hover:scale-110 hover:${social.rotate}`}
            aria-label={social.href}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
