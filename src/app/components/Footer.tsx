import Link from "next/link";
import SoboardsLogo from "./SoBoardsLogo"; // Adjust the path if needed

export default function Footer() {
  const footerLinks = [
    {
      title: "Services",
      items: [
        "Digital Billboards",
        "Static Billboards",
        "Transit Media",
        "Street Furniture",
      ],
    },
    {
      title: "Industries",
      items: ["Retail", "Real Estate", "Entertainment", "FMCG", "Automobile"],
    },
    {
      title: "Company",
      items: ["About Us", "Work", "Insights", "Contact", "Careers"],
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-[#D1D5DB] py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" aria-label="Soboards Home">
              <SoboardsLogo />
            </Link>
            <p className="text-sm max-w-xs">
              Transforming outdoor advertising through innovative AI solutions
              and strategic planning.
            </p>
            <p className="text-sm">
              soboardsdev@gmail.com
              <br />
              Noopur Lokpuram, Pawar Nagar Road
              <br />
              Thane West
            </p>
          </div>

          {/* Navigation Columns */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-medium mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.items.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm hover:text-purple-300 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm">
              © {currentYear} soboards. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link
                href="#"
                className="text-sm hover:text-purple-300 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm hover:text-purple-300 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-sm hover:text-purple-300 transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
