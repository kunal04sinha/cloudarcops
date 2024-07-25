import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";
import {
  VITE_PUBLIC_KEY,
  VITE_SERVICE_ID,
  VITE_TEMPLATE_ID,
} from "../../../config";
const FormNew = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(VITE_SERVICE_ID, VITE_TEMPLATE_ID, form.current, {
        publicKey: VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          setLoading(false);
          toast.success(
            "Thank you for reaching out! Our team will get back to you shortly."
          );
          e.target.reset();
        },
        (error) => {
          setLoading(false);
          toast.error("Oops! Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <div className="p-8 max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <form ref={form} onSubmit={sendEmail}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="First Name"
                required
                disabled={loading}
              />
            </div>
            <div>
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Last Name"
                required
                disabled={loading}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="mt-2 p-2 border border-gray-300 rounded w-full"
              placeholder="Your@company.com"
              required
              disabled={loading}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="number"
              className="mt-2 p-2 border border-gray-300 rounded w-full"
              placeholder="+91-0000000000"
              disabled={loading}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              className="mt-2 p-2 border border-gray-300 rounded w-full"
              placeholder="Message"
              rows="4"
              required
              disabled={loading}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="privacy"
                className="form-checkbox"
                required
                disabled={loading}
              />
              <span className="ml-2">
                You agree to our friendly privacy policy
              </span>
            </label>
          </div>
          <div>
            <button
              type="submit"
              value="send"
              className="bg-blue-600 text-white p-2 rounded w-full"
              disabled={loading}
            >
              {loading ? (
                <ClipLoader size={9} color={"#3B82F6"} />
              ) : (
                "Request a Call"
              )}
            </button>
          </div>
        </form>
      </div>
      <div className="space-y-4">
        <div className="bg-blue-100 p-4 rounded-lg flex items-center">
          <span className="material-icons text-blue-600">email</span>
          <span className="ml-2">cloudarcops@gmail.com</span>
        </div>
        <div className="text-gray-600 text-sm mt-2">
          Our friendly team is here to help.
        </div>
        <div className="bg-blue-100 p-4 rounded-lg flex items-center">
          <span className="material-icons text-blue-600">location_on</span>
          <span className="ml-4">cloudarcops@.in</span>
        </div>
        <div className="text-gray-600 text-sm mt-2">
          Come say hello at our office HQ.
        </div>
        <div className="bg-blue-100 p-4 rounded-lg flex items-center">
          <span className="material-icons text-blue-600">phone</span>
          <span className="ml-4">+91 9999999999</span>
        </div>
        <div className="text-gray-600 text-sm mt-2">
          Come say hello at our office HQ.
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default FormNew;
