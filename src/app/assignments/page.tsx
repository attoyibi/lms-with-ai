import React from 'react';
import TrainingFormAssignments from "@/app/assignments/TrainingFormAssignments"
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footerSection/footerSection';
export default function page() {
    return (
        <>
            <Navbar />
            <div className="max-w-screen-sm mx-auto mt-5">
                <h1 className="text-4xl flex justify-center text-center">Form Pengumpulan Tugas</h1>
                <p className="text-lg mb-4 mt-2">
                    Mohon isi setiap informasi dalam formulir ini dengan teliti dan jujur.
                    <br /> Pengisian yang akurat akan sangat membantu kami dalam mengevaluasi tugas temen-temen.
                </p>
            </div>
            <TrainingFormAssignments />
            <Footer />
        </>
    );
}
