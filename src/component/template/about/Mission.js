"use client";

export default function MissionVision() {
  const sections = [
    {
      id: 1,
      title: "بیانیه ماموریت",
      text: "ماموریت ما در CETEC طراحی، توسعه و اجرای سامانه‌ها و راهکارهایی فناورانه در حوزه‌های پیشرفته صنعت و فناوری اطلاعات است. ما تلاش می‌کنیم تا با ارائه محصولات و خدماتی مبتنی بر هوش مصنوعی، سیستم‌های نهفته، فناوری‌های نوین کنترلی و سایبری، گام‌هایی مؤثر در خودکفایی صنعتی و رشد پایدار برداریم."
    },
    {
      id: 2,
      title: "چشم‌انداز",
      text: "ما در CETEC بر این باوریم که فناوری باید در خدمت زندگی باشد؛ نه‌تنها برای افزایش بهره‌وری صنعتی، بلکه برای ارتقاء کیفیت زندگی انسان‌ها، محافظت از منابع طبیعی، و ساختن آینده‌ای هوشمند، پایدار و متکی بر علم. چشم‌انداز ما، تبدیل شدن به قطب نوآوری‌های فناورانه و مرکز علمی پیشرو در ایران و منطقه است. CETEC قصد دارد تا با ایجاد زیرساخت‌های فناورانه، توسعه راهکارهای هوشمند، و تربیت نیروهای متخصص، نقش مؤثری در اقتصاد دانش‌بنیان ایفا کند."
    }
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden font-peyda">
      {/* پس‌زمینه اصلی */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] dark:from-[#0f2027] dark:via-[#203a43] dark:to-[#2c5364]" />
      </div>

      <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-primary/20 dark:bg-primary/40 blur-[120px] rounded-full z-0 animate-pulse" />
      <div className="absolute bottom-[-8rem] right-[-8rem] w-[26rem] h-[26rem] bg-yellow-300/20 blur-[100px] rounded-full z-0 animate-pulse" />

      <div className="container mx-auto px-6 md:px-20 py-20 relative z-10 space-y-12">
        {sections.map((section) => (
          <div
            key={section.id}
            className="bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-8 shadow-lg"
          >
            <h1 className="text-2xl md:text-3xl font-bold mb-3">
              {section.title}
            </h1>
            <div className="h-1 w-[220px] bg-gradient-to-r from-gray-400 via-blue-400 to-gray-500 rounded mb-6" />
            <p className="flex items-start gap-3 text-gray-800 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
              <GradientCheckIcon />
              {section.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function GradientCheckIcon() {
  return (
    <svg
      className="w-6 h-6 flex-shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="light-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="dark-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>

      <path
        d="M9 16.2l-3.5-3.5 1.41-1.41L9 13.38l7.09-7.09 1.41 1.41L9 16.2z"
        className="fill-light-gradient dark:fill-dark-gradient"
        fill="url(#light-gradient)"
      />
    </svg>
  );
}
