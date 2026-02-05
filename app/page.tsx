import Image from "next/image";
import "./landing.scss";

import { FaWhatsapp, FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Home() {
  return (
    <div className="landing">
      {/* Background image */}
      <div
        className="landing__background"
        style={{ backgroundImage: "url(/cover.jpg)" }}
      />

      <div className="landing__content">
        {/* Logo */}
        <Image
          src="/logo.svg"
          alt="Made by Care logo"
          width={220}
          height={220}
          priority
          className="landing__logo"
        />

        <h1 className="landing__title">Made by Care</h1>

        <p className="landing__tagline">
          Thoughtfully handmade. One by one.
        </p>

        <p className="landing__coming">
          We’re currently preparing our website.
          <br />
          Something carefully made is coming soon.
        </p>

        <p className="landing__availability">
          Handmade • Customisable • Small batches
        </p>

        {/* Icons */}
        <div className="landing__icons">
          <a
            className="landing__iconLink"
            href="tel:+447421411763"
            aria-label="Call"
          >
            <FaPhoneAlt />
          </a>

          <a
            className="landing__iconLink"
            href="https://wa.me/447421411763"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>

          <a
            className="landing__iconLink"
            href="mailto:hello@madebycare.co.uk"
            aria-label="Email"
          >
            <HiOutlineMail />
          </a>

          <a
            className="landing__iconLink"
            href="https://www.facebook.com/profile.php?id=61586761463173"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
    </div>
  );
}
