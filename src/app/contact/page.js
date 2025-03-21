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
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-black p-8">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side - Contact Info */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6">
            Have questions? We&apos;re here to help. Reach out to our team for
            support or inquiries.
          </p>
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
     {/* Google Maps Section */}
<div className="flex flex-col items-center justify-center w-full py-12 bg-gray-100">
  <h2 className="text-2xl font-bold mb-4">Our Location</h2>
  <div className="w-full max-w-4xl h-96 rounded-lg overflow-hidden shadow-lg">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255346.08576255012!2d35.996553102471424!3d-0.2424821341186138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1829eb2325fae3f9%3A0x8c5cf11ad65927f8!2sBethesda%20Childcare%20Center!5e0!3m2!1sen!2ske!4v1742526565050!5m2!1sen!2ske"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>

      </>
  );
}
