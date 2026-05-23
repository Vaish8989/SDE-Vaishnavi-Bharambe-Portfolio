import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import soundEffects from "../utils/soundEffects";
import { EarthCanvas } from "./canvas";
import Toast from "./ui/toast";

// ─── Validation helpers ─────────────────────────────────────────────────────
const NAME_REGEX = /^[A-Za-z\s]+$/;
const PHONE_REGEX = /^[6-9]\d{9}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = (name, value) => {
  switch (name) {
    case "name":
      if (!value.trim()) return "Full name is required.";
      if (!NAME_REGEX.test(value)) return "Name must contain only letters and spaces.";
      return "";
    case "phone":
      if (!value.trim()) return "Phone number is required.";
      if (!PHONE_REGEX.test(value)) return "Enter a valid 10-digit mobile number.";
      return "";
    case "email":
      if (!value.trim()) return "Email address is required.";
      if (!EMAIL_REGEX.test(value)) return "Enter a valid email (e.g. xyz@gmail.com).";
      return "";
    case "message":
      if (!value.trim()) return "Message cannot be empty.";
      return "";
    default:
      return "";
  }
};
// ─────────────────────────────────────────────────────────────────────────────

// ⚠️ REPLACE THIS with your NEW deployment URL from Apps Script
const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbwOgk_tz_AKpLUFvaveBIpimL4ttpVezfF9xIAZ0QNT/devhttps://script.google.com/macros/s/AKfycbxAU2372TAb8M4j5VDZZ9qaGdH2Xt5NIP39l8Zc9C02YReIAcF2s-FHwL18Tqr9Hmln/exec";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({
    open: false,
    message: "",
    type: "success",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone" && !/^\d*$/.test(value)) return;
    if (name === "phone" && value.length > 10) return;

    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      name: validate("name", form.name),
      phone: validate("phone", form.phone),
      email: validate("email", form.email),
      message: validate("message", form.message),
    };
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((err) => err !== "");
    if (hasErrors) {
      soundEffects.playNotification();
      setToast({
        open: true,
        message: "Please fix the errors in the form before submitting.",
        type: "error",
      });
      return;
    }

    setLoading(true);

    try {
      // ── 1. Save to Google Sheet ────────────────────────────────────────
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          fullName: form.name,
          mobileNumber: form.phone,
          email: form.email,
          message: form.message,
        }),
        mode: "no-cors",
      });

      // ── 2. Send via EmailJS (only if env vars are set) ─────────────────
      const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        emailjs
          .send(
            serviceId,
            templateId,
            {
              user_name: form.name,
              my_name: "Vaishnavi Bharambe",
              user_email: form.email,
              my_email: "genzcoder01@gmail.com",
              user_message: form.message,
            },
            publicKey
          )
          .catch((err) => console.warn("EmailJS error (non-blocking):", err));
      }

      // ── 3. Success ─────────────────────────────────────────────────────
      setLoading(false);
      soundEffects.playNotification();
      setToast({
        open: true,
        message: "Thank you! Your message has been saved. I'll get back to you soon.",
        type: "success",
      });
      setForm({ name: "", phone: "", email: "", message: "" });
      setErrors({ name: "", phone: "", email: "", message: "" });

    } catch (error) {
      setLoading(false);
      console.error("Submission error:", error);
      soundEffects.playNotification();
      setToast({
        open: true,
        message: "Something went wrong. Please check your connection and try again.",
        type: "error",
      });
    }
  };

  return (
    <>
      {toast.open && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ ...toast, open: false })}
        />
      )}
      <div className="w-full min-h-screen pb-24 sm:pb-32">
        <h2 className="text-white text-center font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] px-4">
          Let's Work Together
        </h2>
        <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-6 lg:gap-10 overflow-hidden text-white px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="flex-[0.75] w-full xl:w-[40rem] liquid-glass purple-glow p-4 sm:p-6 lg:p-8 rounded-2xl relative overflow-hidden"
          >
            {/* Animated Blobs */}
            <div className="absolute -inset-10 -z-10 overflow-hidden pointer-events-none">
              <div
                className="absolute w-[280px] h-[280px] bg-[#915EFF]/25 rounded-full blur-[60px]"
                style={{
                  top: "-10%",
                  left: "-10%",
                  animation: "liquid-blob 14s infinite alternate ease-in-out",
                }}
              />
              <div
                className="absolute w-[240px] h-[240px] bg-[#804eff]/15 rounded-full blur-[50px]"
                style={{
                  bottom: "5%",
                  right: "-5%",
                  animation: "liquid-blob 18s infinite alternate-reverse ease-in-out",
                }}
              />
            </div>

            <p className={`text-[#915EFF] ${styles.sectionSubText}`}>
              Get in touch
            </p>
            <h3 className={`${styles.sectionHeadText} text-[28px] sm:text-[32px] lg:text-[36px]`}>
              Contact.
            </h3>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-6 flex flex-col gap-6 sm:gap-8"
              id="contact"
            >
              {/* ── Name ─────────────────────────────────────── */}
              <label className="flex flex-col">
                <span className="font-medium text-[#915EFF] mb-2 sm:mb-4 text-sm sm:text-base">
                  Full Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`bg-[#050505] py-3 sm:py-4 px-4 sm:px-6 placeholder:text-[#fafafa8a] rounded-lg outline-none border transition-all font-medium text-sm sm:text-base w-full ${errors.name
                    ? "border-red-500 focus:border-red-400"
                    : "border-[#915EFF]/30 focus:border-[#915EFF]"
                    }`}
                />
                {errors.name && (
                  <span className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    ⚠ {errors.name}
                  </span>
                )}
              </label>

              {/* ── Phone ────────────────────────────────────── */}
              <label className="flex flex-col">
                <span className="font-medium text-[#915EFF] mb-2 sm:mb-4 text-sm sm:text-base">
                  Mobile Number
                </span>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  className={`bg-[#050505] py-3 sm:py-4 px-4 sm:px-6 placeholder:text-[#fafafa8a] rounded-lg outline-none border transition-all font-medium text-sm sm:text-base w-full ${errors.phone
                    ? "border-red-500 focus:border-red-400"
                    : "border-[#915EFF]/30 focus:border-[#915EFF]"
                    }`}
                />
                {errors.phone && (
                  <span className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    ⚠ {errors.phone}
                  </span>
                )}
              </label>

              {/* ── Email ────────────────────────────────────── */}
              <label className="flex flex-col">
                <span className="font-medium text-[#915EFF] mb-2 sm:mb-4 text-sm sm:text-base">
                  Email Address
                </span>
                <input
                  type="text"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="xyz@gmail.com"
                  className={`bg-[#050505] py-3 sm:py-4 px-4 sm:px-6 placeholder:text-[#fafafa8a] rounded-lg outline-none border transition-all font-medium text-sm sm:text-base w-full ${errors.email
                    ? "border-red-500 focus:border-red-400"
                    : "border-[#915EFF]/30 focus:border-[#915EFF]"
                    }`}
                />
                {errors.email && (
                  <span className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    ⚠ {errors.email}
                  </span>
                )}
              </label>

              {/* ── Message ──────────────────────────────────── */}
              <label className="flex flex-col">
                <span className="font-medium text-[#915EFF] mb-2 sm:mb-4 text-sm sm:text-base">
                  Your Message
                </span>
                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project…"
                  className={`bg-[#050505] py-3 sm:py-4 px-4 sm:px-6 placeholder:text-[#fafafa8a] rounded-lg outline-none border transition-all font-medium text-sm sm:text-base w-full resize-none ${errors.message
                    ? "border-red-500 focus:border-red-400"
                    : "border-[#915EFF]/30 focus:border-[#915EFF]"
                    }`}
                />
                {errors.message && (
                  <span className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    ⚠ {errors.message}
                  </span>
                )}
              </label>

              <button
                type="submit"
                className="bg-[#915EFF] py-3 px-6 sm:px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-[#915EFF]/30 text-sm sm:text-base hover:bg-[#7a49e3] hover:shadow-[0_0_20px_rgba(145,94,255,0.5)] hover:scale-[1.02] active:scale-95 transition-all duration-300"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="xl:flex-1 my-auto h-[300px] sm:h-[350px] md:h-[450px] lg:h-[550px] w-full"
          >
            <EarthCanvas />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");