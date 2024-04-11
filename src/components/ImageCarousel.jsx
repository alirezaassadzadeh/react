
import {gallery } from "../../data/data";
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css/bundle';
import {Autoplay ,Navigation , Pagination} from 'swiper/modules'
import { Typography } from "@mui/material";

const ImageCarousel = () => {
  

  return (
    <div className="w-full border text-slate-100 border-sky-300 bg-trans shadow-lg shadow-slate-600  rounded-md  px-2 sm:px-3 md:px-4 lg:px-5 py-4 md:py-5 lg:py-6 my-4 sm:my-5 md:my-6 lg:my-7 lg:mt-20 text-center gallery-wraper">
      <Typography variant="h4" component="h6" sx={{padding : '10px',paddingBottom : '15px'}} > گالری تصاویر</Typography>
      <Swiper
      modules={[Autoplay, Navigation , Pagination ]}
      navigation
      pagination={{ clickable: true }}
      autoplay
      spaceBetween={50}
      slidesPerView={3}
      loop
      

    >
      {gallery.map((img , index)=>{
        return (
        <SwiperSlide key={index}>
            <img src={img.image} alt="" style={{height : '200px', width : '300px'}}/>
            </SwiperSlide>)
      })}
    </Swiper>
    </div>
  );
};

export default ImageCarousel;
