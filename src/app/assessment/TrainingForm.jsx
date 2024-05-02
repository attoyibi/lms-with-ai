'use client';
import { useEffect, useState } from 'react';

export default function Home() {
	const [ activeTab, setActiveTab ] = useState(0);

	const handleTabChange = (index) => {
		console.log(index);
		setActiveTab(index);
	};
	useEffect(() => {
		handleTabChange(0);
	}, []);

	const handleSubmit = (event) => {
		event.preventDefault();
		// Lakukan sesuatu dengan data yang dikumpulkan dari formulir
		console.log('Data yang dikumpulkan:', event.target.elements);
	};

	return (
		<div role="tablist" className="tabs tabs-lifted">
			<input
				type="radio"
				name="my_tabs_2"
				role="tab"
				className="tab"
				aria-label="Data Diri"
				checked={activeTab === 0}
				onChange={() => handleTabChange(0)}
			/>
			<div
				role="tabpanel"
				className={`tab-content bg-base-100 border-base-300 rounded-box p-6 ${activeTab === 0 ? 'active' : ''}`}
			>
				<form onSubmit={handleSubmit} className="space-y-4">
					<h1 className="text-xl font-semibold pt-4">Informasi Kontak</h1>
					<div className="block text-gray-700 text-sm font-bold mb-4" htmlFor="username">
						Nama Lengkap
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
							<input type="text" className="grow" placeholder="Nama Lengkap" />
						</label>
					</div>
					<div className="block text-gray-700 text-sm font-bold mb-4" htmlFor="username">
						Email
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
					<div className="block text-gray-700 text-sm font-bold mb-4" htmlFor="username">
						Nomor Telepon
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

					{/* Profil Pribadi */}
					<h1 className="text-xl font-semibold pt-4">Profil Pribadi</h1>
					<div className="block text-gray-700 text-sm font-bold mb-4" htmlFor="username">
						Tautan Media Sosial (jika ada)
						<label className="input input-bordered flex items-center gap-2 mt-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="w-4 h-4 opacity-70"
							>
								<path fill="none" d="M0 0h24v24H0z" />
								<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16.93c-3.95-.49-7-3.85-7-7.93 0-.26.02-.52.05-.77C5.9 9.44 7.74 8 10 8c.97 0 1.86.34 2.56.88l-1.43 1.43C10.97 10.78 10.5 10 10 10c-2.21 0-4 1.79-4 4s1.79 4 4 4c1.87 0 3.41-1.28 3.86-3h-2.03v-2h4v4h-1.93z" />
							</svg>
							<input type="text" className="grow" placeholder="Tautan Media Sosial" />
						</label>
					</div>
					<div className="block text-gray-700 text-sm font-bold mb-4" htmlFor="username">
						Pendidikan Terakhir
						<label className="input input-bordered flex items-center gap-2 mt-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="w-4 h-4 opacity-70"
							>
								<path fill="none" d="M0 0h24v24H0z" />
								<path d="M18 2H6c-1.1 0-1.99.9-1.99 2L4 20l7-3 7 3V4c0-1.1-.9-2-2-2zm-7 9l-3 2h2v3h2v-3h2l-3-2z" />
							</svg>
							<input type="text" className="grow" placeholder="Pendidikan Terakhir" />
						</label>
					</div>
					<div className="block text-gray-700 text-sm font-bold mb-4" htmlFor="username">
						Pengalaman (Kerja/Organisasi)
						<label className="input input-bordered flex items-center gap-2 mt-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="w-4 h-4 opacity-70"
							>
								<path fill="none" d="M0 0h24v24H0z" />
								<path d="M20 10.18V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v5.18C3.37 11.5 2 13.43 2 16v2c0 .55.45 1 1 1h3v3h12v-3h3c.55 0 1-.45 1-1v-2c0-2.57-1.37-4.5-3-5.82zM12 18l-4-4h3v-5h2v5h3l-4 4z" />
							</svg>
							<input type="text" className="grow" placeholder="Pengalaman (Kerja/Organisasi)" />
						</label>
					</div>
					<div className="block text-gray-700 text-sm font-bold mb-4" htmlFor="username">
						Keahlian (Teknis/Non Teknis)
						<label className="input input-bordered flex items-center gap-2 mt-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="w-4 h-4 opacity-70"
							>
								<path fill="none" d="M0 0h24v24H0z" />
								<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16.93c-3.95-.49-7-3.85-7-7.93 0-.26.02-.52.05-.77C5.9 9.44 7.74 8 10 8c.97 0 1.86.34 2.56.88l-1.43 1.43C10.97 10.78 10.5 10 10 10c-2.21 0-4 1.79-4 4s1.79 4 4 4c1.87 0 3.41-1.28 3.86-3h-2.03v-2h4v4h-1.93z" />
							</svg>
							<input type="text" className="grow" placeholder="Keahlian (Teknis/Non Teknis)" />
						</label>
					</div>

					<button type="submit" className="btn btn-primary btn-sm sm:btn-sm md:btn-md lg:btn-lg">
						Next
					</button>
				</form>
			</div>

			<input
				type="radio"
				name="my_tabs_2"
				role="tab"
				className="tab"
				aria-label="Minat Peserta"
				checked={activeTab === 1}
				onChange={() => handleTabChange(1)}
			/>
			<div
				role="tabpanel"
				className={`tab-content bg-base-100 border-base-300 rounded-box p-6 ${activeTab === 1 ? 'active' : ''}`}
			>
				Tab content 2
			</div>

			<input
				type="radio"
				name="my_tabs_2"
				role="tab"
				className="tab"
				aria-label="Tes Logika"
				checked={activeTab === 2}
				onChange={() => handleTabChange(2)}
			/>
			<div
				role="tabpanel"
				className={`tab-content bg-base-100 border-base-300 rounded-box p-6 ${activeTab === 2 ? 'active' : ''}`}
			>
				Tab content 3
			</div>
		</div>
	);
}
