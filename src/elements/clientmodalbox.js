import React from 'react'
import client from '../images/photo2.jpg'
import '../styles/modalbox.scss'
import car from "../images/car.png";

const id = <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="list-ol" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M61.77 401l17.5-20.15a19.92 19.92 0 0 0 5.07-14.19v-3.31C84.34 356 80.5 352 73 352H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h22.84a154.82 154.82 0 0 0-11 12.31l-5.61 7c-4 5.07-5.25 10.13-2.8 14.88l1.05 1.93c3 5.76 6.3 7.88 12.25 7.88h4.73c10.33 0 15.94 2.44 15.94 9.09 0 4.72-4.2 8.22-14.36 8.22a41.54 41.54 0 0 1-15.47-3.12c-6.49-3.88-11.74-3.5-15.6 3.12l-5.59 9.31c-3.73 6.13-3.2 11.72 2.62 15.94 7.71 4.69 20.39 9.44 37 9.44 34.16 0 48.5-22.75 48.5-44.12-.03-14.38-9.12-29.76-28.73-34.88zM12.1 320H80a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H41.33c3.28-10.29 48.33-18.68 48.33-56.44 0-29.06-25-39.56-44.47-39.56-21.36 0-33.8 10-40.45 18.75-4.38 5.59-3 10.84 2.79 15.37l8.58 6.88c5.61 4.56 11 2.47 16.13-2.44a13.4 13.4 0 0 1 9.45-3.84c3.33 0 9.28 1.56 9.28 8.75C51 248.19 0 257.31 0 304.59v4C0 316 5.08 320 12.1 320zM16 160h64a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H64V40a8 8 0 0 0-8-8H32a8 8 0 0 0-7.14 4.42l-8 16A8 8 0 0 0 24 64h8v64H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm488-80H168a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h336a8 8 0 0 0 8-8V88a8 8 0 0 0-8-8zm0 320H168a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h336a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8zm0-160H168a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h336a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8z"></path></svg>
const user = <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M313.6 288c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zM416 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 56.5 0 102.4 45.9 102.4 102.4V464zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg>
const phone = <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="phone-volume" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M154.9 187.8c14.7 1.5 28.7-7 34.2-20.7l32.5-81c6-14.9.4-31.9-13.3-40.5l-65-40.5c-13.2-8.2-30.1-6.3-41.1 4.7C-34.3 146-34 366.4 102.2 502.3c11 11 27.9 12.9 41.1 4.7l65-40.5C222 458 227.5 441 221.6 426l-32.5-81c-5.5-13.6-19.5-22.1-34.2-20.7l-43.2 4.3c-14.5-47.2-14.5-97.9 0-145.1zM89.8 362.9l68.4-6.8c.5-.1 1 .2 1.2.7l32.5 81c.2.5 0 1.1-.5 1.4l-65 40.5c-.5.3-1.1.2-1.5-.2C1 356 1.1 155.9 124.9 32.4c.4-.4 1-.5 1.5-.2l65 40.5c.5.3.7.9.5 1.4l-32.5 81c-.2.5-.7.8-1.2.7L89.8 149c-28.7 79.1-27.6 137.9 0 213.9zm202.4-270l-6 5.7c-3.9 3.7-4.8 9.6-2.3 14.4 4.9 9.4 4.9 20.6 0 29.9-2.5 4.8-1.6 10.7 2.3 14.4l6 5.7c5.6 5.4 14.8 4.1 18.7-2.6 11.8-20 11.8-45 0-65.1-3.9-6.5-13-7.8-18.7-2.4zM357 49.2c-4.4-5.6-12.7-6.3-17.9-1.3l-5.8 5.6c-4.4 4.2-5 11.1-1.3 15.9 26.5 34.6 26.5 82.6 0 117.1-3.7 4.8-3.1 11.7 1.3 15.9l5.8 5.6c5.2 4.9 13.5 4.3 17.9-1.3 36.1-46.2 36.1-111.1 0-157.5zm45.9-44.9c-4.5-5.3-12.5-5.7-17.6-.9L379.5 9c-4.6 4.4-5 11.5-.9 16.4 49.7 59.5 49.6 145.9 0 205.4-4 4.8-3.6 12 .9 16.4l5.8 5.6c5 4.8 13.1 4.4 17.6-.9 60.2-71.8 60.1-176.1 0-247.6z"></path></svg>
const passport = <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="passport" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h352c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32zm0 480H64c-17.64 0-32-14.36-32-32V64c0-17.64 14.36-32 32-32h352v448zm-304-64h224c8.8 0 16-7.2 16-16s-7.2-16-16-16H112c-8.8 0-16 7.2-16 16s7.2 16 16 16zm112-96c70.69 0 128-57.31 128-128S294.69 64 224 64 96 121.31 96 192s57.31 128 128 128zm94.38-144h-39.09c-1.49-27.03-6.54-51.35-14.21-70.41 27.71 13.24 48.02 39.19 53.3 70.41zm-39.09 32h39.09c-5.29 31.22-25.59 57.17-53.3 70.41 7.68-19.06 12.72-43.38 14.21-70.41zM224 97.31c7.69 7.45 20.77 34.42 23.43 78.69h-46.87c2.67-44.26 15.75-71.24 23.44-78.69zM247.43 208c-2.66 44.26-15.74 71.24-23.43 78.69-7.69-7.45-20.77-34.42-23.43-78.69h46.86zm-64.51-102.41c-7.68 19.06-12.72 43.38-14.21 70.41h-39.09c5.28-31.22 25.59-57.17 53.3-70.41zM168.71 208c1.49 27.03 6.54 51.35 14.21 70.41-27.71-13.24-48.02-39.19-53.3-70.41h39.09z"></path></svg>
const carIcon = <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="car-side" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M544 192h-16L419.21 56.02A63.99 63.99 0 0 0 369.24 32H171.33c-26.17 0-49.7 15.93-59.42 40.23L64 192c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48c0 53.02 42.98 96 96 96s96-42.98 96-96h128c0 53.02 42.98 96 96 96s96-42.98 96-96h48c8.84 0 16-7.16 16-16v-80c0-53.02-42.98-96-96-96zM288 64h81.24c9.77 0 18.88 4.38 24.99 12.01L487.02 192H288V64zM141.62 84.12C146.51 71.89 158.17 64 171.33 64H256v128H98.46l43.16-107.88zM160 448c-35.35 0-64-28.65-64-64s28.65-64 64-64 64 28.65 64 64-28.65 64-64 64zm320 0c-35.35 0-64-28.65-64-64s28.65-64 64-64 64 28.65 64 64-28.65 64-64 64zm128-96h-37.88c-13.22-37.2-48.38-64-90.12-64s-76.9 26.8-90.12 64H250.12c-13.22-37.2-48.38-64-90.12-64s-76.9 26.8-90.12 64H32v-96c0-17.64 14.36-32 32-32h480c35.29 0 64 28.71 64 64v64z"></path></svg>

