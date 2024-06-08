"use client";
import { useEffect, useState } from "react";

interface Task {
  id: number;
  status: string;
}

interface WithTugas {
  nama: string;
  deadline: string;
  status: string;
  tugas: Task[];
}

interface WithTipe {
  nama: string;
  deadline: string;
  status: string;
  tipe: string;
}

type MyStateType = (WithTugas | WithTipe)[];

export default function Home() {
  const [tasks, setTasks] = useState<MyStateType>([]);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const handleAccordionToggle = (index: number) => {
    console.log("handle");
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // Mengambil data tugas dari sumber data (misalnya API)
  useEffect(() => {
    // Contoh data tugas
    const tasksData: MyStateType = [
      {
        nama: "Task 1",
        deadline: "12 Mei 2024 - 21 mei 2024",
        status: "Belum Selesai",
        tugas: [{ id: 1, status: "Belum Selesai" }],
      },
      {
        nama: "Task 2",
        deadline: "14 Mei 2024",
        status: "Selesai",
        tipe: "Essay",
      },
      {
        nama: "Task 3",
        deadline: "16 Mei 2024",
        status: "Belum Selesai",
        tipe: "Praktik",
      },
      {
        nama: "Task 4",
        deadline: "17 Mei 2024",
        status: "Belum Selesai",
        tipe: "Praktik",
      },
    ];
    setTasks(tasksData);
  }, []);

  return (
    <div className="border rounded-lg mb-5 max-w-screen-xl mx-auto">
      <div className="mb-5">
        <div className="overflow-x-auto">
          <div className="divider divider-primary text-xl">List Tugas</div>
          <div className="join join-vertical w-full">
            {tasks.map((task, index) => (
              <div
                key={index}
                className={`collapse collapse-arrow join-item border border-base-300 ${activeAccordion === index ? "collapse-open" : "collapse-close"}`}
              >
                <input
                  type="radio"
                  name="my-accordion-4"
                  onClick={() => handleAccordionToggle(index)}
                  className="cursor-pointer"
                />
                <div className="collapse-title text-xl font-medium">
                  {task.nama} | {task.status}
                </div>
                <div className="collapse-content ">
                  {"tugas" in task && (
                    <div className="overflow-x-auto">
                      <table className="table">
                        <thead>
                          <tr>
                            <th></th>
                            <th>Task</th>
                            <th>Deadline</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {task.tugas.map((t, idx) => (
                            <tr key={idx}>
                              <th>
                                <label>
                                  <input type="checkbox" className="checkbox" />
                                </label>
                              </th>
                              <td>{t.id}</td>
                              <td>{task.deadline}</td>
                              <td>{t.status}</td>
                              <th>
                                <button className="btn btn-ghost btn-xs">
                                  Kerjakan
                                </button>
                              </th>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  {"tipe" in task && (
                    <div>
                      <p>Type: {task.tipe}</p>
                      <p>Deadline: {task.deadline}</p>
                      <p>Status: {task.status}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
