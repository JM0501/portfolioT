import React from "react";
import { FaLinkedin, FaFacebook, FaWhatsapp, FaGithub } from "react-icons/fa";

export default function About() {
  return (
    <div className="section about px-6 py-10 bg-white rounded-2xl shadow-md flex flex-col">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">About Me</h2>
      <p className="text-gray-600 mb-6 leading-relaxed">
        I am Tshepang Mohlamonyane, a Freelance Full-Stack Developer based in
        Johannesburg, South Africa. I build dynamic, responsive websites and
        applications using modern technologies.
      </p>

      <ul className="space-y-2 text-gray-700 mb-6">
        <li><span className="font-semibold">Name:</span> Tshepang Mohlamonyane</li>
        <li><span className="font-semibold">DOB:</span> January 05, 2004</li>
        <li><span className="font-semibold">Email:</span> tshepangjuniorm@gmail.com</li>
        <li><span className="font-semibold">Phone:</span> +27 82 5587 566</li>
      </ul>

      {/* Social Links Section */}
      <div className="social-links flex justify-center gap-6 mt-auto">
        <a
          href="https://www.linkedin.com/in/tshepang-mohlamonyane-b9b31826a"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/tshepang.mohlamonyane.33"
          target="_blank"
          rel="noopener noreferrer"
          className="facebook"
        >
          <FaFacebook />
        </a>
        <a
          href="https://wa.me/27825587566"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://github.com/JM0501"
          target="_blank"
          rel="noopener noreferrer"
          className="github"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
}