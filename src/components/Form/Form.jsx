import React from 'react'
import { validation } from './validation';
import s from './Form.module.css';

export default function Form(props) {

    const [userData, setUserData] = React.useState({
        username: '',
        password: ''
    });

    const [errors, setErrors] = React.useState({
        username: '',
        password: ''
    })

    const handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
        setErrors(validation({
            ...userData,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.login(userData);
    }

    return (
        <div className={s.loginBox}>
            <h2 className={s.h2}>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className={s.userBox}>
                    <label className={s.userLabel}>Username</label>
                    <input name='username' type="text" value={userData.username} onChange={handleInputChange} className={s.userInput}/>
                    <p style={{color:"red"}}>{errors.username}</p>
                </div>

                <div className={s.userBox}>
                    <label className={s.userLabel}>Password</label>
                    <input name='password' type="text" value={userData.password} onChange={handleInputChange} className={s.userInput}/>
                    <p style={{color:"red"}}>{errors.password}</p>
                </div>

                <button className={s.btnLogin}>
                    Login
                </button>
            </form>
        </div>
    )
}