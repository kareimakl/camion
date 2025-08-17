"use client";
import { useState, useEffect } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  TelegramIcon,
} from "react-share";
import { FaInstagram, FaSnapchatGhost, FaLink } from "react-icons/fa";

export default function SocialShare({ product }) {
  const [shareUrl, setShareUrl] = useState("");
  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  if (!shareUrl) return null; // render nothing until we have the URL

  const title = product?.name || "Check this product!";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    alert("Link copied! You can now paste it in Instagram.");
  };

  const shareNative = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: "Check this out!",
          url: shareUrl,
        });
      } catch (err) {
        console.error("Share failed:", err);
      }
    } else {
      copyToClipboard();
    }
  };

  return (
    <div className="flex items-center flex-wrap gap-3 mt-6">
      <FacebookShareButton url={shareUrl} quote={title} hashtag="#MyShop">
        <FacebookIcon size={40} round />
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl} title={title}>
        <TwitterIcon size={40} round />
      </TwitterShareButton>
      <WhatsappShareButton url={shareUrl} title={title} separator=" - ">
        <WhatsappIcon size={40} round />
      </WhatsappShareButton>
      <TelegramShareButton url={shareUrl} title={title}>
        <TelegramIcon size={40} round />
      </TelegramShareButton>

      <button
        onClick={shareNative}
        className="w-10 h-10 rounded-full flex items-center justify-center bg-pink-500 text-white"
      >
        <FaInstagram size={22} />
      </button>

      <a
        href={`https://www.snapchat.com/scan?attachmentUrl=${encodeURIComponent(
          shareUrl
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-yellow-400 text-white">
          <FaSnapchatGhost size={22} />
        </div>
      </a>

      <button
        onClick={copyToClipboard}
        className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-600 text-white"
      >
        <FaLink size={18} />
      </button>
    </div>
  );
}
