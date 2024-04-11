function Member() {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center px-2 sm:px-3 md:px-4 lg:px-5  mb-10">
      <div className="w-full bg-slate-900 rounded-lg text-white  px-2 sm:px-3 md:px-4 lg:px-5 py-4 sm:py-5 md:py-6 lg:py-7">
        <div className="w-full flex justify-center items-center flex-col">
          <h2 className="w-full text-center font-bold text-xl md:text-2xl lg:text-3xl pb-5 sm:pb-6 md:pb-7 lg:pb-8 text-yellow-400">
            تیم مجرب
          </h2>
          <p className="text-justify text-sm sm:text-base md:text-lg lg:text-xl px-6 sm:px-6 md:px-7 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-6">
            آژانس سافت اسپید با بهرع گیری از اعضای مجرب و با تجربه در زمینه
            های مختلف کیفیت وو دقت خدمان ارائه شده را تضمین می کند
          </p>
        </div>

        <div className="w-full  flex flex-col md:flex-row md:items-start justify-center items-center h-auto">
          <div className="w-full md:w-1/3 flex flex-col justify-center items-center py-3 pt-5">
            <img
              src="/src/assets/johnidep.jpg"
              alt=""
              className="w-[60%] md:w-[80%] rounded-3xl border-[6px] shadow-md shadow-yellow-300 border-yellow-400"
            />
            <div className="w-full flex flex-col justify-center items-center">
              <h2 className="w-full text-center mt-4 font-bold text-xl sm:text-2xl lg:text-4xl text-yellow-400">
                جانی دپ
              </h2>
              <p className="text-center text-sm sm:text-base  lg:text-xl px-6 sm:px-6 md:px-7 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-6 text-slate-100">
                موسس مجموعه سافت اسپید
              </p>
            </div>
          </div>
          <p className="text-justify w-full md:w-2/3 text-sm sm:text-base  lg:text-xl px-6 sm:px-6 md:px-2 lg:px-3 py-3 sm:py-4 md:py-6 lg:py-8 lg:pl-10 xl:pt-20 ">
            در طی سال‌های زیادی داخل حوزه تکنولوژی و محورهای مرتبط با
            برنامه‌نویسی فعالیت داشتم و عضو تیم‌های مختلفی بوده‌ام، اما تقریبا
            هیچ‌یک از آن‌ها به بقا مورد نظر نرسیدند و تبدیل به تجربیاتی گران‌بها
            و ماندگار برای تشکیل تیم سافت اسپید شدند.
            <br />
            <br />
             سافت اسپید صرفا یک اسم یا برند نیست، بلکه خانواده‌ای است که هرکدام از
            اعضا آن یکی از نمونه‌ترین و برجسته‌ترین افراد در حوزه خود هستند و با
            درخشش در حوزه خود، دایره خانوادگی این مجموعه را تکمیل می‌کنند.
            <br />
            <br />
            در واقع سافت اسپید یک دستاورد است، دستاوردی که از دل تلاش‌های تخصصی یک
            تیم پخته و کاربلد شکفته است.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Member;
