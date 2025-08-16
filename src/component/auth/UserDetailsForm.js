import { useFormContext } from "react-hook-form";

export default function UserDetailsForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="firstName" className="block mb-1 text-[var(--text-navbar)] font-semibold">
          نام
        </label>
        <input
          id="firstName"
          type="text"
          {...register("firstName", {
            required: "نام الزامی است",
            minLength: { value: 2, message: "نام باید حداقل 2 کاراکتر باشد" },
          })}
          placeholder="نام خود را وارد کنید"
          className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
        />
        {errors.firstName && (
          <p className="text-red-500 mt-1 text-sm">{errors.firstName.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="lastName" className="block mb-1 text-[var(--text-navbar)] font-semibold">
          نام خانوادگی
        </label>
        <input
          id="lastName"
          type="text"
          {...register("lastName", {
            required: "نام خانوادگی الزامی است",
            minLength: { value: 2, message: "نام خانوادگی باید حداقل 2 کاراکتر باشد" },
          })}
          placeholder="نام خانوادگی خود را وارد کنید"
          className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
        />
        {errors.lastName && (
          <p className="text-red-500 mt-1 text-sm">{errors.lastName.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="contact" className="block mb-1 text-[var(--text-navbar)] font-semibold">
          شماره تماس یا ایمیل
        </label>
        <input
          id="contact"
          type="text"
          {...register("contact", {
            required: "شماره تماس یا ایمیل الزامی است",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$|^09\d{9}$/,
              message: "لطفاً ایمیل یا شماره موبایل معتبر وارد کنید",
            },
          })}
          placeholder="مثال: example@gmail.com یا 09123456789"
          className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
        />
        {errors.contact && (
          <p className="text-red-500 mt-1 text-sm">{errors.contact.message}</p>
        )}
      </div>
    </div>
  );
}
