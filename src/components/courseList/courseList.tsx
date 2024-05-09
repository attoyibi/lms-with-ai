import React from 'react';
interface TitleProps {
	text: string;
}
// Komponen untuk menampilkan judul
function Title({ text }: TitleProps) {
	return <h1 className="text-2xl font-bold mb-4">{text}</h1>;
}

export default function CourseList() {
	// Mengambil 4 data pertama dari array courses

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
	const limitedCourses = courses.slice(0, 4);
	return (
		<div>
			<Title text="Course List" /> {/* Menampilkan judul */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:p-2">
				{limitedCourses.map((course) => (
					<a
						key={course.id}
						href="#"
						className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
					>
						{/* <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"  src="/assets/images/hero_images.png" alt=""/> */}
						<div className="flex flex-col justify-between p-4 leading-normal">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								{course.title}
							</h5>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{course.description}</p>
							<div className="flex justify-between items-center">
								<span className="text-gray-500">{course.level}</span>
								<span className="text-gray-500">{course.duration}</span>
							</div>
						</div>
					</a>
				))}
			</div>
		</div>
	);
}
