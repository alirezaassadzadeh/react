import { Link, Outlet } from "react-router-dom";
import AppLayout from "./AppLayout/AppLayout";
import DezhGroup from "./DezhGroup";
import Production from "./Production";
import Products from "./Products";
import ImageCarousel from "./ImageCarousel";


function Main() {
  
  return (
    <div>
      <DezhGroup />
      <Production />
      <ImageCarousel/>
      {/* <Outlet /> */}
      <Products />
      <Template />
    </div>
  );
}

export default Main;

function Template() {
  return (
    <div className="w-full my-24 sm:my-28 md:my-32 lg:my-36 xl:my-40 ">
      <div className="w-full flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-[40%] w-full max-w-xs px-8 md:px-2">
          <img src="/src/assets/devlogo_g3p0.png" alt="" />
        </div>
        <div className="md:w-[60%] w-full">
          <h1 className="w-full text-center my-2 sm:my-3 md:my-4 lg:my-5 xl:my-6 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-yellow-500">
            جامعه سافت اسپید
          </h1>
          <p className="w-full text-justify text-sm sm:text-base md:text-lg lg:text-xl mt-2 sm:mt-4 md:mt-5 lg:mt-6 xl:mt-7 text-slate-300 px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8">
            سافت اسپید یک جامعه بزرگ برای افراد اهل فن است، کسانی که در
            حوزه‌های مرتبط با تکنولوژی فعالیت دارند می‌توانند عضو این اجتماع
            شوند. در واقع حساب سافت اسپید شما، شناسه شما در سرویس‌های ارائه
            شده توسط سافت اسپید می‌باشد. با یک‌بار عضویت در جامعه دژ کامیوتینی
            می‌توانید از تمامی خدمات سرویس‌های زیرمجموعه سافت اسپید از جمله
            جت‌لرن، کُدیلو، رونیو و دی‌پی‌اکس و … استفاده نمایید.
          </p>
          <a
            href="#"
            className="w-full h-auto flex justify-center items-center mt-5 sm:mt-6 md:mt-7 lg:mt-8 xl:mt-9 font-bold text-white"
          >
            <div className="w-full flex justify-center  md:justify-end items-center pl-4 sm:pl-5 md:pl-6 lg:pl-7 xl:pl-8">
              <button className="rounded-lg bg-yellow-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl hover:bg-yellow-800 px-4 py-2 sm:px-5 sm:py-2">
              عضویت در سافت اسپید
              </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
