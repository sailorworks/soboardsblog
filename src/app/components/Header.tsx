import Link from "next/link";
import SoboardsLogo from "./SoBoardsLogo";

export default function Header() {
  return (
    <nav className="p-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-[#D1D5DB]">
          <SoboardsLogo />
        </Link>
        <div className="flex gap-8">
          <Link
            href="#blog"
            className="text-[#D1D5DB] hover:text-purple-300 transition-colors"
          >
            Blog
          </Link>
          <Link
            href="#features"
            className="text-[#D1D5DB] hover:text-purple-300 transition-colors"
          >
            Services
          </Link>
          <Link
            href="#contact"
            className="text-[#D1D5DB] hover:text-purple-300 transition-colors"
          >
            Contact us
          </Link>
        </div>
      </div>
    </nav>
  );
}
