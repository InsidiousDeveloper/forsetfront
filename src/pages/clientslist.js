import axios from 'axios'
import React, {useEffect, useMemo, useReducer, useCallback, useState, useContext} from 'react'
import ClientModalBox from '../elements/clientmodalbox'
import Clients from '../elements/clients'
import clientsReducer from '../redux/client-reducer'
import { Carcontext } from '../context/carcontext'
import $ from 'jquery'
import {AuthContext} from "../context/authcontext";

export const ClientsList = () => {

    const {token} = useContext(AuthContext)

    const initialState = {
        client: [],
        modalBox: [],
    }

    const [state, dispatch] = useReducer(clientsReducer, initialState)

    const [clientContent, setClientContent] = useState(null)

    const userModal = useMemo(() => {
        return <ClientModalBox clients={clientContent}/>
    }, [clientContent])

    const OpenUserModal = (client) => {
        state.modalBox[0].style.cssText = "display: flex; visibility: visible;"
        setClientContent(client)
    }

    useEffect(() => {

        const modal = document.querySelectorAll('.modal-wrapper')

        axios.get(`https://forsetcrm.herokuapp.com/api/clients/`, {
            headers: {
                'Content-Type': 'application-json',
                'Authorization': `Token ${token}`
            }
        })
            .then((res) => {
                dispatch({
                    type: 'client',
                    payload: res.data
                })
                dispatch({
                    type: 'modalBox',
                    payload: modal
                })
            })
    }, [])

    $(document).ready(function(){
        $('.card').on('mouseenter', function(e){
            var x = e.pageX - $(this).offset().left;
            var y = e.pageY - $(this).offset().top;
            $(this).find('.span').css({top: y, left: x})
        })
        $('.card').on('mouseout', function(e){
            var x = e.pageX - $(this).offset().left;
            var y = e.pageY - $(this).offset().top;
            $(this).find('.span').css({top: y, left: x})
        })

        window.onclick = function(event) {
            if (event.target === state.modalBox[0]) {
                state.modalBox[0].style.cssText = "display: none; visibility: hidden;"
            }
        }
    })

    console.log('component render')

    return (
        <Carcontext.Provider value={{
            OpenUserModal
        }}>
            <div className="content">
                <div className="wrapper">
                    <div className="modal-wrapper">
                        {userModal}
                    </div>
                    <div className="cards">
                        <Clients clientInfo={state.client} />
                    </div>
                </div>
            </div>
        </Carcontext.Provider>
    )
}