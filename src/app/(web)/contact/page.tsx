"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import toast from "react-hot-toast";
import {
  Mail,
  User,
  MessageSquare,
  MessageSquareMore,
  Send,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

// Form schema with validation
const formSchema = z.object({
  name: z.string().min(2, { message: "სახელი უნდა შეიცავდეს მინიმუმ 2 ასოს" }),
  email: z.string().email({ message: "მეილი არასწორია" }),
  message: z.string().min(10, { message: "ტექსტის რაოდენობა არასაკმარისია" }),
  subject: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  // Form submission handler - Using Formspree for actual email delivery
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true);

    try {
      // Using Formspree free service for email delivery
      // Replace 'your-form-id' with your actual Formspree form ID
      const response = await fetch("https://formspree.io/f/mldnqabk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject || "New Contact Form Message",
          message: data.message,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        toast.success("თქვენი მესიჯი წარმატებით გაიგზავნა!");
        reset();

        // Reset success state after 3 seconds
        setTimeout(() => setIsSuccess(false), 3000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("კავშირის შეცდომა. გთხოვთ სცადოთ მოგვიანებით.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-12rem)] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl">
        <div className="shadow-2xl rounded-3xl p-8 md:p-12 border dark:border-none border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              საკონტაქტო ინფორმაცია
            </h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="flex items-center text-sm font-semibold dark:text-white text-gray-700 mb-2"
              >
                <User className="w-4 h-4 mr-2" />
                სახელი *
              </label>
              <input
                {...register("name")}
                id="name"
                type="text"
                placeholder="თქვენი სახელი"
                className={`w-full px-4 py-3 border rounded-xl focus:ring-1 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white outline-none ${
                  errors.name
                    ? "border-red-300 focus:border-red-500 bg-red-50"
                    : "border-gray-200 focus:border-blue-500 bg-gray-50 focus:bg-white"
                }`}
              />
              {errors.name && (
                <p className="text-sm text-red-600 flex items-center mt-1">
                  <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="flex items-center text-sm font-semibold dark:text-white text-gray-700 mb-2"
              >
                <Mail className="w-4 h-4 mr-2" />
                მეილი *
              </label>
              <input
                {...register("email")}
                id="email"
                type="email"
                placeholder="your@email.com"
                className={`w-full px-4 py-3 border rounded-xl focus:ring-1 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white outline-none ${
                  errors.email
                    ? "border-red-300 focus:border-red-500 bg-red-50"
                    : "border-gray-200 focus:border-blue-500 bg-gray-50 focus:bg-white"
                }`}
              />
              {errors.email && (
                <p className="text-sm text-red-600 flex items-center mt-1">
                  <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Subject Field */}
            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="flex items-center text-sm font-semibold dark:text-white text-gray-700 mb-2"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                სათაური
              </label>
              <input
                {...register("subject")}
                id="subject"
                type="text"
                placeholder="მესიჯის სათაური"
                className="w-full px-4 py-3 border rounded-xl focus:ring-1 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white outline-none"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="flex items-center text-sm font-semibold dark:text-white text-gray-700 mb-2"
              >
                <MessageSquareMore className="w-4 h-4 mr-2" />
                ტექსტი *
              </label>
              <textarea
                {...register("message")}
                id="message"
                rows={5}
                placeholder="დაწერეთ თქვენი მესიჯი..."
                className={`w-full px-4 py-3 border rounded-xl focus:ring-1 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white outline-none resize-none ${
                  errors.message
                    ? "border-red-300 focus:border-red-500 bg-red-50"
                    : "border-gray-200 focus:border-blue-500 bg-gray-50 focus:bg-white"
                }`}
              />
              {errors.message && (
                <p className="text-sm text-red-600 flex items-center mt-1">
                  <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full btn-primary dark:bg-primary dark:shadow-md py-4 px-6 rounded-xl font-semibold text-white ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : isSuccess
                    ? "bg-green-500"
                    : "bg-blue-600"
              }`}
            >
              <div className="flex items-center justify-center">
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    იგზავნება...
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-3" />
                    გაიგზავნა!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-3" />
                    გაგზავნა
                  </>
                )}
              </div>
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-gray-100">
            <div className="text-center">
              <p className="text-gray-600 dark:text-white text-sm">
                ან პირდაპირ დაგვიკავშირდით
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:space-x-6 mt-4">
                <Link
                  href="mailto:info@example.com"
                  className="text-green-700 hover:text-green-600 transition-colors duration-200"
                >
                  info@example.com
                </Link>
                <Link
                  href="tel:+995555123456"
                  className="text-green-700 hover:text-green-600 transition-colors duration-200"
                >
                  +995 000 00 00 00
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
