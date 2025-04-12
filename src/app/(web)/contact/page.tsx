"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// 1. Define form schema with TypeScript
const formSchema = z.object({
  name: z.string().min(2, { message: "სახელი უნდა შეიცავდეს მინიმუმ 2 ასოს" }),
  email: z.string().email({ message: "მეილი არასწორია" }),
  message: z
    .string()
    .min(10, { message: "ტექსტი უნდა იყოს მინიმუმ 10 ასოიანი" }),
  subject: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // 2. Initialize react-hook-form with TypeScript
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  // 3. Form submission handler
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true);
    try {
      // Replace with your actual API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        reset();
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-12rem)] flex items-center justify-center px-4 py-8 sm:py-12">
      <div className="w-full max-w-2xl shadow-lg rounded-lg p-4 sm:p-6 md:p-8 ">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          საკონტაქტო ინფორმაცია
        </h2>

        {submitSuccess ? (
          <div className="p-4 mb-6 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded">
            თქვენი მესიჯი წარმატებით გაიგზავნა.
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                სახელი *
              </label>
              <input
                {...register("name")}
                id="name"
                type="text"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white outline-none ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                მეილი *
              </label>
              <input
                {...register("email")}
                id="email"
                type="email"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white outline-none ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Subject Field (Optional) */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                სათაური
              </label>
              <input
                {...register("subject")}
                id="subject"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                ტექსტი *
              </label>
              <textarea
                {...register("message")}
                id="message"
                rows={4}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white resize-none outline-none ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full btn-primary dark:bg-primary dark:shadow-md ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "იგზავნება..." : "გაგზავნა"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
