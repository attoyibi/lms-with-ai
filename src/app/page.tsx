import HeroSection from '@/components/heroSection/heroSection';
import CourseList from '@/components/courseList/courseList';
import VideoList from '@/components/videoList/videoList';
import Navbar from '@/components/navbar/navbar';
import { createClient } from '@supabase/supabase-js';
import supabase from '@/lib/supabase';
import Footer from "../components/footerSection/footerSection"
import SubmitForm from '@/components/submitForm/SubmitForm';
import HeroSectionDaisy from '@/components/heroSection/heroSectionDaisy';
export default function Home() {
	return (
		<div className="sm:overflow-x-hidden">
			<Navbar />
			{/* Konten lainnya */}
			<div className="px-7 md:px-7 lg:px-7 container mx-auto max-w-screen-xl sm:overflow-x-hidden">
				<HeroSection />
				<HeroSectionDaisy />
				<CourseList />
				<SubmitForm />.
				{/* <VideoList /> */}
			</div>
			<div className="mt-8 text-center bg-gray-100 py-6">
				<p className="text-gray-800 text-lg">Explore endless possibilities and connect with me on:</p>
				<div className="flex justify-center mt-4 space-x-4">
					<a
						href="https://www.linkedin.com/in/muhammad-muchson-7024911b8/"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
					>
						LinkedIn
					</a>
					<a
						href="https://www.youtube.com/channel/UCXh8wC8rrctCESTKed2aDMQ"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
					>
						YouTube
					</a>
				</div>
			</div>
			<Footer />
		</div>
	);
}
