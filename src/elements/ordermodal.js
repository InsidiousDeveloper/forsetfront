import React from 'react'
import client from "../images/photo2.jpg";
import car from "../images/photo.jpg";

const id = <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="list-ol" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M61.77 401l17.5-20.15a19.92 19.92 0 0 0 5.07-14.19v-3.31C84.34 356 80.5 352 73 352H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h22.84a154.82 154.82 0 0 0-11 12.31l-5.61 7c-4 5.07-5.25 10.13-2.8 14.88l1.05 1.93c3 5.76 6.3 7.88 12.25 7.88h4.73c10.33 0 15.94 2.44 15.94 9.09 0 4.72-4.2 8.22-14.36 8.22a41.54 41.54 0 0 1-15.47-3.12c-6.49-3.88-11.74-3.5-15.6 3.12l-5.59 9.31c-3.73 6.13-3.2 11.72 2.62 15.94 7.71 4.69 20.39 9.44 37 9.44 34.16 0 48.5-22.75 48.5-44.12-.03-14.38-9.12-29.76-28.73-34.88zM12.1 320H80a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H41.33c3.28-10.29 48.33-18.68 48.33-56.44 0-29.06-25-39.56-44.47-39.56-21.36 0-33.8 10-40.45 18.75-4.38 5.59-3 10.84 2.79 15.37l8.58 6.88c5.61 4.56 11 2.47 16.13-2.44a13.4 13.4 0 0 1 9.45-3.84c3.33 0 9.28 1.56 9.28 8.75C51 248.19 0 257.31 0 304.59v4C0 316 5.08 320 12.1 320zM16 160h64a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H64V40a8 8 0 0 0-8-8H32a8 8 0 0 0-7.14 4.42l-8 16A8 8 0 0 0 24 64h8v64H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm488-80H168a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h336a8 8 0 0 0 8-8V88a8 8 0 0 0-8-8zm0 320H168a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h336a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8zm0-160H168a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h336a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8z"></path></svg>
const model = <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="car-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512"><path fill="currentColor" d="M423.18 195.81l-24.94-76.58C387.51 86.29 356.81 64 322.17 64H157.83c-34.64 0-65.34 22.29-76.07 55.22L56.82 195.8C24.02 205.79 0 235.92 0 271.99V400c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48v-16h256v16c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48V271.99c0-36.07-24.02-66.2-56.82-76.18zm-310.99-66.67c6.46-19.82 24.8-33.14 45.64-33.14h164.34c20.84 0 39.18 13.32 45.64 33.13l20.47 62.85H91.72l20.47-62.84zM80 400c0 8.83-7.19 16-16 16H48c-8.81 0-16-7.17-16-16v-16h48v16zm368 0c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm0-80.01v32H32v-80c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v48zM104.8 248C78.84 248 60 264.8 60 287.95c0 23.15 18.84 39.95 44.8 39.95l10.14.1c39.21 0 45.06-20.1 45.06-32.08 0-24.68-31.1-47.92-55.2-47.92zm10.14 56c-3.51 0-7.02-.1-10.14-.1-12.48 0-20.8-6.38-20.8-15.95S92.32 272 104.8 272s31.2 14.36 31.2 23.93c0 7.17-10.53 8.07-21.06 8.07zm260.26-56c-24.1 0-55.2 23.24-55.2 47.93 0 11.98 5.85 32.08 45.06 32.08l10.14-.1c25.96 0 44.8-16.8 44.8-39.95 0-23.16-18.84-39.96-44.8-39.96zm0 55.9c-3.12 0-6.63.1-10.14.1-10.53 0-21.06-.9-21.06-8.07 0-9.57 18.72-23.93 31.2-23.93s20.8 6.38 20.8 15.95-8.32 15.95-20.8 15.95z"></path></svg>
const carIcon = <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="car-side" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M544 192h-16L419.21 56.02A63.99 63.99 0 0 0 369.24 32H171.33c-26.17 0-49.7 15.93-59.42 40.23L64 192c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48c0 53.02 42.98 96 96 96s96-42.98 96-96h128c0 53.02 42.98 96 96 96s96-42.98 96-96h48c8.84 0 16-7.16 16-16v-80c0-53.02-42.98-96-96-96zM288 64h81.24c9.77 0 18.88 4.38 24.99 12.01L487.02 192H288V64zM141.62 84.12C146.51 71.89 158.17 64 171.33 64H256v128H98.46l43.16-107.88zM160 448c-35.35 0-64-28.65-64-64s28.65-64 64-64 64 28.65 64 64-28.65 64-64 64zm320 0c-35.35 0-64-28.65-64-64s28.65-64 64-64 64 28.65 64 64-28.65 64-64 64zm128-96h-37.88c-13.22-37.2-48.38-64-90.12-64s-76.9 26.8-90.12 64H250.12c-13.22-37.2-48.38-64-90.12-64s-76.9 26.8-90.12 64H32v-96c0-17.64 14.36-32 32-32h480c35.29 0 64 28.71 64 64v64z"></path></svg>
const user = <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M313.6 288c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zM416 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 56.5 0 102.4 45.9 102.4 102.4V464zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg>
const passport = <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="passport" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h352c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32zm0 480H64c-17.64 0-32-14.36-32-32V64c0-17.64 14.36-32 32-32h352v448zm-304-64h224c8.8 0 16-7.2 16-16s-7.2-16-16-16H112c-8.8 0-16 7.2-16 16s7.2 16 16 16zm112-96c70.69 0 128-57.31 128-128S294.69 64 224 64 96 121.31 96 192s57.31 128 128 128zm94.38-144h-39.09c-1.49-27.03-6.54-51.35-14.21-70.41 27.71 13.24 48.02 39.19 53.3 70.41zm-39.09 32h39.09c-5.29 31.22-25.59 57.17-53.3 70.41 7.68-19.06 12.72-43.38 14.21-70.41zM224 97.31c7.69 7.45 20.77 34.42 23.43 78.69h-46.87c2.67-44.26 15.75-71.24 23.44-78.69zM247.43 208c-2.66 44.26-15.74 71.24-23.43 78.69-7.69-7.45-20.77-34.42-23.43-78.69h46.86zm-64.51-102.41c-7.68 19.06-12.72 43.38-14.21 70.41h-39.09c5.28-31.22 25.59-57.17 53.3-70.41zM168.71 208c1.49 27.03 6.54 51.35 14.21 70.41-27.71-13.24-48.02-39.19-53.3-70.41h39.09z"></path></svg>
const calendar = <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="calendar-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 64h-48V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H128V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h352c8.8 0 16 7.2 16 16v48H32v-48c0-8.8 7.2-16 16-16zm352 384H48c-8.8 0-16-7.2-16-16V192h384v272c0 8.8-7.2 16-16 16zM148 320h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 96h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm192 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12z"></path></svg>


