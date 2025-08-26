import { useFormContext } from "react-hook-form";

export default function PrivateCode() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label htmlFor="code" className="block mb-1 text-[var(--text-navbar)] font-semibold">
        کد تایید
      </label>
      <input
        id="code"
        type="text"
        {...register("code", {
          required: "کد تایید الزامی است",
          minLength: { value: 4, message: "کد تایید باید حداقل 4 رقم باشد" },
          maxLength: { value: 6, message: "کد تایید بیش از حد طولانی است" },
        })}
        placeholder="کد ارسال شده را وارد کنید"
        className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
      />
      {errors.code && <p className="text-red-500 mt-1 text-sm">{errors.code.message}</p>}
    </div>
  );
}
