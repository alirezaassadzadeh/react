import {
  BugAntIcon,
  CalendarDaysIcon,
  CalendarIcon,
  ChevronLeftIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { hunter } from "../../data/data";
import { GiBowman } from "react-icons/gi";
import { FaBug } from "react-icons/fa";
function SecurityTemplate() {
  return (
    <div className="w-full mt-10 sm:mt-12 md:mt-14 lg:mt-16 xl:mt-18">
      <div className="w-full px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7">
        <div  className="w-full flex justify-start items-center py-4 my-4 bg-slate-900  shadow-sm shadow-slate-400 rounded-lg pr-4">
          <div className="pl-6">
            <FaBug className="w-12 h-12 text-yellow-500" />
          </div>
          <div>
            <h1 className="text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
              گزارش های شکار
            </h1>
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl pt-1 md:pt-2">
              فهرست آسیب پذیری های کشف شده
            </p>
          </div>
        </div>
      </div>
      <div className="w-full  mb-10 sm:mb-14 md:mb-20 lg:mb-24 xl:mb-28 ">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-col-4 xl:grid-cols-4  justify-center items-center gap-x-3 sm:gap-x-4 md:gap-x-6 gap-y-6 px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7">
          {hunter.map((item) => {
            return (
              <div
                key={item.id}
                className="w-full bg-slate-900 text-white rounded-lg flex flex-col justify-center items-start pt-2 sm:pt-3 md:pt-3 lg:pt-4 xl:pt-4 shadow-sm shadow-slate-400"
              >
                <div className="w-full text-start flex flex-col justify-center items-start px-4 sm:px-5 md:px-6 lg:px-5 xl:px-6 py-3 md:py-5">
                  <div className="w-full flex justify-start items-center gap-x-1 mb-1">
                    <span>
                      <BugAntIcon className="w-5" />
                    </span>
                    <h1 className="lg:text-lg font-bold">{item.name}</h1>
                  </div>
                  <p className="blur my-2">{item.desc_blur}</p>
                </div>
                <div className="w-full flex justify-between items-center bg-slate-700 py-1 sm:py-2 md:py-3 lg:py-4 px-3 md:px-2">
                  <div className="w-[80%] items-center justify-start flex whitespace-nowrap">
                    <div className="xl:text-sm lg:text-base text-lg pl-2 text-slate-300">
                      {item.name_state}
                    </div>
                    <div className="lg:text-base font-semibold">
                      {item.state}
                    </div>
                  </div>
                  <div className="w-[20%] bg-red-500 px-2 py-0.5 rounded-xl text-center">
                    غیرفعال
                  </div>
                </div>
                <div className="w-full flex flex-col justify-center items-start px-4 sm:px-5 md:px-6 lg:px-5 xl:px-6 py-3 md:py-4">
                  <div className="w-full flex justify-between py-1 items-center">
                    <span className="w-full flex justify-start items-center gap-x-1 text-slate-400">
                      <GiBowman className="w-6 h-6 text-amber-600" />
                      {item.hunter}
                    </span>
                    <span className="w-full flex justify-start items-center gap-x-1 text-blue-400 cursor-pointer">
                      <UserCircleIcon className="w-5 text-green-600" />
                      {item.name_id}
                    </span>
                  </div>
                  <div className="w-full flex justify-between py-1 items-center">
                    <span className="w-full flex justify-start items-center gap-x-1 text-slate-400">
                      <CalendarDaysIcon className="w-6 text-blue-600" />
                      {item.name_date}
                    </span>
                    <span className="w-full">{item.date}</span>
                  </div>
                  <div className="w-full flex justify-between py-1 items-center">
                    <span className="w-full flex justify-start items-center gap-x-1 text-slate-400">
                      <CalendarDaysIcon className="w-6 text-green-400" />
                      {item.name_date_update}
                    </span>
                    <span className="w-full">{item.date_update}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SecurityTemplate;

// function SecurityTemplate() {
//   return (
//     <div className="w-full mb-10 sm:mb-14 md:mb-20 lg:mb-24 xl:mb-28 mt-5 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14">
//       <div className="w-full bg-slate-800 px-4 sm:px-5 md:px-6 lg:px-6 flex flex-col justify-center items-center ">
//         <div className="w-full flex flex-col justify-center items-center h-auto mb-8 sm:mb-12 md:mb-14 lg:mb-16">
//           <h1 className="w-full text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-slate-100 text-center font-bold py-4">
//             نمونه کار طراحی امنیت
//           </h1>
//           <p className="w-full text-slate-300 py-3 sm:py-4 md:py-5 lg:py-6 text-sm sm:text-base md:text-lg lg:text-xl text-justify">
//             وبسایت‌های طراحی شده توسط تیم سافت اسپید به‌صورت اختصاصی طراحی و
//             کدنویسی می‌شوند و ابزار‌های مورد استفاده در پروژه با توجه به
//             نیازسنجی‌های پروژه انتخاب می‌شوند
//           </p>
//         </div>
//         <div className="w-full">
//           <div className="w-full grid lg:px-32 md:px-16 sm:px-12  grid-cols-1 md:grid-cols-2 justify-center items-center gap-x-4 sm:gap-x-5 md:gap-x-6 lg:gap-x-8 gap-y-6 sm:gap-y-7 md:gap-y-8 lg:gap-y-9 rounded-lg">
//             {security.map((template) => {
//               return (
//                 <div
//                   className="w-full  flex justify-center items-center bg-slate-600 rounded-lg"
//                   key={template.id}
//                 >
//                   <div className="w-full justify-center items-center flex flex-col opacity-[0.6] hover:opacity-[1] cursor-pointer">
//                     <img
//                       className="w-full rounded-t-lg"
//                       src={template.image}
//                       alt={template.name}
//                     />
//                     <h3 className="w-full text-center font-bold py-2 sm:py-3 md:py-4 lg:py-5 xl:py-6 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white">
//                       {template.name}
//                     </h3>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
