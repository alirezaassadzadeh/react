import { useState } from "react";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";

export default function Rules() {
  return (
    <div className="w-full max-w-3xl mx-auto px-2 py-16 sm:px-0 ">
      <Tab.Group defaultIndex={0}>
        <Tab.List className="flex flex-row md:gap-8 w-fit transition-all">
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={
                  selected
                    ? "mx-1 mr-1 sm:mr-5   bg-orange-500 p-2 rounded-t-2xl scale-110 font-semibold  shadow-lg shadow-slate-400"
                    : "mx-1 mr-1 sm:mr-5 bg-slate-800 p-2 text-white font-semibold rounded-t-2xl"
                }
              >
                قوانین کلی
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={
                  selected
                    ? "mx-1 bg-orange-500 p-2 rounded-t-2xl scale-110 font-semibold shadow-lg shadow-slate-400"
                    : "mx-1  bg-slate-800 p-2 text-white font-semibold rounded-t-2xl"
                }
              >
                وبسایت ها
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={
                  selected
                    ? "mx-1 bg-orange-500 p-2 rounded-t-2xl scale-110 font-semibold shadow-lg shadow-slate-400"
                    : "mx-1  bg-slate-800 p-2 text-white font-semibold rounded-t-2xl"
                }
              >
                گروه ها
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={
                  selected
                    ? "mx-1 bg-orange-500 p-2 rounded-t-2xl scale-110 font-semibold shadow-lg shadow-slate-400"
                    : "mx-1  bg-slate-800 p-2 text-white font-semibold rounded-t-2xl"
                }
              >
                ربات ها
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={
                  selected
                    ? "mx-1  bg-orange-500 p-2 rounded-t-2xl scale-110 font-semibold shadow-lg shadow-slate-400"
                    : "mx-1  bg-slate-800 p-2 text-white font-semibold rounded-t-2xl"
                }
              >
               سافت اسپید
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels className="bg-slate-400 w-full h-96 overflow-y-auto rounded-2xl  pt-6 px-5 border-2 border-slate-800 shadow-lg shadow-slate-400 custom-scroll ">
          <Tab.Panel>
            <p className="py-2">
              کاربران گرامی، هرگونه فعالیت شما که مرتبط با سرویس‌های مجموعه
              سافت اسپید می‌باشد به منزله پذیرفتن قوانین مجموعه است، بنابراین
              لطفاً جهت استفاده از سرویس‌های مجموعه، موارد ذکر شده را با دقت
              مطالعه فرمایید.
            </p>
            <p className="py-2">
              از آنجایی که مجموعه سافت اسپید تحت قوانین جمهوری اسلامی ایران فعالیت
              می‌کند، هرگونه تخلف از مفاد ذکر شده در قوانین جرائم رایانه‌ای و
              قوانین جمهوری اسلامی ایران منجر به غیرفعال شدن حساب کاربری و
              مسدود‌سازی آن‌ از تمام سرویس‌های سافت اسپید می‌شود.
            </p>
            <h1 className="py-2 font-sansBold text-xl ">
             توافقنامه و قوانین استفاده از سرویس‌های سافت اسپید
            </h1>
            <h2 className="py-2 font-sansBold text-md">قوانین حساب کاربری</h2>
            <div className="rule-list">
              <ul>
                <li>
                  برای استفاده از بعضی ویژگی‌هایی که سرویس‌های سافت اسپید ارائه
                  می‌دهند، داشتن حساب کاربری ضروری است. بنابراین لازم است ابتدا
                  یک حساب کاربری ایجاد کنید که داشتن یک حساب کاربری ملزم به
                  رعایت قوانین زیر می‌باشد:
                </li>
                <li>حداقل سن مجاز برای ساخت حساب کاربری 13 سال می‌باشد.</li>
                <li>
                  کلیه کاربران موظف به ارائه صحیح اطلاعات هویتی خود هستند و
                  هرگونه حساب کاربری با اطلاعات جعلی مسدود خواهد شد.
                </li>
                <li>
                  کاربران موظف هستند که از به ارائه گذاشتن اطلاعات حساب‌کاربری
                  خود به اشخاص ثالث خودداری کنند.
                </li>
                <li>
                  هر حساب کاربری تنها مجاز است توسط یک شخص استفاده شود. در صورت
                  استفاده بیش از یک شخص از یک حساب‌کاربری، حساب مربوطه به طور
                  دائم مسدود خواهد شد.
                </li>
                <li>
                  استفاده از هرگونه نام جعلی یا ایمیل نامعتبر در جهت سؤ
                  استفاده‌های احتمالی یا نقض حقوق اشخاص دیگر موجب مسدود شدن حساب
                  کاربری می‌گردد.
                </li>
                <li>
                  همچنین با ایجاد حساب کاربری، امکان حذف حساب کاربری در آینده
                  توسط شما وجود نخواهد داشت و صرفاً در شرایط خاص و با صلاح‌دید
                  پشتیبانی سافت اسپید این امر امکان پذیر خواهد بود.
                </li>
              </ul>
            </div>
            <h2 className="py-2 font-sansBold text-md">
              سیاست های رعایت حریم خصوصی
            </h2>
            <p className="py-2">
              سافت اسپید متعهد می‏‌شود از حریم خصوصی کاربران محافظت کند و اطلاعاتی
              که از کاربر در روند عضویت دریافت می‌شود، محفوظ بماند و در اختیار
              شخص حقیقی یا حقوقی ثالث قرار نگیرد، به جز در مواردی که به درخواست
              قانون و مراجع ذی صلاح الزام آور باشد، یا در صورتی که از کاربر
              شکایت شده و یا کاربر عمل خلاف قانون انجام دهد.
            </p>
            <h2 className="py-2 font-sansBold text-md">حق مالکیت فکری</h2>
            <p className="py-2">
              تمام محتوای استفاده و منتشر شده در سایت‌ها، ربات‌ها و شبکه‌های
              اجتماعی سافت اسپید مانند لوگو، تصاویر، پست‌ها، پادکست‌ها، سورس‌کدها،
              ویدیوها و غیره متعلق به مجموعه سافت اسپید است و بدون موافقت
              سافت اسپید، هرگونه استفاده، کپی و اقداماتی مشابه آن مجاز نمی‌باشد.
            </p>
            <h2 className="py-2 font-sansBold text-md">
              اعلام نظر نقد یا پیشنهاد
            </h2>
            <p className="py-2">
              شما می‌توانید انتقادات و پیشنهادات خود را در سرویس گزارش مشکلات
              سافت اسپید طبق قوانین زیر مطرح کنید:
            </p>
            <div className="rule-list">
              <ul>
                <li>
                  از ارسال هرگونه دیدگاه و یا مطلبی که شامل محتوای مجرمانه یا
                  بی‌‌احترامی است خودداری کنید.
                </li>
                <li>
                  قبل از ثبت انتقادات و پیشنهادات مطمئن شوید موردی که می‌خواهید
                  ذکر کنید از قبل وجود نداشته باشد.
                </li>
                <li>
                  انتقادات و پیشنهادات شما نباید دربرگیردنده اطلاعات شخصی یا
                  حساس افراد ثالث باشد.
                </li>
                <li>
                  نوشتن دیدگاه و مطلب به زبان فارسی الزامی می‌باشد و بدین منظور
                  لازم است از کیبورد فارسی استفاده کنید و تنها نظرات که با حروف
                  و زبان فارسی نوشته شده باشند، امکان نمایش دارند، لذا از نوشتن
                  با حروف انگلیسی خودداری کنید.همچنین بهتر است از فضای خالی
                  (Space) بیش از حد معمول، کشیدن حروف یا کلمات، استفاده‌ مکرر از
                  یک حرف یا کلمه، شکلک و ایموجی و فونت‌های خاص در متن خودداری
                  کنید
                </li>
                <li>
                  برای انتقادات و پیشنهادات خود عنوانی متناسب با متن انتخاب کنید
                  و تا حد امکان از طولانی کردن عنوان خودداری کنید.
                </li>
                <li>
                  انتقادات و پیشنهادات شما نباید جنبه تبلیغاتی داشته باشد.
                </li>
                <li>
                  جهت احترام‌گذاشتن به وقت بازدیدکنندگان و پشتیبان سرویس گزارش
                  مشکلات ، لازم است هنگام نوشتن انتقادات و پیشنهادات، مطالب
                  غیرضروری را حذف کرده و فقط مطالب ضروری و مفید را منتشر کنید که
                  به بهتر شدن مجموعه کمک می‌کند و به منظور برقراری تعامل و
                  ارتباط سازنده فقط مطالب مفید را منتشر کنید که به بهتر شدن
                  مجموعه کمک می کند. لذا از طرح نظرات شخص، جانبدارانه، خارج از
                  چهارچوب و به دور از واقعیت خودداری کنید.
                </li>
                <li>
                  انتقادات و پیشنهادات شما نباید با عرف جامعه مغایر باشد مثل
                  استفاده از الفاظ رکیک و توهین آمیز مجاز نمی‌باشد.
                </li>
                <li>
                  {" "}
                  انتقادات و پیشنهادات شما نباید حاوی بدافزار، جاسوس‌افزار و
                  موارد مشابه باشد.
                </li>
                <li>
                  هرگونه توهین به اشخاص ثالث و تجاوز به حریم خصوصی آن‌ها مجاز
                  نمی‌باشد.
                </li>
                <li>
                  هرگونه نشر محتوا برخلاف قوانین جمهوری اسلامی ایران و یا خلاف
                  قوانین جرایم اینترنتی مجاز نمی‌باشد.
                </li>
                <li>
                  هرگونه اهانت و توهین به دست اندرکاران سافت اسپید ممنوع می‌باشد
                  بدیهی است که در صورت تخلف حساب کاربر مسدود خواهد شد.
                </li>
              </ul>
            </div>
            <h2 className="py-2 font-sansBold text-md">
              بدیهی است که سافت اسپید این حق را دارد دیدگاه و مطالبی که بر خلاف
              قوانین است را حذف کند.
            </h2>
            <h2 className="py-2 font-sansBold text-md">حقوق مالکیت معنوی</h2>
            <p className="py-2">
              کاربران با ارسال نظرات، پیشنهادات، ایده‌ها و هرگونه محتوا برای هر
              یک از سرویس‌های سافت اسپید، به ما مجوز استفاده از آن برای نشر و به
              اشتراک‌گذاری و استفاده دیگر را خواهند داد در نتیجه کلیه محتوای
              ارسال شده جزئی از اموال مجموعه سافت اسپید خواهد بود و حق استفاده و
              نشر تمامی مطالب در انحصار مجموعه سافت اسپید خواهد بود.
            </p>
            <p className="py-2">
              وب‌سایت‌ها، ربات‌ها و کلیه مطالب مجموعه مانند محتوای متنی، صوتی،
              ویدیویی و ... ، متعلق به سافت اسپید می‌باشد و رعایت قانون کپی‌رایت
              جمهوری اسلامی ایران اجباری است.
            </p>
            <h2 className="py-2 font-sansBold text-md">نظارت بر محتوا</h2>
            <p className="py-2">
              دولوپیکس این حق را دارد که محتواهای دریافتی از کاربران را در صورت
              عدم رعایت قوانین اعلام شده، ویرایش و یا حذف کند چرا که هدف
              سافت اسپید ارائه محتوای سالم و مفید است.
            </p>
            <h2 className="py-2 font-sansBold text-md">تغییرات</h2>
            <p className="py-2">
              با توجه با آن که ممکن است بر اساس نیاز بخشی‌هایی از قوانین را
              تغییر یابد و یا حذف یا بندهایی به آن اضافه شود کاربر موظف است پس
              از بروزرسانی قوانین آن را مطالعه کند چرا که ادامه فعالیت کاربر بعد
              از آن به منزله موافقت با قوانین جدید و تبعیت از آن می‌باشد.
            </p>
            <h2 className="py-2 mb-5 font-sansBold text-md">
              در صورت عدم توجه و رعایت قوانین جدید، سافت اسپید این حق را دارد حساب
              شما را مسدود کند.
            </h2>
          </Tab.Panel>
          <Tab.Panel>
            <p className="py-2">
              کاربران گرامی هرگونه فعالیت شما در ارتباط با وب‌سایت‌های مجموعه
              سافت اسپید به منزله پذیرفتن قوانین وب‌سایت‌ها می‌باشد، بنابراین لطفا
              موارد ذکر شده را جهت استفاده از وب‌سایت‌‌های سافت اسپید با دقت
              مطالعه فرمایید.
            </p>
            <p className="py-2">
              لازم به ذکر است قبل از مطالعه بندهای قوانین وب‌سایت‌ها، کاربران
              موظف هستند ابتدا قوانین کلی را مطالعه کنند و با آن موافقت کنند و
              سپس به قوانین وب‌سایت‌ها مراجعه کنند.
            </p>
            <h1 className="py-2 font-sansBold text-xl ">
              توافقنامه و قوانین استفاده از وب‌سایت‌های سافت اسپید
            </h1>
            <div className="rule-list">
              <ul>
                <li>
                  هرگونه اقدام مخربی در جهت آسیب رساندن به وب‌سایت‌ها مجاز
                  نمی‌باشد و در صورت اقدام به آن کاربر به طور دائمی مسدود می‌شود
                  و پیگیری قضایی با توجه به تخلف صورت گرفته انجام خواهد شد.
                </li>
                <li>
                  کاربران با ارسال نظرات، ایده‌ها و هرگونه محتوا برای هر یک از
                  وب‌سایت‌های سافت اسپید، به ما مجوز استفاده از آن برای
                  نشر،بازنشر، به اشتراک‌گذاری و استفاده دیگر را خواهند داد.
                </li>
                <li>
                  سافت اسپید متعهد می‏‌شود از اطلاعات و حریم شخصی کاربران محافظت
                  کنند و از در اختیار گذاشتن آن‌ها برای شخص حقیقی یا حقوقی ثالث
                  خودداری کند، به جز در مواردی که به درخواست قانون و مراجع ذی
                  صلاح الزام آور باشد، یا در صورتی که از کاربر شکایت شده و یا
                  کاربر عمل خلاف قانون انجام دهد.
                </li>
                <li>
                  سافت اسپید این حق را دارد که محتواهای دریافتی از کاربران را در
                  صورت عدم رعایت قوانین اعلام شده، ویرایش و یا حذف کند.
                </li>
              </ul>
            </div>
            <h2 className="py-2 mb-5 font-sansBold text-md">
              قوانین دیدگاه‌ها در وب‌سایت‌‌‌ها
            </h2>
            <p className="py-2">
              شما می‌توانید دیدگاه‌های خود را در وب‌سایت‌های مجموعه سافت اسپید طبق
              قوانین زیر مطرح کنید:
            </p>
            <div className="rule-list">
              <ul>
                <li>
                  از ارسال هرگونه دیدگاه که شامل محتوای مجرمانه و بی‌‌احترامی
                  است خودداری کنید.
                </li>
                <li>
                  نوشتن دیدگاه و مطلب به زبان فارسی الزامی می‌باشد و بدین منظور
                  کاربر موظف است از کیبورد فارسی استفاده کند و تنها نظرات که با
                  حروف و زبان فارسی نوشته شده باشند، امکان نمایش دارند، لذا از
                  نوشتن با حروف انگلیسی خودداری کنید.همچنین بهتر است از فضای
                  خالی (Space) بیش از حد معمول، کشیدن حروف یا کلمات، استفاده‌
                  مکرر از یک حرف یا کلمه، شکلک و ایموجی و فونت‌های خاص در متن
                  خودداری کنید.
                </li>
                <li>
                  قبل از ثبت دیدگاه مطمئن شوید موردی که می‌خواهید ذکر کنید از
                  قبل وجود نداشته باشد.
                </li>
                <li>
                  دیدگاه‌های شما نباید با عرف جامعه مغایر باشد مثل استفاده از
                  الفاظ رکیک و توهین آمیز مجاز نمی‌باشد.
                </li>
                <li>دیدگاه‌های شما نباید جنبه تبلیغاتی داشته باشد.</li>
                <li>
                  هرگونه توهین به اشخاص ثالث و تجاوز به حریم خصوصی آن‌ها مجاز
                  نمی‌باشد.
                </li>
                <li>
                  هرگونه دیگاه برخلاف قوانین جمهوری اسلامی ایران و یا خلاف
                  قوانین جرایم اینترنتی مجاز نمی‌باشد.
                </li>
                <li>
                  سافت اسپید این حق را دارد که دیدگاه‌های دریافتی از کاربران را در
                  صورت عدم رعایت قوانین اعلام شده، ویرایش و یا حذف کند.
                </li>
                <li>
                  از طرح سخنانی که حساسیت سیاسی و مذهبی دارند خودداری کنید.
                </li>
                <li>
                  لازم است نظرات خود را با رعایت اصول اولیه نگارشی ثبت کرده و از
                  کوتاه کردن کلمات یا استفاده ادبیات محاوره خودداری کنید
                </li>
                <li>
                  مطالبی را بیان کنید که برای بازدیدکنندگان سایت مفید باشد و از
                  بیان هرگونه مطلب شخصی، غیر مرتبط و یا غیر ضروری خودداری کنید.
                </li>
                <li>
                  قسمت دیدگاه‌ها برای طرح مطالب مفید و سازنده می‌باشد، لذا از
                  گفت‌و‌گوهای غیرمرتبط با سایر کاربران در این قسمت خودداری کنید.
                </li>
              </ul>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <p className="py-2">
              برای عضویت و فعالیت در گروه‌های سافت اسپید تمامی کاربران ملزم به
              رعایت قوانین زیر می‌باشند و هرگونه عملی در جهت نقض قوانین ذکر شده
              باعث محدود شدن کاربر می‌شود. بدیهی است که میزان و مدت محدودسازی
              کاربران وابسته به میزان تخلف صورت گرفته می‌باشد.
            </p>
            <p className="py-2">
              لازم به ذکر است قبل از مطالعه بندهای قوانین گروه‌ها، کاربران موظف
              هستند ابتدا قوانین کلی را مطالعه کنند و با آن موافقت کنند و سپس به
              قوانین گروه‌ها مراجعه کنند.
            </p>
            <h1 className="py-2 font-sansBold text-xl ">
              توافق‌نامه و قوانین استفاده از گروه‌های سافت اسپید
            </h1>
            <div className="rule-list">
              <ul>
                <li>
                  کلیه کاربران موظف هستند طبق قوانین جمهوری اسلام ایران فعالیت
                  کنند.
                </li>
                <li>
                  کلیه کاربران موظف هستند حوزه فعالیت گروه‌ها را حفظ کنند و از
                  گفتگو در رابطه با سایر موضوعات خارج از موضوع گروه خودداری
                  کنند.
                </li>
                <li>
                  کلیه کاربران موظف هستند نهایت ادب را رعایت کرده و از توهین و
                  اهانت خودداری کنند.
                </li>
                <li>انجام هرگونه اعمال مخرب توسط کاربر ممنوع می‌باشد.</li>
                <li>
                  کلیه کاربران موظف هستند از انجام تبلیغات بدون هماهنگی با واحد
                  تبلیغات سافت اسپید خودداری کنند.
                </li>
                <li>
                  مجموعه سافت اسپید هیچگونه مسئولیت و ضمانتی بابت قراردادها و
                  پروژه‌های انجام شده در گروه‌ها ندارد و هیچ‌گونه فعالیت
                  واسطه‌گری یا معرفی کارفرما یا پروژه را انجام نمی‌دهد، هرگونه
                  فعالیت مشابه وابسته به آگاهی و اعتماد و توافق بین طرفین
                  می‌باشد، تنها توصیه ما این است که قبل از هرگونه فعالیت،
                  قرارداد رسمی و مکتوب تنظیم شود.
                </li>
              </ul>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <p className="py-2">
              کاربران گرامی هرگونه فعالیت شما در ارتباط با ربات‌های مجموعه
              سافت اسپید به منزله پذیرفتن قوانین ربات‌ها می‌باشد، بنابراین لطفا
              موارد ذکر شده را جهت استفاده از وب‌سایت‌‌های سافت اسپید با دقت
              مطالعه فرمایید.
            </p>
            <p className="py-2">
              لازم به ذکر است قبل از مطالعه بندهای قوانین ربات‌ها، کاربران موظف
              هستند ابتدا قوانین کلی را مطالعه کنند و با آن موافقت کنند و سپس به
              قوانین ربات‌ها مراجعه کنند.
            </p>
            <h1 className="py-2 font-sansBold text-xl ">
              توافق‌نامه و قوانین استفاده از ربات‌های سافت اسپید
            </h1>
            <div className="rule-list">
              <ul>
                <li>
                  هرگونه اقدام مخرب در جهت آسیب رساندن به ربات‌ها مجاز نمی‌باشد
                  و در صورت تخلف کاربر به طور دائم مسدود می‌شود و یا توجه به
                  تخلف صورت گرفته پیگیری قانونی خواهد داشت.
                </li>
                <li>
                  کلیه ربات‌های مجموعه سافت اسپید و مطالب آن شامل محتواهای متنی،
                  سورس‌کد، تصاویر و ... ، متعلق به سافت اسپید می‌باشد و رعایت
                  قانون کپی رایت جمهوری اسلامی ایران اجباری است.
                </li>
                <li>
                  کاربران با ارسال نظرات، پیشنهادات، ایده‌ها و هرگونه محتوا برای
                  هر یک از سرویس‌های سافت اسپید، به ما مجوز استفاده از آن برای نشر
                  و به اشتراک‌گذاری و استفاده دیگر را خواهند داد در نتیجه کلیه
                  محتوای ارسال شده جزئی از اموال مجموعه سافت اسپید خواهد بود و حق
                  استفاده و نشر تمامی مطالب در انحصار مجموعه سافت اسپید خواهد بود.
                </li>
                <li>
                  کاربران حق استفاده از ربات‌ها را در مواردی که خلاف قوانین و
                  مقررات جمهوری اسلامی ایران باشد را ندارند.
                </li>
              </ul>
            </div>
          </Tab.Panel>
          <Tab.Panel>
          <p className="py-2">
          این بخش به‌زودی تکمیل می‌شود
            </p>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
