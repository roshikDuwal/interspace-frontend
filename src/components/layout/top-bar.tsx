import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa6";
export default function TopBar() {
  return (
    <div className="hidden lg:block bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          
          {/* Left */}
          <div className="flex items-center gap-6 text-sm">
            
            <div className="bg-secondary text-black font-semibold rounded-full px-4 py-2">
              ✓ NDIS Registered Provider
            </div>

            <span className="text-white/70">|</span>

            <span>
              Provider No:{" "}
              <strong>4050 123 456</strong>
            </span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-6 text-sm">
            
            <a
              href="tel:0450413456"
              className="flex items-center gap-2 hover:text-secondary"
            >
              <FaPhone  size={16} />
              0450 413 456
            </a>

            <a
              href="mailto:info@innerspacedss.com.au"
              className="flex items-center gap-2 hover:text-secondary"
            >
              <CiMail size={16} />
              info@innerspacedss.com.au
            </a>

            <div className="flex items-center gap-3">
              
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-secondary hover:text-black transition"
              >
                <FaFacebook  size={16} />
              </Link>

              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-secondary hover:text-black transition"
              >
                <FaInstagram  size={16} />
              </Link>

              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-secondary hover:text-black transition"
              >
                <FaLinkedin size={16} />
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}