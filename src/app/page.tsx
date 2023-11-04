import HeroSection from "@/components/heroSection/heroSection";
import VideoList from "@/components/videoList/videoList";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <div className="">
      <main className="shadow-md">
        <div className="max-w-screen-xl container mx-auto ">
          <Navbar />
          {/* Konten lainnya */}
        </div>
      </main>
      <div className="mx-5 container mx-auto max-w-screen-xl ">
        <HeroSection />
        <VideoList />
      </div>
    </div>
  );
}
