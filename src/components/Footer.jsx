"use client";

import { socialMedia } from "@/app/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleForm(e) {
    e.preventDefault();
    if (name === "" || email === "" || message === "" || subject === "") {
      toast.error("All fields are required");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        body: JSON.stringify({ name, email, message, subject }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log("data", data);
      console.log("Form submitted:", name, email, subject, message);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");

      toast.success("Message Send successfully!");
    } catch (error) {
      toast.error("An error occurred while Sending Message.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      <ToastContainer />

      <div className="w-full absolute left-0 bottom-0 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
          width={1}
          height={1}
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>

        <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
          <form onSubmit={handleForm}>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-300"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-300"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                name="email"
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-300"
                htmlFor="Subject"
              >
                Subject
              </label>
              <input
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                name="Subject"
                id="subject"
                type="text"
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-300"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                rows="3"
                name="message"
                id="message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className={`bg-gradient-to-r from-purple via-purple-400 to-blue-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 M Abdullah
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-4">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Link href={info.link}>
              <Image src={info.img} alt="icons" width={20} height={20} /></Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
