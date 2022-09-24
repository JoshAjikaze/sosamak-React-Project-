import React from "react";
import Carousel from "react-bootstrap/Carousel";
import osmond from "./Slider_1.webp";
import jesufemi from "./Slider_2.webp";
import stephen from "./Cap.webp";
import ayo from "./Cap_Green.jpg";

const Body2 = () => {

  const paragraph = document.querySelector('#image-container');
  const image1 = document.querySelector('#image1');
  const image2 = document.querySelector('#image2');

  const hidden = () => {
    image1.classList.toggle('hidden')
    image2.classList.toggle('hidden')
  };



  return (
    <div className="flex flex-col lg:flex-row w-[100%] min-h-[60vh] lg:space-x-[5%] md:px-[20px] lg:px-[50px] pt-[25px]">
      <div className="min-w-[15%] border border-gray-400 rounded-[5px] p-[5px] hidden lg:flex">

        <p id="image-container" className="relative w-[100%]" onMouseOver={() => { hidden() }} onMouseLeave={() => { hidden() }}>
            <img id="image1" src={ayo} alt="" className="w-[150px]" />
            <img id="image2" src={stephen} alt="" className="hidden w-[150px]" />
            <p className="w-[100%] bg-[transparent] h-[100%] absolute top-[0]"></p>
        </p>
      </div>

      <div className="w-[65%] border border-gray-400 rounded-[5px] px-[10px] md:px-[30px] lg:px-[0] ">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={osmond} alt="First slide" />
          </Carousel.Item>

          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={jesufemi} alt="Second slide" />
          </Carousel.Item>

          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={osmond} alt="Third slide" />
          </Carousel.Item>

          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={jesufemi} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Body2;
