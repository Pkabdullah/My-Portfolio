"use client";

import { useState } from "react";
import ContactFormModal from "./PopUp";

const ContactPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        onClick={openModal}
        className="bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Contact Us
      </button>

      <ContactFormModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default ContactPage;
