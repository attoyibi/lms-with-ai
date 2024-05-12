'use client';
import { useEffect, useState } from 'react';
import ToolsDetection from './ToolsDetection';
import PersonalInformation from './PersonalInformation';
import { useTabManagement } from '@/hooks/useTabManagement';

export default function Home() {
	const [activeTab, setActiveTab] = useState(0);
	// const { activeTab, handleTabChange } = useTabManagement();
	const handleTabChange = (index) => {
		console.log(index);
		setActiveTab(index);
	};
	useEffect(() => {
		handleTabChange(0);
	}, []);


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
				<PersonalInformation />
			</div>

			<input
				type="radio"
				name="my_tabs_2"
				role="tab"
				className="tab"
				aria-label="Tools Detection"
				checked={activeTab === 1}
				onChange={() => handleTabChange(1)}
			/>
			<div
				role="tabpanel"
				className={`tab-content bg-base-100 border-base-300 rounded-box p-6 ${activeTab === 1 ? 'active' : ''}`}
			>
				<ToolsDetection />
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
