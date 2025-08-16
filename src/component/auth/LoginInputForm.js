import { useFormContext } from "react-hook-form";

export default function LoginInputForm() {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const loginMethod = watch("loginMethod");

  return (
    <div>
      {loginMethod === "mobile" ? (
        <>
          <label
            htmlFor="identifier"
            className="block mb-1 text-[var(--text-navbar)] font-semibold"
          >
            شماره موبایل
          </label>
          <input
            type="tel"
            id="identifier"
            {...register("identifier", {
              required: "شماره موبایل الزامی است",
              pattern: {
                value: /^[0-9]{10,15}$/,
                message: "شماره موبایل معتبر وارد کنید",
              },
            })}
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            placeholder="مثال: 09123456789"
          />
        </>
      ) : (
        <>
          <label
            htmlFor="identifier"
            className="block mb-1 text-[var(--text-navbar)] font-semibold"
          >
            ایمیل
          </label>
          <input
            type="email"
            id="identifier"
            {...register("identifier", {
              required: "ایمیل الزامی است",
              pattern: {
                value:
                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "ایمیل معتبر وارد کنید",
              },
            })}
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            placeholder="مثال: example@mail.com"
          />
        </>
      )}

      {errors.identifier && (
        <p className="text-red-500 mt-1 text-sm">{errors.identifier.message}</p>
      )}
    </div>
  );
}
