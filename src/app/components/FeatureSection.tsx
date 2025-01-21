import { BarChart3, Palette, Target } from "lucide-react";
import Link from "next/link";

const FeatureSection = () => {
  const features = [
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Sales",
      description:
        "Drive primary growth with our sales team and our AI-driven sales techniques.",
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "Enabling ai",
      description: "Enabling AI for OOH agency for smooth business operation",
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Video creation",
      description: "Within 60-100 days, we generate 2-5 viral videos.",
    },
  ];

  return (
    <section id="features" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((item, index) => (
            <div key={index} className="text-center">
              <div className="h-32 mb-4 flex items-center justify-center text-purple-300">
                {item.icon}
              </div>
              <h4 className="text-white text-xl font-semibold mb-2">
                {item.title}
              </h4>
              <p className="text-[#D1D5DB]">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/learn-more"
            className="inline-block border border-[#D1D5DB] text-[#D1D5DB] px-6 py-2 rounded mr-4 hover:bg-purple-300 hover:text-gray-900 transition duration-300"
          >
            Learn More
          </Link>
          <Link
            href="/sign-up"
            className="inline-block bg-purple-300 text-gray-900 px-6 py-2 rounded hover:bg-purple-400 transition duration-300"
          >
            Sign Up →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