const ClientModalBox = (prop) => {

    console.log('cardmodal')

    if (!prop.clients) {
        return (
            <div className="modal">

            </div>
        )
    }

    return (
        <div className="client-modalbox">
            <div className="client-top">
                <div className="client-left">
                    <div className="client-imagebox">
                        <img className="client-image" src={client} alt="client: client" />
                    </div>
                    <div className="client-info">
                        <h2 className="client-info-surname">{prop.clients.lastname}</h2>
                        <h2 className="client-info-name">{prop.clients.firstname}</h2>
                        <h2 className="client-info-second-name">{prop.clients.second_name}</h2>
                        <p className="client-number">{prop.clients.passport_series}</p>
                    </div>
                </div>
                <div className="client-right">
                    <div className="client-conditions">
                        <div className="client-isblock">
                            <div className="client-block"></div>
                            <span className="client-block-status">verified</span>
                        </div>
                        <div className="client-isactive">
                            <div className="client-vacant"></div>
                            <span className="client-vacant-status">inactive</span>
                        </div>
                    </div>
                    <div className="client-rent-dates">
                        <div className="client-dates-item">
                            <h5 className="client-title dates-title">Date of issue</h5>
                            <p className="client-descr dates-descr">
                                {new Date(prop.clients.date_of_issue).toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="client-content">
                <div className="client-content-item">
                    <h4 className="client-title item-title">Date of birth</h4>
                    <p className="client-descr item-descr">
                        {new Date(prop.clients.date_of_birth).toLocaleDateString()}
                    </p>
                </div>
                <div className="client-content-item">
                    <h4 className="client-title item-title">Adress</h4>
                    <p className="client-descr item-descr">
                        {prop.clients.address}
                    </p>
                </div>
                <div className="client-content-item">
                    <h4 className="client-title item-title">Telephone</h4>
                    <p className="client-descr item-descr">
                        +{prop.clients.phone}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default  React.memo(ClientModalBox)