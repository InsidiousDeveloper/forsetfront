import axios from 'axios'
import React, {useEffect, useMemo, useReducer, useCallback, useState, useContext} from 'react'
import ClientModalBox from '../elements/clientmodalbox'
import Clients from '../elements/clients'
import clientsReducer from '../redux/client-reducer'
import { Carcontext } from '../context/carcontext'
import {AuthContext} from "../context/authcontext";

export const ClientsList = () => {

    const {token} = useContext(AuthContext)

    const initialState = {
        client: [],
        modalBox: [],
    }

    const [state, dispatch] = useReducer(clientsReducer, initialState)

    const [clientContent, setClientContent] = useState(null)

    const [passportData, setPassportData] = useState('')
    const [filtered, setFiltered] = useState(false)
    const [loading, setLoading] = useState(false)
    const [found, setFound] = useState(null)

    const userModal = useMemo(() => {
        return <ClientModalBox clients={clientContent}/>
    }, [clientContent])

    const OpenUserModal = (client) => {
        state.modalBox[0].style.cssText = "display: flex; visibility: visible;"
        setClientContent(client)
    }

    function handleChanges(event) {
        setPassportData(event.target.value)
    }

    const requestUrl = `https://forsetcrm.herokuapp.com/api/clients?search=${passportData}`

    function searchPassport() {
        axios.get(`${requestUrl}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        }) .then((res) => {setFound(res.data)})
            .catch((e) => {console.log(e)})

        setFiltered(true)

    }

    function reset() {
        setPassportData('')
        setFiltered(false)
    }

    const serverRequests = async () => {
        try {
            setLoading(true)
            const modal = document.querySelectorAll('.modal-wrapper')

            await axios.get(`https://forsetcrm.herokuapp.com/api/clients/`, {
                headers: {
                    'Content-Type': 'application/json',
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
        } catch (e) {
            console.log(e)
        }
        setLoading(false)
    }

    useEffect(() => {
        serverRequests()
}, [])

    window.onclick = function(event) {
        if (event.target === state.modalBox[0]) {
            state.modalBox[0].style.cssText = "display: none; visibility: hidden;"
        }
    }

    console.log(state.client)

    // if (loading) {
    //     return (
    //         <div className="content">
    //             <div className="wrapper">
    //                 <div className="loader-wrapper">
    //                     <div className="loader">
    //                         <span></span>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }

    return (
        <Carcontext.Provider value={{
            OpenUserModal, filtered, found
        }}>
            <div className="content">
                <div className="wrapper">
                    <div className="top-tools">
                        <div className="tools-inner clients">
                            <div className="tools-item">
                                <input
                                    type="text"
                                    placeholder="Passport or Firstname"
                                    name='passportData'
                                    value={passportData}
                                    onChange={handleChanges}
                                />
                            </div>
                            <div className="tools-item">
                                <button onClick={searchPassport}>Search</button>
                            </div>
                            <div className="tools-item">
                                <button onClick={reset}>Reset</button>
                            </div>
                        </div>
                    </div>
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