export const Ordermodal = (prop) => {

    console.log(prop)

    if (!prop.order) {
        console.log('empty render')
        return (
            <div className="modal">

            </div>
        )
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="car-info">
                    <div className="car-img">
                        <img src={client} alt="Vehicle" />
                    </div>
                    <div className="car-details">
                        <div className="column">
                            <div>{id} ID</div>
                            <h2>{prop.order.client_id}</h2>
                        </div>
                        <div className="column">
                            <div>{user} Full name</div>
                            <h2>{prop.order.firstname} {prop.order.lastname}</h2>
                        </div>
                        <div className="column">
                            <div>{passport} Passport</div>
                            <h2>{prop.order.passport}</h2>
                        </div>
                    </div>
                </div>
                <div className="car-info">
                    <div className="car-img">
                        <img src={car} alt="Vehicle" />
                    </div>
                    <div className="car-details">
                        <div className="column">
                            <div>{id} ID</div>
                            <h2>{prop.order.car_id}</h2>
                        </div>
                        <div className="column">
                            <div>{carIcon} Brand</div>
                            <h2>{prop.order.brand}</h2>
                        </div>
                        <div className="column">
                            <div>{model} Model</div>
                            <h2>{prop.order.model}</h2>
                        </div>
                        <div className="column">
                            <div>{calendar} From - To</div>
                            <h2>{new Date(prop.order.start).toDateString()} - {new Date(prop.order.end).toDateString()}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}