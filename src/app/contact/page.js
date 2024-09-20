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
    // Clean up the timeout to avoid memory leaks when the component unmounts or changes
    return () => {
      clearTimeout(timeoutId);
    };
  }, [submitted]);

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await submitContactForm(formValue);
      setFormValue({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
      });
      setSubmitted(true);
      return res;
    } catch (e) {
      console.log("error occured");
    }
  };

  const handelChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* firstname, lastname, email, phone */}
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form method="POST">
            <div className="mb-5">
              <label
                htmlFor="name"
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
                onChange={handelChange}
                value={formValue.firstname || ""}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="name"
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
                onChange={handelChange}
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
                onChange={handelChange}
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
                type="number"
                name="phone"
                placeholder="+1524528831"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base"
                onChange={handelChange}
                value={formValue.phone || ""}
              />
            </div>
            <div>
              <button
                onClick={(e) => handelSubmit(e)}
                className="block rounded-md bg-green-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-green-700"
              >
                Submit
              </button>
            </div>
          </form>
          {submitted && (
            <div className="bg-green-600 text-white p-2 my-4 rounded-md">
              Form submitted sucessfully!
            </div>
          )}
        </div>
      </div>
    </>
  );
}
