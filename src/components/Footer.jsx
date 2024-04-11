import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt";
import { FaRegEnvelope } from "@react-icons/all-files/fa/FaRegEnvelope";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaTelegram } from "@react-icons/all-files/fa/FaTelegram";
import { NavLink } from "react-router-dom";
import logo from "./../assets/devlogo_g3p0.png"; // Import the logo image

function Footer() {
  return (
    <div className="w-full h-auto flex justify-center flex-col items-center border border-sky-400 bg-trans  shadow-lg shadow-slate-600 mb-6 sm:mb-8 md:mb-10 lg:mb-12 rounded-lg px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 mt-10 sm:mt-12 md:mt-14 lg:mt-16">
      <div className="w-full flex flex-col justify-center items-center ">
      <h1 className="w-full text-white font-bold font-sans text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center pb-3 sm:pb-4 md:pb-5 lg:pb-6">
        تماس با ما
        <span className="block w-20 h-1 bg-white mx-auto mt-2"></span>
      </h1>
        <p className="w-full text-slate-300  text-base md:text-lg lg:text-xl text-justify">
          برای ارتباط با پشتیبانی سافت اسپید می‌توانید از طریق راه‌های ارتباطی زیر
          اقدام به تماس فرمایید، پشتیبانان ما در سافت اسپید آماده پاسخگویی به
          سوالات شما و دریافت سفارشات پروژه‌های شما هستند. چنانچه نیاز به مشاوره
         بیشتر داشته باشید می‌توانید درخواست مشاوره با واحد‌های مختلف سافت اسپید
          را از واحد پشتیبانی درخواست نمایید.
        </p>
      </div>
      <div className="w-full h-auto flex justify-center items-center pt-12 sm:pt-14 md:pt-16 lg:pt-20 xl:pt-24 gap-x-5 sm:gap-x-6 md:gap-x-7 lg:gap-x-8 xl:gap-x-9">
        <a href="https://www.instagram.com" target="_blank">
          <FaInstagram className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:h-12 xl:w-12 text-slate-100" />
        </a>
        <a href="tel:+1234567890" target="_blank">
          <FaPhoneAlt className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:h-12 xl:w-12 text-slate-100" />
        </a>
        <a href="https://github.com" target="_blank">
          <FaGithub className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:h-12 xl:w-12 text-slate-100" />
        </a>
        <a href="mailto:example@example.com" target="_blank">
          <FaRegEnvelope className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:h-12 xl:w-12 text-slate-100" />
        </a>
        <a href="https://t.me" target="_blank">
          <FaTelegram className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:h-12 xl:w-12 text-slate-100" />
        </a>
      </div>
      <div className="w-full flex flex-col justify-center items-center h-auto">
      <h1 className="w-full text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-xl font-bold text-slate-100 py-8 sm:py-9 md:py-11 lg:py-12 xl:py-14">
      <img
            src={logo}
            alt="Logo"
            className="mx-auto w-14"
          />
       طراحی و توسعه : سافت اسپید
      </h1>
        <div className="w-full">
          <ul className="w-full grid grid-cols-3 justify-center items-center text-[8px] sm:text-sm md:text-base lg:text-lg xl:text-xl text-center text-slate-400 gap-x-3 sm:gap-x-4 md:gap-x-5 lg:gap-x-6 xl:gap-x-7 gap-y-2 sm:gap-y-3 md:gap-y-4 lg:gap-y-5 xl:gap-y-6">
            <li className="px-1 py-2 sm:px-2 sm:py-2 md:px-3 md:py-3 lg:px-4 lg:py-3 xl:px-5 xl:py-4 text-slate-100 bg-slate-600 shadow-lg shadow-slate-600 hover:scale-105 transition-all rounded-xl">
              <NavLink to="/member">گزارش مشکل و پیشنهاد</NavLink>
            </li>
            <li className="px-1 py-2 sm:px-2 sm:py-2 md:px-3 md:py-3 lg:px-4 lg:py-3 xl:px-5 xl:py-4 bg-slate-600 shadow-lg shadow-slate-600 text-slate-100 hover:scale-105 transition-all rounded-xl">
              <NavLink end to="/template">
                نمونه کار های طراحی وب
              </NavLink>
            </li>
            <li className="px-1 py-2 sm:px-2 sm:py-2 md:px-3 md:py-3 lg:px-4 lg:py-3 xl:px-5 xl:py-4 bg-slate-600 shadow-lg shadow-slate-600 text-slate-100 hover:scale-105 transition-all rounded-xl">
              <NavLink to="/template/telegram">
                نمونه کار های ربات تلگرام
              </NavLink>
            </li>
            <li className="px-1 py-2 sm:px-2 sm:py-2 md:px-3 md:py-3 lg:px-4 lg:py-3 xl:px-5 xl:py-4 bg-slate-600 shadow-lg shadow-slate-600 text-slate-100 hover:scale-105 transition-all rounded-xl">
              <NavLink to="/template/siber">نمونه کار های امنیت</NavLink>
            </li>
            <li className="px-1 py-2 sm:px-2 sm:py-2 md:px-3 md:py-3 lg:px-4 lg:py-3 xl:px-5 xl:py-4 bg-slate-600 shadow-lg shadow-slate-600 text-slate-100 hover:scale-105 transition-all rounded-xl">
              <NavLink to="/rule">قوانین و مقررات سایت</NavLink>
            </li>
            <li className="px-1 py-2 sm:px-2 sm:py-2 md:px-3 md:py-3 lg:px-4 lg:py-3 xl:px-5 xl:py-4 bg-slate-600 shadow-lg shadow-slate-600 text-slate-100 hover:scale-105 transition-all rounded-xl">
              <NavLink to="/">وضعیت سرویس ها</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
