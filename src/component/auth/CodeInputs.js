import React, { useRef, useEffect } from "react";

export default function CodeInputs({ code, setCode, inputsRef }) {
  const hiddenInputRef = useRef(null);

  // تمرکز به input مخفی هنگام mount
  useEffect(() => {
    hiddenInputRef.current?.focus();
  }, []);

  // هندل تایپ در input مخفی
  const handleHiddenChange = (e) => {
    const raw = e.target.value.replace(/[^0-9]/g, "").slice(0, 5);
    const digits = raw.split("");
    const newCode = Array(5).fill("");
    digits.forEach((d, i) => (newCode[i] = d));
    setCode(newCode);
  };

  // وقتی کلیک شد، تمرکز روی input مخفی
  const handleWrapperClick = () => {
    hiddenInputRef.current?.focus();
  };

  return (
    <div className="flex justify-between gap-2 mb-4" onClick={handleWrapperClick}>
      {/* input مخفی که ورودی واقعی رو دریافت می‌کنه */}
      <input
        type="text"
        inputMode="numeric"
        maxLength={5}
        value={code.join("")}
        onChange={handleHiddenChange}
        ref={hiddenInputRef}
        className="absolute opacity-0 pointer-events-none"
      />

      {/* نمایش کد به صورت readOnly */}
      {code.map((digit, i) => (
        <input
          key={i}
          type="text"
          value={digit}
          readOnly
          className="w-12 h-12 text-center text-xl rounded-md bg-[var(--bg-card6)] text-white border border-gray-500 focus:outline-none transition"
        />
      ))}
    </div>
  );
}
