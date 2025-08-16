export default function InputField({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="ایمیل یا شماره موبایل"
      className="w-full p-3 rounded-md mb-4 bg-[#2A2F36] text-white border border-gray-500"
    />
  );
}
