"use client";
import { useEffect, useState } from "react";
import { FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function ShareBox({ title }) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <div className=" flex gap-1 justify-center items-center">
      <h3 className="font-bold ">Share:</h3>
      <div className="flex gap-1">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-blue-800 text-xl"
        >
          <FaFacebook />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            url
          )}&text=${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-sky-700 text-xl"
        >
          <FaTwitter />
        </a>
        <a
          href={`https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-green-700 text-xl"
        >
          <FaWhatsapp />
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
            url
          )}&title=${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-blue-900 text-xl"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}
