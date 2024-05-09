import HeroSection from '@/components/heroSection/heroSection';
import CourseList from '@/components/courseList/courseList';
import VideoList from '@/components/videoList/videoList';
import Navbar from '@/components/navbar/navbar';
import { createClient } from '@supabase/supabase-js';
import supabase from '@/lib/supabase';
const courses = [
	{
		id: 1,
		title: 'Introduction to Web Development',
		description: 'Learn the basics of web development using HTML, CSS, and JavaScript.',
		level: 'Beginner',
		duration: '4 weeks',
		imageUrl: '' // Assuming image is in the 'images' folder
	},
	{
		id: 2,
		title: 'React.js Fundamentals',
		description: 'Master the fundamentals of React.js and build interactive web applications.',
		level: 'Intermediate',
		duration: '6 weeks'
	},
	{
		id: 3,
		title: 'Node.js and Express.js for Backend Development',
		description: 'Explore backend development with Node.js and Express.js.',
		level: 'Intermediate',
		duration: '8 weeks'
	},
	{
		id: 4,
		title: 'Advanced JavaScript Concepts',
		description: 'Dive deep into advanced JavaScript concepts such as closures, promises, and async/await.',
		level: 'Advanced',
		duration: '5 weeks'
	},
	{
		id: 5,
		title: '6',
		description: 'Dive deep into advanced JavaScript concepts such as closures, promises, and async/await.',
		level: 'Advanced',
		duration: '6 weeks'
	}
];

export default function Home() {
	return (
		<div className="sm:overflow-x-hidden">
			<Navbar />
			{/* Konten lainnya */}
			<div className="px-7 md:px-7 lg:px-7 container mx-auto max-w-screen-xl sm:overflow-x-hidden">
				<HeroSection />
				<CourseList courses={courses} />
				{/* <VideoList /> */}
			</div>
			<div className="mt-8 text-center bg-gray-100 py-6 ">
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
			<footer className="bg-gray-800 text-white py-4">
				<div className="container mx-auto px-4">
					<p className="text-center">&copy; 2024 Your Website. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
}
