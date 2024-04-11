import Modal from "./Modal";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import useOutsideClick from "../hooks/useOutSideClick";
import logoImage from '../assets/devlogo_g3p0.png';


function Header() {
  return (
    <header className="w-full h-auto py-4 bg-slate-900 text-slate-500 flex justify-between items-center px-2 shadow-slate-400 rounded-md mt-4">
      <ProductsList />
      <Logo />
    </header>
  );
}

export default Header;

function ProductsList() {
  const [open, setOpen] = useState(false);
  return (
    <div className="sm:w-[60%] w-[30%]  h-auto">
      <Modal open={open} setOpen={setOpen} />
      <AllList />
      <button onClick={() => setOpen((open) => !open)}>
        <Bars3Icon className="w-7 sm:hidden flex justify-center items-center transition duration-700 ease-in-out" />
      </button>
    </div>
  );
}



function Logo() {
  return (
    <div
      className="flex justify-end items-center lg:text-2xl md:text-xl sm:text-lg pl-2 font-bold text-slate-100"
      style={{
        width: '5%',
        animation: 'rotate 10s infinite linear',
      }}
    >
      <img src={logoImage} alt="Logo" className="h-100 w-100 mr-2" />
    </div>
  );
}

function AllList() {
  const [openTemplate, setOpenTemplate] = useState(false);
  return (
    <ul className="w-full justify-start gap-x-7 items-center hidden sm:flex pt-4  px-1 text-base text-slate-200">
      <li className="hover:text-yellow-300 font-semibold" style={{ marginLeft: '10px' }}>

          <Link to="/">خانه</Link>

      </li>
      <li className="hover:text-yellow-300 font-semibold">
        <button
          id="optionDropDown"
          onClick={() => setOpenTemplate(!openTemplate)}
          className="w-full  lg:text-lg md:text-sm sm:text-xs lg:pl-4 md:pl-1"
        >
          نمونه کارها
        </button>
      </li>
      {openTemplate && <TemplateList setOpenTemplate={setOpenTemplate} />}
      <li className="hover:text-yellow-300 font-semibold">
        <a
          className="w-full lg:text-lg md:text-sm sm:text-xs lg:pl-4 md:pl-1"
          href="#"
        >
          درباره ما
        </a>
      </li>
      <li className="hover:text-yellow-300 font-semibold">
        <Link
          className="w-full lg:text-lg md:text-sm sm:text-xs lg:pl-4 md:pl-1"
          to="/team"
        >
         تیم سافت اسپید
        </Link>
      </li>
    </ul>
  );
}

function TemplateList({ setOpenTemplate }) {
  const optionsRef = useRef();
  useOutsideClick(optionsRef, "optionDropDown", () => setOpenTemplate(false));
  return (
    <li
      ref={optionsRef}
      className=" absolute z-50 bg-slate-300 sm:gap-y-1 md:gap-y-2 lg:gap-y-3 px-3 py-4 lg:text-base md:text-sm sm:text-xs whitespace-nowrap text-slate-700 font-semibold flex sm:w-[22%] md:w-[20%] lg:w-[22%] xl:w-[20%] top-[12%] sm:right-[16%] md:right-[14%] lg:right-[15%] xl:right-[6%] rounded-lg shadow-lg shadow-slate-600 flex-col justify-center items-start"
    >
      <Link
        className="hover:bg-gray-600 hover:text-white w-full rounded-lg px-1"
        to="/template"
      >
        نمونه کار طراحی وب
      </Link>
      <Link
        className="hover:bg-gray-600 hover:text-white w-full rounded-lg px-1"
        to="/template/telegram"
      >
        نمونه کار ربات تلگرام
      </Link>
      <Link
        className="hover:bg-gray-600 hover:text-white w-full rounded-lg px-1"
        to="/template/siber"
      >
        نمونه کار امنیت
      </Link>
    </li>
  );
}
