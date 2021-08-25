import axios from "axios";
import React, {
  useEffect,
  useMemo,
  useReducer,
  useCallback,
  useState,
  useContext,
} from "react";
import CarModalBox from "../elements/cardmodal";
import Cars from "../elements/cars";
import reducer from "../redux/car-redux";
import { Carcontext } from "../context/carcontext";
import { AuthContext } from "../context/authcontext";

const plus = (<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>)

const filter = (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fal"
    data-icon="filter"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      d="M479.968 0H32.038C3.613 0-10.729 34.487 9.41 54.627L192 237.255V424a31.996 31.996 0 0 0 10.928 24.082l64 55.983c20.438 17.883 53.072 3.68 53.072-24.082V237.255L502.595 54.627C522.695 34.528 508.45 0 479.968 0zM288 224v256l-64-56V224L32 32h448L288 224z"
    ></path>
  </svg>
);
const calendar = (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fal"
    data-icon="calendar-alt"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <path
      fill="currentColor"
      d="M400 64h-48V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H128V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h352c8.8 0 16 7.2 16 16v48H32v-48c0-8.8 7.2-16 16-16zm352 384H48c-8.8 0-16-7.2-16-16V192h384v272c0 8.8-7.2 16-16 16zM148 320h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 96h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm192 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12z"
    ></path>
  </svg>
);
const search = (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fal"
    data-icon="search"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      d="M508.5 481.6l-129-129c-2.3-2.3-5.3-3.5-8.5-3.5h-10.3C395 312 416 262.5 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c54.5 0 104-21 141.1-55.2V371c0 3.2 1.3 6.2 3.5 8.5l129 129c4.7 4.7 12.3 4.7 17 0l9.9-9.9c4.7-4.7 4.7-12.3 0-17zM208 384c-97.3 0-176-78.7-176-176S110.7 32 208 32s176 78.7 176 176-78.7 176-176 176z"
    ></path>
  </svg>
);

