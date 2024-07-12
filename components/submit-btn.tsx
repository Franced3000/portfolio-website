import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  const [pending, setPending] = useState(false);

  const handleClick = async () => {
    setPending(true);
    try {
      const form = document.querySelector("form");
      if (!form || !(form instanceof HTMLFormElement)) {
        throw new Error("Form element not found");
      }
      const formData = new FormData(form);
      const response = await fetch("/api/send", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (response.ok) {
        alert("Email sent successfully!");
      } else {
        alert("Failed to send email: " + result.error);
      }
    } catch (error) {
      if (error instanceof Error) {
        alert("Error sending email: " + error.message);
      } else {
        alert("Unknown error");
      }
    } finally {
      setPending(false);
    }
  };

  return (
    <button
      type="button"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
      onClick={handleClick}
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}
