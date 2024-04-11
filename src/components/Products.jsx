import { Link, NavLink } from "react-router-dom";
import { products } from "../../data/data";
function Products() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="w-full text-center font-bold text-md sm:text-xl md:text-2xl lg:text-3xl text-slate-100 pt-9">
        محصولاتی که در سافت اسپید در حال توسعه می باشند
      </h1>
      <div className="w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center items-center px-2 mt-8 gap-y-10 py-6   gap-x-10 md:gap-x-6">
        {products.slice(0, 3).map((product) => {
          return (
            <div
              className="w-full  h-auto flex flex-col justify-around items-center rounded-lg shadow-lg text-white shadow-slate-600  object-cover bg-trans transform hover:scale-105 transition duration-100 ease-in-out "
              key={product.id}
            >
              <img
                className="w-[100%] rounded-t-lg h-64 object-center"
                src={product.image}
                alt={product.name}
              />
              <div className="w-full h-60 sm:h-74 md:h-80  flex justify-center items-center flex-col">
                <h2 className="flex justify-start items-center  w-full font-bold text-slate-100 text-lg md:text-xl pr-6  md:pt-4 lg:pt-5">
                  {product.name}
                </h2>
                <p className="w-full text-start text-slate-100 text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-7 lg:px-8 py-5 sm:py-6 md:py-7 lg:py-8 ">
                  {String(product.description).slice(0, 220)}...
                </p>
              </div>
            </div>
          );
        })}

          <Link to="/products" className="lg:col-span-3" >
        <div className="w-full md:w-auto md:h-52 lg:h-12  lg:col-span-3 md:leading-[208px] lg:leading-10  text-center shadow-lg shadow-slate-600 bg-trans text-slate-100 rounded-lg  hover:scale-105  transition-transform cursor-pointer">
            مشاهده همه محصولات
        </div>
          </Link>
      </div>
    </div>
  );
}

export default Products;
