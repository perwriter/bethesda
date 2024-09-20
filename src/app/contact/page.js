"use client";

import { useState, useEffect } from "react";
import { submitContactForm } from "@/app/services/index";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formValue, setFormValue] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSubmitted(false);
    }, 3000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [submitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Sanitize phone number: remove any non-numeric characters (e.g., +, spaces)
      const sanitizedFormValue = {
        ...formValue,
        phone: formValue.phone.replace(/\D/g, ""), // Keep only numbers
      };

      const res = await submitContactForm(sanitizedFormValue);
      setFormValue({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
      });
      setSubmitted(true);
      return res;
    } catch (e) {
      console.log("Error occurred:", e);
    }
  };

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form method="POST" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="firstname"
                className="mb-3 block text-base font-medium text-primary"
              >
                First name
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="First Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base"
                onChange={handleChange}
                value={formValue.firstname || ""}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="lastname"
                className="mb-3 block text-base font-medium text-primary"
              >
                Last name
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Last Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base"
                onChange={handleChange}
                value={formValue.lastname || ""}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-primary"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@email.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base"
                onChange={handleChange}
                value={formValue.email || ""}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="phone"
                className="mb-3 block text-base font-medium text-primary"
              >
                Phone
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="+1524528831"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base"
                onChange={handleChange}
                value={formValue.phone || ""}
              />
            </div>
            <div>
              <button
                type="submit"
                className="block rounded-md bg-green-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-green-700"
              >
                Submit
              </button>
            </div>
          </form>
          {submitted && (
            <div className="bg-green-600 text-white p-2 my-4 rounded-md">
              Form submitted successfully!
            </div>
          )}
        </div>
      </div>
    </>
  );
}
