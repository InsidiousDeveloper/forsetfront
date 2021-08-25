import React, {useContext, useEffect} from "react";
import car from "../images/car.png";
import { Carcontext } from "../context/carcontext";
import Aos from 'aos'
import cardmodal from "./cardmodal";

const color = (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fal"
    data-icon="palette"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      d="M112 264c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm32-112c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM256 0c-16.9 0-34.2 1.6-51.7 5C104.9 24.4 24.8 104.3 5.2 203.4-29.4 378.5 116.4 512 239.5 512c8.3 0 16.5-.6 24.6-1.9 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.6 113.9 397.1 0 256 0zm191.1 288h-79.7c-35.3 0-67.4 17.9-85.7 47.8-18.2 29.7-19.6 66-3.7 97.2 4.9 9.6 4.8 21.6-.1 31.3-2.4 4.6-7.9 12.6-18.7 14.3-6.3 1-12.9 1.5-19.7 1.5-54.6 0-114.1-31.3-155.5-81.6-44-53.6-60.9-120.6-47.4-188.7 17.1-86.6 87-156.2 173.9-173.2 15.2-3 30.5-4.5 45.5-4.5 123.1 0 223.6 99.9 224 222.6 0 18.3-14.8 33.3-32.9 33.3zM368 136c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM240 88c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24z"
    ></path>
  </svg>
);
const carIcon = (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fal"
    data-icon="car-side"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 512"
  >
    <path
      fill="currentColor"
      d="M544 192h-16L419.21 56.02A63.99 63.99 0 0 0 369.24 32H171.33c-26.17 0-49.7 15.93-59.42 40.23L64 192c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48c0 53.02 42.98 96 96 96s96-42.98 96-96h128c0 53.02 42.98 96 96 96s96-42.98 96-96h48c8.84 0 16-7.16 16-16v-80c0-53.02-42.98-96-96-96zM288 64h81.24c9.77 0 18.88 4.38 24.99 12.01L487.02 192H288V64zM141.62 84.12C146.51 71.89 158.17 64 171.33 64H256v128H98.46l43.16-107.88zM160 448c-35.35 0-64-28.65-64-64s28.65-64 64-64 64 28.65 64 64-28.65 64-64 64zm320 0c-35.35 0-64-28.65-64-64s28.65-64 64-64 64 28.65 64 64-28.65 64-64 64zm128-96h-37.88c-13.22-37.2-48.38-64-90.12-64s-76.9 26.8-90.12 64H250.12c-13.22-37.2-48.38-64-90.12-64s-76.9 26.8-90.12 64H32v-96c0-17.64 14.36-32 32-32h480c35.29 0 64 28.71 64 64v64z"
    ></path>
  </svg>
);

const Cars = ({ carInfo }) => {

  useEffect(() => {
    Aos.init({
      duration: 1500,
      offset: 100
    })
  })

  const { OpenCarModal, currentFilter } = useContext(Carcontext);

  console.log('cars');

  const filteredArray = carInfo.filter((car) => {
    if (currentFilter.price === null && currentFilter.brand === null || currentFilter.brand === "Select a brand") {
      return car;
    } else if (car.brand === currentFilter.brand) {
      if (currentFilter.model === null || currentFilter.model === "Select a model") {
        return car
      } else if (car.model === currentFilter.model) {
        if (car.cost <= currentFilter.price) {
          return car;
        } else if (currentFilter.price === null) {
          return car;
        }
      } else {}
    }
  });

  return (
    <>
      {
        // the following double '!!' return boolean value
        !!filteredArray.length ? (
          filteredArray.map((vehicle, index) => {
            // console.log(vehicle)
            return (
                <div className="animation" data-aos="zoom-in-up" key={index} data-aos-delay={index + '00'}>
                  <div className="card" onClick={e => OpenCarModal(vehicle)}>
                    {/*<span className="span"></span>*/}
                    <div className="card-imagebox">
                      <img className="card-image" src={car} alt="Vehicle" />
                    </div>
                    <h3 className="card-title">
                      {vehicle.brand} {vehicle.model}
                    </h3>
                    <p className="card-number">
                      {vehicle.car_num}
                    </p>
                    <p className="card-price">
                      {vehicle.rent_cost} soum/day
                    </p>
                    <div className="card-dots">
                      <span></span><span></span><span></span>
                    </div>
                  </div>
                </div>
            );
          })
        ) : (
          <div className="centered">
            <h1>Nothing found</h1>
          </div>
        )
      }
    </>
  );
};

export default Cars;
