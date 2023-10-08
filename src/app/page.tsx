import HeroSection from "@/components/heroSection/heroSection";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <>
      <main className="shadow-md">
        <div className="max-w-screen-xl container mx-auto ">
          <Navbar />
          {/* Konten lainnya */}
        </div>
      </main>
      <div className="container mx-auto max-w-screen-xl">
        <HeroSection />
      </div>
    </>
  );
}