export const CarsList = () => {
  // Снова участились рендеры !!!!!!!!!!!!!

  const initialState = {
    carsInfo: [],
    modalBox: [],
    filter: {
      max: 0,
      min: 0,
    },
    allBrands: [],
    modelbrand: [],
    allColors: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const [carContent, setCarContent] = useState(null);
  const [loading, setLoading] = useState(false)
  const { token } = useContext(AuthContext);

  const [place, setPlace] = useState({
    brand: '',
    model: '',
    color: '',
    cost: null,
    engine_num: '',
    body_num: '',
    tech_passport: '',
    car_num: '',
    spare_wheel: '',
    battery: '',
    wheels_model: '',
    rent_cost: null
  })

  const [currentFilter, setCurrentFilter] = useState({
    price: null,
    brand: null,
    model: null
  });

  const carModal = useMemo(() => {
    return <CarModalBox cars={carContent} />;
  }, [carContent]);

  const OpenCarModal = (car) => {
    state.modalBox[0].style.cssText = "display: flex; visibility: visible;";
    setCarContent(car);
  };

  const serverRequests = async () => {
    try {
      setLoading(true)
      const modal = document.querySelectorAll(".modal-wrapper");

      await axios
          .get(`https://forsetcrm.herokuapp.com/api/cars/`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${token}`,
            },
          })
          .then((res) => {
            dispatch({
              type: "carsInfo",
              payload: res.data,
            });
            dispatch({
              type: "modalBox",
              payload: modal,
            });
            dispatch({
              type: "filter",
              payload: res.data,
            });
            dispatch({
              type: "color",
              payload: res.data,
            });
          });

      await axios
          .get(`https://forsetcrm.herokuapp.com/api/brand&model/`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${token}`,
            },
          })
          .then((res) => {
            dispatch({
              type: "allBrands",
              payload: res.data,
            });
            dispatch(({
              type: "modelbrand",
              payload: res.data,
            }))
          });
    } catch (e) {
      console.log(e)
    }
    setLoading(false)
  }

  useEffect(() => {
    serverRequests()
  }, []);


  window.onclick = function (event) {
    if (event.target === state.modalBox[0]) {
      state.modalBox[0].style.cssText = "display: none; visibility: hidden;";
    }
  };

  function AddCarNow(event) {
    setPlace({
      ...place,
      [
        event.target.name
      ]: event.target.value
    })
  }

  const SendAddFunc = async() => {
    try{
      console.log(place)
      axios.post(`https://forsetcrm.herokuapp.com/api/cars/`,{...place},{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      })

    } catch(e){
      console.log(e)
    }

    setPlace({
      brand: '',
      model: '',
      color: '',
      cost: null,
      engine_num: '',
      body_num: '',
      tech_passport: '',
      car_num: '',
      spare_wheel: '',
      battery: '',
      wheels_model: '',
      rent_cost: null
    })
  }

  function modalAddWindow() {
    const modalAddWindow = document.querySelector('.plus-input ')
    modalAddWindow.classList.toggle('visible')
  }

  function selectBrand(e) {
    setCurrentFilter({
      ...currentFilter,
      brand: e.target.value,
    });
  }

  function resetFilter() {
    setCurrentFilter({
      brand: null,
      price: null,
    });
  }

  function selectModel(e) {
    setCurrentFilter({
      ...currentFilter,
      model: e.target.value
    })
  }

  function handleFilter(event) {
    setCurrentFilter({
      ...currentFilter,
      [event.target.name]: event.target.value
    })
  }

  console.log('carslist')

  // if (loading) {
  //   return (
  //       <div className="content">
  //         <div className="wrapper">
  //           <div className="loader-wrapper">
  //             <div className="loader">
  //               <span></span>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //   )
  // }

  return (
    <Carcontext.Provider
      value={{
        OpenCarModal,
        currentFilter,
      }}
    >
      <div className="content">
        <div className="wrapper">
          <div className="modal-wrapper">{carModal}</div>

          <div className="top-tools">
            <div className="tools-inner">
            <div className="tools-item brand">
                  <h6 className="tools-title">Brand</h6>
                  <select onChange={selectBrand}>
                    <option defaultValue="selected">Select a brand</option>
                    {state.allBrands.map((brand, index) => {
                      return (
                        <option value={brand} key={index}>
                          {brand}
                        </option>
                      );
                    })}
                  </select>
              </div>
              <div className="tools-item model">
                  <h6 className="tools-title">Model</h6>
                <select onChange={selectModel}>
                  {
                    (() => {
                      if (currentFilter.brand) {
                        return (
                            <>
                              <option defaultValue="selected">Select a model</option>
                              {
                                state.modelbrand.map((model, index) => {
                                  if (Object.keys(model) == currentFilter.brand) {
                                    const newArr =  model[currentFilter.brand]
                                    const listofmodels = []
                                    newArr.map((car, index) => {
                                      console.log(car)
                                      listofmodels.push(<option value={car} key={index}>{car}</option>)
                                    })
                                    return listofmodels
                                  }
                                })
                              }
                            </>
                        )
                      } else {
                        return (
                            <option>Select brand first</option>
                        )
                      }
                    }) ()
                  }
                </select>
              </div>
              <div className="tools-item price">
                  <h6 className="tools-title">Price</h6>
                  <input className="tools-price" type="number" placeholder={`${state.filter.min} - ${state.filter.max}`} name="price" value={currentFilter.price} onChange={handleFilter}/>
              </div>
              <div className="tools-item color">
                  <h6 className="tools-title">Color</h6>
                  <div className="tools-color-picker">
                    <input className="tools-color" type="text" placeholder="Color" />
                    <span className="color-box"></span>
                  </div>
              </div>
              <div className="tools-item date">
                  <h6 className="tools-title">Date</h6>
                  <input className="tools-date" type="text" value={''} placeholder="ДД/ММ/ГГ - ДД/MM/ГГ" />
              </div>
              <button className="search-btn" onClick={resetFilter}>
                  {search}
              </button>

              <div className="search-btn plus" >
                    <div className="plusAdd" onClick={modalAddWindow}>
                      {plus}
                    </div>
                  <div className="plus-input">
                    <input type="text" placeholder="brand" name="brand" value={place.brand} onChange={AddCarNow}/>
                    <input type="text" placeholder="model" name="model" value={place.model} onChange={AddCarNow}/>
                    <input type="text" placeholder="color" name="color" value={place.color} onChange={AddCarNow}/>
                    <input type="number" placeholder="cost" name="cost" value={place.cost} onChange={AddCarNow} />
                    <input type="text" placeholder="engine_num" name="engine_num" value={place.engine_num} onChange={AddCarNow}/>
                    <input type="text" placeholder="body_num" name="body_num" value={place.body_num} onChange={AddCarNow}/>
                    <input type="text" placeholder="tech_passport" name="tech_passport"
                      value={place.tech_passport} onChange={AddCarNow}/>
                    <input type="text" placeholder="car_num" name="car_num" value={place.car_num} onChange={AddCarNow}/>
                    <input type="text" placeholder="battery"name="battery" value={place.battery} onChange={AddCarNow}/>
                    <input type="text" placeholder="wheels_model"name="wheels_model" 
                      value={place.wheels_model} onChange={AddCarNow}/>
                    <input type="number" placeholder="rent_cost"name="rent_cost" value={place.rent_cost} onChange={AddCarNow}/> <br />
                    <button onClick={SendAddFunc}>
                      Send
                    </button>

                  </div>
              </div>

            </div>
          </div>
          <div className="cards">
            <Cars carInfo={state.carsInfo} />
          </div>
        </div>
      </div>
    </Carcontext.Provider>
  );
};
