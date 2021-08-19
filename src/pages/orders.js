import React, {useContext, useEffect, useMemo, useState} from 'react'
import axios from 'axios'
import {AuthContext} from "../context/authcontext";
import {Ordermodal} from "../elements/ordermodal";
import Aos from 'aos'

export const Orders = () => {

    const {token} = useContext(AuthContext)
    const [orders, setOrders] = useState([])
    const [modal, setModal] = useState({})
    const [passingData, setPassingData] = useState(null)

    const orderModal = useMemo(() => {
        return <Ordermodal order={passingData}/>
    }, [passingData])

    useEffect(() => {

        Aos.init({
            duration: 1500,
            offset: 50,
            delay: 50
        })

        const modalBox = document.querySelector('.modal-wrapper')
        setModal(modalBox)
        axios.get(`https://forsetcrm.herokuapp.com/api/orders/`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        })
            .then((res) => setOrders(res.data))
    }, [])

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.cssText = "display: none; visibility: hidden;";
        }
    };

    const openOrderModal = (order) => {
        modal.style.cssText = "display: flex; visibility: visible;";
        setPassingData(order)
    }

    console.log(orders)

    return (
        <div className="content">
            <div className="wrapper">
                <div className="modal-wrapper">{orderModal}</div>
                <div className="order">
                    <div className="order-info">
                        <span className="subtitle">Full name</span>
                        <span className="subtitle">Passport</span>
                        <span className="subtitle">From - To</span>
                        <span className="subtitle">Car info</span>
                    </div>
                    {orders.map((order, index) => {
                        return (
                            <div className="order-item" data-aos="zoom-out-right" data-aos-delay={index * 2 + '00'} key={index} onClick={(e) => openOrderModal(order)}>
                                <h3 className="order-client">{order.firstname} {order.lastname}</h3>
                                <span className="order-passport-number">{order.passport}</span>
                                <span className="order-days">{new Date(order.start).toDateString()} - {new Date(order.end).toDateString()}</span>
                                <div className="order-car-info">
                                    <div className="order-car-number">{order.brand}</div>
                                    <div className="order-car-name">{order.model}</div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}