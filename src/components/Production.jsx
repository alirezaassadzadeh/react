import tahlil from '../assets/cycle/tahlil_store_icon.svg'
import tarahi from '../assets/cycle/tarahi_return_icon.svg'
import tosee from '../assets/cycle/tosee_store_icon.svg'
import keyfiat from '../assets/cycle/keyfiat_pick_icon.svg'
import deploy from '../assets/cycle/rocket.svg'
import arze from '../assets/cycle/arze_ship_icon.svg'

function Production() {


  return (
    <div className="w-full border border-sky-400 bg-trans  shadow-lg shadow-slate-600 rounded-md flex flex-col justify-center items-center px-2 sm:px-3 md:px-4 lg:px-5 py-4 md:py-5 lg:py-6 my-4 sm:my-5 md:my-6 lg:my-7 lg:mt-20 production-cycle ">
      <div className="w-full font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center text-slate-100 pb-3 sm:pb-4 md:pb-5 lg:pb-6">
       چرخه تولید نرم افزار در سافت اسپید
      </div>
      <div className="w-full text-sm sm:text-base md:text-lg lg:text-xl text-center text-slate-100 ">
        سافت اسپید همواره تلاش میکند با در نظر گرفتن متخصصین مسیر تولید نرم
        افزار را به صورت اصولی طی کند. <br className="lg:block hidden" /> امنیت
        مهمترین رکن در پای پی می باشد که همواره برای آن ارزش قائل میشود.
      </div>
      <div className="cycle-block text-slate-100 ">
        <div className="cycle-line">
          <div className="cycle-elements">
            <div className="cycle-element ">
              <div className="cycle-img-core">
                <img className="cycle-element-img" src={tahlil} alt='تحلیل نیازمندی'/>
              </div>
              <div> تحلیل نیازمندی ها</div>
            </div>
            <div className="cycle-element">
              <div className="cycle-img-core">
                <img className="cycle-element-img" src={tarahi} alt='طراحی' />
              </div>
              <div> طراحی</div>
            </div>
            <div className="cycle-element">
              <div className="cycle-img-core">
                <img className="cycle-element-img" src={tosee} alt='توسعه' />
              </div>
              <div> توسعه</div>
            </div>
            <div className="cycle-element">
              <div className="cycle-img-core">
                <img className="cycle-element-img" src={keyfiat} alt='کیفیت سنجی' />
              </div>
              <div> کیفیت سنجی</div>
            </div>
            <div className="cycle-element">
              <div className="cycle-img-core">
                <img className="cycle-element-img" src={deploy} alt='دیپلوی' />
              </div>
              <div>دیپلوی</div>
            </div>
            <div className="cycle-element">
              <div className="cycle-img-core">
                <img className="cycle-element-img" src={arze} alt='عرضه' />
              </div>
              <div> عرضه</div>
            </div>
          </div>
          <div className="cycle-elements">
          <div className="cycle-element">
              <div className="cycle-img-core">
                <img className="cycle-element-img" src={tahlil} alt='تحلیل نیازمندی'/>
              </div>
              <div> تحلیل نیازمندی ها</div>
            </div>
            <div className="cycle-element">
              <div className="cycle-img-core">
                <img className="cycle-element-img" src={tarahi} alt='طراحی' />
              </div>
              <div> طراحی</div>
            </div>
            <div className="cycle-element">
              <div className="cycle-img-core">
                <img className="cycle-element-img" src={tosee} alt='توسعه' />
              </div>
              <div> توسعه</div>
            </div>
            <div className="cycle-element">
              <div className="cycle-img-core">
                <img className="cycle-element-img" src={keyfiat} alt='کیفیت سنجی' />
              </div>
              <div> کیفیت سنجی</div>
            </div>
            <div className="cycle-element">
              <div className="cycle-img-core">
                <img className="cycle-element-img" src={deploy} alt='دیپلوی' />
              </div>
              <div>دیپلوی</div>
            </div>
            <div className="cycle-element">
              <div className="cycle-img-core">
                <img className="cycle-element-img" src={arze} alt='عرضه' />
              </div>
              <div> عرضه</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Production;
