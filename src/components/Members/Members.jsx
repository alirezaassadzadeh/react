import { members } from "../../../data/data";

function Members() {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center px-2 sm:px-3 md:px-4 lg:px-5  mb-10">
      <div className="w-full bg-slate-900  grid md:grid-cols-4 grid-cols-2  gap-x-6 sm:gap-x-7 md:gap-x-8 lg:gap-x-9 gap-y-5 sm:gap-y-6 md:gap-y-7 lg:gap-y-8         justify-center items-center rounded-lg  text-white  px-2 sm:px-3 md:px-4 lg:px-5 py-4 sm:py-5 md:py-6 lg:py-7">
        {members.map((member) => {
          return (
            <div className="w-full flex flex-col hover:bg-slate-700 justify-center items-center border-[4px] border-blue-400 border-dashed  rounded-lg" key={member.id}>
              <div className="w-full h-[60%]  p-4 md:p-5 lg:p-12 ">
                <img className="w-[100%]  object-contain rounded-full shadow-md shadow-blue-400 border-[4px] border-blue-300" src={member.image} alt="" />
              </div>
              <div className="w-full h-[40%] flex flex-col justify-center items-center pb-2 sm:pb-3 md:pb-4 lg:pb-5 text-sm sm:text-base  lg:text-xl xl:text-2xl">
                <p className="font-bold  sm:pb-1 md:pb-2 lg:pb-3">{member.name}</p>
                <p className="text-slate-300 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">{member.job}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Members;
