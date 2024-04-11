import { XCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function Modal({ open, setOpen }) {
  if (!open) return null;
  return (
    <div className="w-full transition duration-700 ease-in-out z-30">
      <div
        onClick={() => setOpen(false)}
        className="w-screen h-screen fixed inset-0 backdrop-blur-sm z-40"
      ></div>
      <div className="absolute gap-y-1  top-[0%]  bg-slate-600 py-4 px-2  w-[90%] z-50 p-1  rounded-xl shadow-lg shadow-slate-500 flex flex-col justify-center">
        <div className="flex justify-between pb-3">
          <button onClick={() => setOpen(false)}>
            <XCircleIcon className=" w-5 text-red-500" />
          </button>
        </div>
        <ul className="w-full flex flex-col justify-center items-start text-xs gap-y-3  text-slate-200 font-bold">
          <li>
            <Link onClick={() => setOpen(false)} to="/">
              خــــــــــــــــــــانه
            </Link>
          </li>
         
          <li>
            <Link onClick={() => setOpen(false)} to="/template">
              نمـــــــــــــــــــونه کار  طراحی وب
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpen(false)} to="/template/telegram">
              نمـــــــــــــــــــونه کار  ربات تلگرام
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpen(false)} to="/template/siber">
              نمـــــــــــــــــــونه کار  امنیت
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpen(false)} to="/team">
             تــــــــــــــیـــم دژ کامــــیونیتی
            </Link>
          </li>
          <li>دربـــــــــــــــــــــاره ما</li>
          <li>تمـــــــــــاس با ما</li>
        </ul>
      </div>
    </div>
  );
}

export default Modal;
