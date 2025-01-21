import Header from "./Header";

export default function HeroSection() {
  return (
    <section className="min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto px-6">
        <div className="mt-8 mb-4">
          <p className="text-[#D1D5DB] text-lg">
            Grow your outdoor advertising business with soboards
          </p>
        </div>
        <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-light leading-tight max-w-5xl mt-20">
          Innovating, designing, and enabling AI for established OOH players
        </h1>
        <div className="mt-20">
          <p className="text-[#D1D5DB] text-lg font-medium">
            We are a team of seasoned professionals who specialize in Sales, AI,
            Video Editing, and Digital Marketing.
          </p>
        </div>
      </div>
    </section>
  );
}
