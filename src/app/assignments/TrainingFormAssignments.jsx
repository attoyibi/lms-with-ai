'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionToggle = (index) => {
    console.log("handle")
    setActiveAccordion(activeAccordion === index ? null : index);
  };
  // Mengambil data tugas dari sumber data (misalnya API)
  useEffect(() => {
    // Contoh data tugas
    const tasksData = [
      {
        nama: 'Task 1', deadline: '12 Mei 2024 - 21 mei 2024', status: 'Belum Selesai', tugas: [
          { id: 1, status: 'Belum Selesai' }
        ]
      },
      { nama: 'Task 2', deadline: '14 Mei 2024', status: 'Selesai', tipe: 'Essay' },
      { nama: 'Task 3', deadline: '16 Mei 2024', status: 'Belum Selesai', tipe: 'Praktik' },
      { nama: 'Task 3', deadline: '16 Mei 2024', status: 'Belum Selesai', tipe: 'Praktik' },
      { nama: 'Task 3', deadline: '16 Mei 2024', status: 'Belum Selesai', tipe: 'Praktik' },
      { nama: 'Task 3', deadline: '16 Mei 2024', status: 'Belum Selesai', tipe: 'Praktik' }
    ];
    setTasks(tasksData);
  }, []);

  return (
    <div className="border rounded-lg mb-5 max-w-screen-xl mx-auto">
      <div className="mb-5">
        <div className="overflow-x-auto">
          <div className="divider divider-primary text-xl">List Tugas</div>
          <div className="join join-vertical w-full">
            <div className={`collapse collapse-arrow join-item border border-base-300 ${activeAccordion === 0 ? 'collapse-open' : 'collapse-close'}`} >
              <input type="radio" name="my-accordion-4" defaultChecked onClick={() => handleAccordionToggle(0)} className="cursor-pointer" />
              <div className="collapse-title text-xl font-medium">
                Introduction to Front End Engginer | 0/3

              </div>
              <div className="collapse-content ">
                <div className="overflow-x-auto">
                  <table className="table">
                    {/* head */}
                    <thead>
                      <tr>
                        <th>

                        </th>
                        <th>Task</th>
                        <th>Deadline</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1 */}
                      <tr>
                        <th>
                          <label>
                            <input type="checkbox" className="checkbox" />
                          </label>
                        </th>
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold">Pilgan</div>

                            </div>
                          </div>
                        </td>
                        <td>
                          Pilgan

                        </td>
                        <td>Belum dikerjakan</td>
                        <th>
                          <button className="btn btn-ghost btn-xs">Kerjakan</button>
                        </th>
                      </tr>
                      {/* row 2 */}
                      <tr>
                        <th>
                          <label>
                            <input type="checkbox" className="checkbox" />
                          </label>
                        </th>
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold">Summary</div>

                            </div>
                          </div>
                        </td>
                        <td>
                          Pilgan

                        </td>
                        <td>Belum dikerjakan</td>
                        <th>
                          <button className="btn btn-ghost btn-xs">Kerjakan</button>
                        </th>
                      </tr>
                      {/* row 3 */}
                      <tr>
                        <th>
                          <label>
                            <input type="checkbox" className="checkbox" />
                          </label>
                        </th>
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold">Praktikum</div>

                            </div>
                          </div>
                        </td>
                        <td>
                          Pilgan

                        </td>
                        <td>Belum dikerjakan</td>
                        <th>
                          <button className="btn btn-ghost btn-xs">Kerjakan</button>
                        </th>
                      </tr>

                    </tbody>


                  </table>
                </div>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Task 2
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Task 3
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
