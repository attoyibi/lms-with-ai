
import HeroSection from "@/components/heroSection/heroSection";
import VideoList from "@/components/videoList/videoList";
import Navbar from "@/components/navbar/navbar";
import { createClient } from '@supabase/supabase-js'
import supabase from '@/lib/supabase';


export default function Home() {
  return (
    <div className="sm:overflow-x-hidden">
      <main className="shadow-md">
        <div className="lg:px-7 max-w-screen-xl container mx-auto ">
          <Navbar />
          {/* Konten lainnya */}
        </div>
      </main>
      <div className="px-7 md:px-7 lg:px-7 container mx-auto max-w-screen-xl sm:overflow-x-hidden">
        <HeroSection />
        {/* <VideoList /> */}
      </div>
    </div>
  );
}
