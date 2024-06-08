"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/router';
// import SpeedTest from 'speedtest-net';

export default function ToolsDetection() {

	// const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const [speedResult, setSpeedResult] = useState(null);


	const handleTestSpeed = async () => {

	};
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// Lakukan sesuatu dengan data yang dikumpulkan dari formulir
		console.log('Data yang dikumpulkan:', event.currentTarget.elements);
	};
	return (
		<div>
			<form onSubmit={handleSubmit} className="space-y-4">
				<h1 className="text-xl font-semibold pt-4">Tools Detection</h1>
				<div className="block text-gray-700 text-sm font-bold mb-4" >
					<div>
						<div className="block text-gray-700 text-sm font-bold mb-4">Test Kecepatan Internet</div>
						<button
							className="btn btn-primary btn-sm sm:btn-sm md:btn-md lg:btn-md"
							onClick={handleTestSpeed}
							disabled={isLoading}
						>
							{isLoading ? 'Sedang Memeriksa...' : 'Test Sekarang'}
						</button>
						{speedResult && (
							<div>
								<h2>Hasil Test Kecepatan</h2>
								<p>Download Speed: {speedResult} Mbps</p>
								<p>Upload Speed: {speedResult} Mbps</p>
							</div>
						)}
					</div>
				</div>
				<div className="block text-gray-700 text-sm font-bold mb-4" >
					Test Camera
					<label className="input input-bordered flex items-center gap-2 mt-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							className="w-4 h-4 opacity-70"
						>
							<path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
							<path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
						</svg>
						<input type="text" className="grow" placeholder="contoh@gmail.com" />
					</label>
				</div>
				<div className="block text-gray-700 text-sm font-bold mb-4" >
					Deteksi Device
					<label className="input input-bordered flex items-center gap-2 mt-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							className="w-4 h-4 opacity-70"
						>
							<path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
							<path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
						</svg>
						<input type="text" className="grow" placeholder="+628..." />
					</label>
				</div>
				<div className="block text-gray-700 text-sm font-bold mb-4" >
					Test Mic
					<label className="input input-bordered flex items-center gap-2 mt-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							className="w-4 h-4 opacity-70"
						>
							<path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
							<path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
						</svg>
						<input type="text" className="grow" placeholder="+628..." />
					</label>
				</div>

				<button type="submit" className="btn btn-primary btn-sm sm:btn-sm md:btn-md lg:btn-md">
					Next
				</button>
			</form>
		</div>
	)
}
