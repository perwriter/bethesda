"use client";

import { useState } from "react";
import { submitContactForm } from "@/app/services/index";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formValue, setFormValue] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitContactForm(formValue);
      setFormValue({ firstname: "", lastname: "", email: "", phone: "" });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-black p-8">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side - Contact Info */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6">Have questions? We're here to help. Reach out to our team for support or inquiries.</p>
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Mail className="text-primary" />
              <span> bethesdachildcarekenya@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-primary" />
              <span>+254720224464</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-primary" />
              <span>Ndunduri, Nakuru, Kenya</span>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              className="w-full px-4 py-2 rounded-md bg-slate-50 border border-gray-700 focus:ring focus:ring-primary"
              onChange={handleChange}
              value={formValue.firstname}
            />
            <textarea
              type="text"
              name="lastname"
              placeholder="Message ..."
              rows={4}
              className="w-full px-4 py-2 rounded-md bg-slate-50 border border-gray-700 focus:ring focus:ring-primary"
              onChange={handleChange}
              value={formValue.lastname}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-md bg-slate-50 border border-gray-700 focus:ring focus:ring-primary"
              onChange={handleChange}
              value={formValue.email}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="w-full px-4 py-2 rounded-md bg-slate-50 border border-gray-700 focus:ring focus:ring-primary"
              onChange={handleChange}
              value={formValue.phone}
            />
            <button
              type="submit"
              className="w-full flex items-center justify-center bg-primary hover:bg-primary text-white py-2 rounded-md font-medium"
              disabled={loading}
            >
              {loading ? <Loader2 className="animate-spin" /> : "Send Message"}
            </button>
          </form>
          {submitted && (
            <div className="mt-4 p-3 text-center bg-green-100 text-green-700 border border-green-500 rounded-md">
              Your message has been sent successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}