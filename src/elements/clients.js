import React, {useContext, useEffect} from 'react'
import client from '../images/photo2.jpg'
import { Carcontext } from '../context/carcontext'
import Aos from 'aos'

const user = <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor"d="M313.6 288c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zM416 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 56.5 0 102.4 45.9 102.4 102.4V464zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg>

const Clients = ({clientInfo}) => {


    useEffect(() => {
        Aos.init({
            duration: 1500,
            offset: 50,
            delay: 50
        })
    })

    const { OpenUserModal, filtered, found } = useContext(Carcontext)
    console.log(found)

    if (filtered) {
        if (found) {
            return (
                    <>
                        <div className="animation" data-aos="zoom-in-up">
                            <div className="card client" onClick={e => OpenUserModal(found[0])}>
                                <div className="card-imagebox">
                                    <img className="card-image" src={client} alt="Person" />
                                </div>
                                <div className="information">
                                    <h3>{found[0].firstname}</h3>
                                    <h3>{found[0].lastname}</h3>
                                </div>
                            </div>
                        </div>
                    </>
                )
            // found.map((item, index) => {
            //     return (
            //         <>
            //             <div className="animation" data-aos="zoom-in-up" key={index}>
            //                 <div className="card client" onClick={e => OpenUserModal(item)}>
            //                     <div className="card-imagebox">
            //                         <img className="card-image" src={client} alt="Person" />
            //                     </div>
            //                     <div className="information">
            //                         <h3>{item.firstname} {item.lastname}</h3>
            //                     </div>
            //                 </div>
            //             </div>
            //         </>
            //     )
            // })
        } else {
            return (
                <h1>Not found</h1>
            )
        }
    }

    return (
        <>
            {clientInfo.map((person, index) => {
                console.log(person)
                return (
                    <div className="animation" key={index} data-aos="zoom-in-up" data-aos-delay={index + '00'} onClick={e => OpenUserModal(person)}>
                        <div className="client">
                            <div className="client-body">
                                <div className="client-imagebox">
                                    <img src={client} alt="client: client" className="client-image" />
                                </div>
                                <div className="client-info">
                                    <h3 className="client-surname">{person.lastname}</h3>
                                    <h3 className="client-name">{person.firstname}</h3>
                                    <div className="client-sensor">
                                        <div className="client-sensor-color"></div>
                                        <p className="client-sensor-value">active</p>
                                    </div>
                                    <div className="client-sensor">
                                        <div className="client-sensor-color"></div>
                                        <p className="client-sensor-value">black list</p>
                                    </div>
                                </div>
                            </div>
                            <p className="client-number">{person.passport_series}</p>
                            <div className="card-dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Clients