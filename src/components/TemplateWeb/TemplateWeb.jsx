import { templates } from "../../../data/data";
import "atropos/css/min";
import Atropos from "atropos/react";

function TemplateWeb() {
  return (
    <div className="w-full mb-10 sm:mb-14 md:mb-20 lg:mb-24 xl:mb-28 mt-5 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14 rounded-xl">
      <div className="w-full bg-slate-800 px-4 sm:px-5 md:px-6 lg:px-6 flex flex-col justify-center items-center rounded-xl ">
        <div className="w-full flex flex-col justify-center items-center h-auto mb-8 sm:mb-12 md:mb-14 lg:mb-16">
          <h1 className="w-full text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-slate-100 text-center font-bold py-4">
            نمونه کار طراحی وب
          </h1>
          <p className="w-full text-slate-300 py-3 sm:py-4 md:py-5 lg:py-6 text-sm sm:text-base md:text-lg lg:text-xl text-justify">
            وبسایت‌های طراحی شده توسط تیم سافت اسپید به‌صورت اختصاصی طراحی و
            کدنویسی می‌شوند و ابزار‌های مورد استفاده در پروژه با توجه به
            نیازسنجی‌های پروژه انتخاب می‌شوند و پشتیبانی ان نیز بر عهده خودمان
            هست
          </p>
        </div>
        <div className="w-full ">
          <div className="w-full grid lg:px-32 md:px-16 sm:px-12  grid-cols-1 md:grid-cols-2 justify-center items-center gap-x-4 sm:gap-x-5 md:gap-x-6 lg:gap-x-8 gap-y-6 sm:gap-y-7 md:gap-y-8 lg:gap-y-9 rounded-lg">
            {templates.map((template) => {
              return (
                <Atropos
                  shadowScale={0.8}
                  className="cursor-pointer"
                  highlight={false}
                  key={template.id}
                >
                  <div className="w-full  flex justify-center items-center  rounded-lg border border-sky-300">
                    <div className="w-full justify-center items-center flex flex-col  cursor-pointer">
                      <img
                        className="w-[90%] mx-auto h-[60%] mt-2 rounded-lg"
                        src={template.image}
                        alt={template.name}
                      />
                      <h3 className="w-full text-center  py-2 sm:py-3 md:py-4 lg:py-5 xl:py-6 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white">
                        {template.name}
                      </h3>
                    </div>
                  </div>
                </Atropos>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateWeb;
