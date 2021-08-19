import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from '../context/authcontext'

export const AdminAuthPage = () => {

    const auth = useContext(AuthContext)
    const [role, setRole] = useState('')
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const handleChange = (event) => {
        setCredentials({
            ...credentials, [event.target.name]: event.target.value
        })
    }

    const handlePress = (event) => {
        setRole(event.target.id)
    }

    const sendData = () => {
        console.log(credentials)
        axios.post(`https://forsetcrm.herokuapp.com/api/login/`, {...credentials})
        .then((res) => {auth.login(res.data.token, res.data.user_id)})
        .catch((e) => console.log(e))
    }

    useEffect(() => {
        if (role === 'rent') {
            document.querySelector('.admin-tools').style.cssText = "display: block; visibility: visible; opacity: 1"
        } else {
            document.querySelector('.admin-tools').style.cssText = "display: none; visibility: hidden; opacity: 0"
        }
    }, [role])

    return (
        <div className="content">
            <div className="form-panel">
                <div className="form-elements">
                    <h2>Client's registration</h2>
                    <div className="form-element">
                        <input type="text" id="login" placeholder="Login" name="username" value={credentials.username} onChange={handleChange}/>
                    </div>
                    <div className="form-element">
                        <input type="text" id="password" placeholder="Password" name="password" value={credentials.password} onChange={handleChange}/>
                    </div>
                    <div className="form-element">
                        <input type="text" id="first-name" placeholder="First name" />
                    </div>
                    <div className="form-element">
                        <input type="text" id="last-name" placeholder="Last name" />
                    </div>
                    <div className="form-element radio-btns">
                        <div>
                            <input name="whoIs" id="rent" type="radio" onChange={handlePress} required/>
                            <label htmlFor="rent">Is rent</label>
                        </div>
                        <div>
                            <input name="whoIs" id="superuser" type="radio" onChange={handlePress} required/>
                            <label htmlFor="superuser">Is superuser</label>
                        </div>
                    </div>
                    <div className="admin-tools">
                        <div className="form-element rent">
                            <input type="text" id="rent-name" placeholder="Rent name" />
                        </div>
                        <div className="form-element rent">
                            <input type="text" id="rent-phone" placeholder="Rent phone no" />
                        </div>
                        <div className="form-element">
                            <input type="text" id="document-num" placeholder="Document num" />
                        </div>
                    </div>
                    <div className="buttons">
                        <button>Upload photo
                            {/* Upload */}
                        </button>
                        <button onClick={sendData}>Submit
                            {/* Send */}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}