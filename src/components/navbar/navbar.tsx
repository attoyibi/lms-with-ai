import "tailwindcss/tailwind.css"; // Import Tailwind CSS
import Image from "next/image";
import styles from "./navbar.module.css"; //
export default function Navbar() {
  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 111</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 11</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <Image
            src="/assets/images/robot.png" // Make sure the path is correct
            alt="Logo"
            width={25}
            height={25}
            className={`mr-2 w-6 h-6 sm:w-12 sm:h-12 ${styles["hidden-on-small-screen"]}`} // Tambahkan kelas CSS
          />

          <p className="items-center normal-case text-xl hidden sm:block">
            LMS Sinau
          </p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md me-2">
          Book a demo
        </a>
        <a className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md">Get started</a>
      </div>
    </div>
  );
}
