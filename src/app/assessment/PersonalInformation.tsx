
import React,{useState} from 'react'

export default function PersonalInformation() {
	// Daftar pilihan pendidikan
const educationOptions = [
    { value: 'SD', label: 'SD' },
    { value: 'SMP', label: 'SMP' },
    { value: 'SMA/SMK', label: 'SMA/SMK' },
    { value: 'Diploma', label: 'Diploma' },
    { value: 'Sarjana (S1)', label: 'Sarjana (S1)' },
    { value: 'Magister (S2)', label: 'Magister (S2)' },
    { value: 'Doktor (S3)', label: 'Doktor (S3)' },
];
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// Lakukan sesuatu dengan data yang dikumpulkan dari formulir
		console.log('Data yang dikumpulkan:', event.currentTarget.elements);
	};
	const [selectedEducation, setSelectedEducation] = useState('');
    const [universityOrSchool, setUniversityOrSchool] = useState('');
    const [educationStatus, setEducationStatus] = useState(true);

    const handleEducationChange = (e:any) => {
        setSelectedEducation(e.target.value);
		setEducationStatus(false);
    };

    const handleUniversityOrSchoolChange = (e:any) => {
        setUniversityOrSchool(e.target.value);
    };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
					<h1 className="text-xl font-semibold pt-4">Informasi Kontak</h1>
					<div className="block text-gray-700 text-sm font-bold mb-4">
    Nama Lengkap
    <label className="input input-bordered flex items-center gap-2 mt-2">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
        >
            <path
                fillRule="evenodd"
                d="M13.5 1a1 1 0 0 1 0 2h-11a1 1 0 1 1 0-2h11zm1 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-7 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm7 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-5 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                clipRule="evenodd"
            />
        </svg>
        <input type="text" className="grow" placeholder="Nama Lengkap" />
    </label>
		</div>
		<div className="block text-gray-700 text-sm font-bold mb-4">
			Email
			<label className="input input-bordered flex items-center gap-2 mt-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					className="w-4 h-4 opacity-70"
				>
					<path
						fillRule="evenodd"
						d="M10 1a9 9 0 0 0-5.868 15.358L1 17a1 1 0 1 0 2 0 7 7 0 1 1 14 0 1 1 0 1 0 2 0l-3.132-1.642A9 9 0 0 0 10 1zm-7.146 7.146l6 6 .687.718.687-.719 6-6A7 7 0 0 0 3.854 8.146zM11 13a5 5 0 1 0-2 0 1 1 0 1 1 2 0z"
						clipRule="evenodd"
					/>
				</svg>
				<input type="text" className="grow" placeholder="contoh@gmail.com" />
			</label>
		</div>
		<div className="block text-gray-700 text-sm font-bold ">
			Nomor Telepon
			<label className="input input-bordered flex items-center gap-2 mt-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					className="w-4 h-4 opacity-70"
				>
					<path
						fillRule="evenodd"
						d="M14 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V5zm-2-2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7zM8 14a1 1 0 0 0 0 2 1 1 0 0 0 0-2zm4-6a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2h4z"
						clipRule="evenodd"
					/>
				</svg>
				<input type="text" className="grow" placeholder="+628..." />
			</label>
		</div>


					{/* Profil Pribadi */}
					<h1 className="text-xl font-semibold pt-4">Profil Pribadi</h1>
					<div className="block text-gray-700 text-sm font-bold mb-4" >
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
					<div className="block text-gray-700 text-sm font-bold mb-4">
						Pendidikan Terakhir
						<div className="flex items-center gap-2 mt-2">
							<select
								value={selectedEducation}
								onChange={handleEducationChange}
								className="input input-bordered w-39"
							>
								<option value="" disabled>Pilih Pendidikan</option>
								{educationOptions.map((option) => (
									<option key={option.value} value={option.value}>
										{option.label}
									</option>
								))}
							</select>
							<input
								type="text"
								value={universityOrSchool}
								onChange={handleUniversityOrSchoolChange}
								disabled={educationStatus} 
								className="grow input input-bordered flex items-center gap-2 "
								placeholder="Nama Universitas/Sekolah"
							/>
						</div>
					</div>
					<div className="block text-gray-700 text-sm font-bold mb-4" >
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
					<div className="block text-gray-700 text-sm font-bold mb-4">
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

					<button type="submit" className="btn btn-primary btn-sm sm:btn-sm md:btn-md lg:btn-md">
						Next
					</button>
				</form>
  )
}
