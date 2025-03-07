import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-8 mt-8">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* Footer Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Logo */}
          <div className="mb-6 lg:mb-0 lg:w-1/4 flex justify-center lg:justify-start">
            <Link href="/">
              <Image
                src="/logo1.png"
                width={80}
                height={80}
                alt="Bethesda Childcare Logo"
                className="h-auto"
              />
            </Link>
          </div>

          {/* Menu Links */}
          <div className="lg:w-1/4 justify-start flex items-start text-center lg:text-start mt-6 lg:mt-0">
            <ul className="flex flex-col justify-center lg:justify-start space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "Donation", href: "/donation" },
                { name: "History", href: "/history" },
                { name: "Gallery", href: "/gallery" },
              ].map(({ name, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300 text-sm font-medium"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address and Contact Information */}
          <div className="lg:w-1/4 text-center lg:text-left">
            <p className="text-sm text-gray-700 mb-2">
              <strong>Address:</strong> Ndunduri, Nakuru, Kenya
            </p>
            <p className="text-sm text-gray-700">
              <strong>Email:</strong>{" "}
              <Link href="mailto:bethesdachildcarekenya@gmail.com" className="hover:text-blue-600">
                bethesdachildcarekenya@gmail.com
              </Link>
            </p>
            <p className="text-sm text-gray-700">
              <strong>Contact:</strong> <Link href="tel:+254720224464" className="hover:text-blue-600">+254720224464</Link>
            </p>
            <p className="text-sm text-gray-700">
              <strong>Contact:</strong> <Link href="tel:+254721201092" className="hover:text-blue-600">+254721201092</Link>
            </p>
          </div>

          {/* Social Media Links */}
          <div className="lg:w-1/4 justify-end flex items-end text-center lg:text-right mt-6 lg:mt-0">
            <ul className="flex flex-col justify-center lg:justify-end space-y-4">
              {[
                {
                  name: "Facebook",
                  href: "#",
                  icon: <FaFacebookF />,
                  color: "hover:text-blue-700",
                },
                {
                  name: "YouTube",
                  href: "#",
                  icon: <FaYoutube />,
                  color: "hover:text-red-600",
                },
                {
                  name: "Twitter",
                  href: "#",
                  icon: <FaTwitter />,
                  color: "hover:text-blue-400",
                },
                {
                  name: "Instagram",
                  href: "#",
                  icon: <FaInstagram />,
                  color: "hover:text-pink-500",
                },
              ].map(({ name, href, icon, color }) => (
                <li key={name}>
                  <Link
                    href={href}
                    aria-label={name}
                    className={`flex items-center space-x-3 text-gray-500 transition-transform duration-300 transform hover:scale-110 hover:rotate-3 ${color}`}
                  >
                    <span className="w-6 h-6">{icon}</span>
                    <span className="text-sm font-medium">{name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom Content */}
        <div className="mt-8 border-t border-gray-300 pt-4 text-center">
          <p className="text-sm text-gray-500">
            Copyright &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
