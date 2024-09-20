import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 mt-8">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* Footer Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Logo */}
          <div className="mb-6 lg:mb-0 lg:w-1/3 flex justify-center lg:justify-start">
            <img src="../logo1.png" className="w-20 h-auto" alt="logo" />
          </div>

          {/* Address and Contact Information */}
          <div className="lg:w-1/3 text-center lg:text-left">
            <p className="text-sm text-gray-700 mb-2">
              <strong>Address:</strong> Ndunduri, Nakuru, Kenya
            </p>
            <p className="text-sm text-gray-700">
              <strong>Contact:</strong> +25412345678
            </p>
          </div>

          {/* Social Media Links */}
          <div className="lg:w-1/3 text-center lg:text-right mt-6 lg:mt-0">
            <ul className="flex  justify-center lg:justify-end space-x-6">
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-700"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-red-600"
                  aria-label="YouTube"
                >
                  <FaYoutube className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-400"
                  aria-label="Twitter"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-pink-500"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Content */}
        <div className="mt-8 border-t border-gray-300 pt-4 text-center">
          <p className="text-sm text-gray-500">
            Copyright &copy; 2023. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
