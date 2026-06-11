"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCourse?: string;
}

export default function ConsultationModal({ isOpen, onClose, initialCourse = "" }: ConsultationModalProps) {
  const [fullName, setFullName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const selectedCourseName = courseName || initialCourse;

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!selectedCourseName) newErrors.courseName = "Please select a course";

    const cleanPhone = phoneNumber.replace(/[^0-9]/g, "");
    if (!phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (cleanPhone.length < 8) {
      newErrors.phoneNumber = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsAppChat = () => {
    const text = encodeURIComponent("Hi! I would like to book a free consultation for Dock Media School.");
    window.open(`https://wa.me/918848332909?text=${text}`, "_blank");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, courseName: selectedCourseName, phoneNumber }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setIsSuccess(true);

      window.setTimeout(() => {
        setFullName("");
        setCourseName("");
        setPhoneNumber("");
        setIsSuccess(false);
        onClose();
      }, 2200);
    } catch {
      setErrors({
        form: "We could not send your application right now. Please try WhatsApp or call admissions.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-md overflow-hidden rounded-[14px] glass-modal p-8 text-white shadow-2xl z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors duration-200"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {!isSuccess ? (
              <>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-display font-extrabold text-white mb-2">
                    Book Your Free Consultation
                  </h3>
                  <p className="text-sm text-white/60">
                    Discover the right media pathway for your future.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Rahul Nair"
                      className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-accent-gold/50 transition-all ${
                        errors.fullName ? "border-accent-orange" : "border-white/10"
                      }`}
                    />
                    {errors.fullName && <p className="text-xs text-accent-orange mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Course dropdown */}
                  <div>
                    <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1">
                      Course Name
                    </label>
                    <select
                      value={selectedCourseName}
                      onChange={(e) => setCourseName(e.target.value)}
                      className={`w-full px-4 py-3 bg-[#0F182E] border rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-accent-gold/50 transition-all ${
                        errors.courseName ? "border-accent-orange" : "border-white/10"
                      }`}
                    >
                      <option value="" disabled>Select course pathway</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Content Creation">Content Creation</option>
                      <option value="Video Editing">Video Editing</option>
                      <option value="Marketing">Marketing</option>
                    </select>
                    {errors.courseName && <p className="text-xs text-accent-orange mt-1">{errors.courseName}</p>}
                  </div>

                  {/* Phone number field */}
                  <div>
                    <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="e.g. +91 98765 43210"
                      className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-accent-gold/50 transition-all ${
                        errors.phoneNumber ? "border-accent-orange" : "border-white/10"
                      }`}
                    />
                    {errors.phoneNumber && <p className="text-xs text-accent-orange mt-1">{errors.phoneNumber}</p>}
                  </div>

                  {/* Submit buttons */}
                  <div className="pt-2 flex flex-col gap-3">
                    {errors.form && (
                      <p className="text-xs text-red-400 text-center">{errors.form}</p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl font-display font-bold text-sm bg-gradient-dock text-white shadow-lg hover:shadow-accent-orange/20 active:scale-98 transition-all flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        "Submit Application"
                      )}
                    </button>

                    <div className="flex items-center my-1">
                      <div className="flex-grow border-t border-white/5" />
                      <span className="mx-3 text-xs text-white/40 uppercase tracking-wider">or chat directly</span>
                      <div className="flex-grow border-t border-white/5" />
                    </div>

                    <button
                      type="button"
                      onClick={handleWhatsAppChat}
                      className="w-full py-3 rounded-xl font-display font-bold text-sm bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 active:scale-98 transition-all flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 448 512">
                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32 101.5 32 2 131.5 2 253.9c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 221.8-99.5 221.9-221.9 0-59.3-23.1-115.1-65-157.1zM223.9 438.7h-.1c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.8 184.6-186.5 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.5-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.5-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                      </svg>
                      WhatsApp Consultation
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-16 h-16 bg-[#25D366]/20 text-[#25D366] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-extrabold text-white mb-2">
                  Application Sent!
                </h3>
                <p className="text-sm text-white/70 max-w-xs">
                  Admissions has received your details and will contact you shortly.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
