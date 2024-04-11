import { NavLink } from "react-router-dom";

function AppLayout() {
  return (
    <nav className="w-full flex justify-center items-center md:mt-20 mt-10 mb-6 sm:mb-7 md:mb-8 lg:mb-9">
      <ul className="flex w-full justify-center items-center gap-x-4">
        <li className="bg-slate-900 text-slate-400 px-4 py-2 sm:px-5 sm:py-3 md:px-4 md:py-3 lg:px-5 lg:py-4 text-sm sm:text-base md:text-lg lg:text-xl rounded-md">
          <NavLink end to="/">
            تیم مجرب
          </NavLink>
        </li>
        <li className="bg-slate-900 text-slate-400 px-4 py-2 sm:px-5 sm:py-3 md:px-4 md:py-3 lg:px-5 lg:py-4 text-sm sm:text-base md:text-lg lg:text-xl rounded-md">
          <NavLink to="/member">اعضا تیم</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppLayout;
