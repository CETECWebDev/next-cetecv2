export default function RememberMe({ checked, onChange }) {
  return (
    <div className="flex items-center mb-4">
      <input
        type="checkbox"
        id="rememberMe"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mr-2"
      />
      <label htmlFor="rememberMe" className="text-sm cursor-pointer text-white">
        مرا به خاطر بسپار
      </label>
    </div>
  );
}
