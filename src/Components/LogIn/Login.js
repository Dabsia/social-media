import React from 'react'
import '../SignUp/SignUp.css'


const LogIn = () => {
    return (
        <div className = 'a-right'>
            <form className = 'infoForm'>
                <h3>Sign In</h3>
                
                <div className = 'innerInputHolder'>
                    <input type = 'text' className = 'username infoInput' placeholder = 'Username' name = 'username' />
                </div>
                <div>
                    <input type='password' placeholder='Password' className='infoInput' name='password' />
                </div>
                <div>
                    <span style = {{fontSize: '12px'}}>Don't have an account? Create Account </span>
                </div>
                <button className = 'button infoBtn'>Sign In</button>
            </form>
        </div>
    )
}
export default LogIn