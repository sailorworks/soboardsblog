import Link from "next/link";
import SoboardsLogo from "./SoBoardsLogo";

export default function Header() {
  return (
    <div className="relative">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-transparent pointer-events-none" />

      {/* Header content */}
      <nav className="relative p-6 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="text-[#D1D5DB] hover:opacity-90 transition-all"
          >
            <SoboardsLogo />
          </Link>

          <div className="flex gap-8">
            <Link
              href="#blog"
              className="relative text-[#D1D5DB] hover:text-purple-300 transition-colors group"
            >
              <span>Blog</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-300 transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link
              href="#features"
              className="relative text-[#D1D5DB] hover:text-purple-300 transition-colors group"
            >
              <span>Services</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-300 transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link
              href="#contact"
              className="relative text-[#D1D5DB] hover:text-purple-300 transition-colors group"
            >
              <span>Contact us</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-300 transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
