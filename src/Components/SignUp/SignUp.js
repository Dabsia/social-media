import React from 'react'
import './SignUp.css'


const Authentication = () => {
    return (
        <div className = 'a-right'>
            <form className = 'infoForm'>
                <h3>Sign Up</h3>
                <div>
                    <input type='text' placeholder='FirstName' className='infoInput' name='fname' />
                      <input type = 'text' placeholder = 'LastName' className = 'infoInput' name = 'lname' />
                </div>
                <div className = 'innerInputHolder'>
                    <input type = 'text' className = 'username infoInput' placeholder = 'Username' name = 'username' />
                </div>
                <div>
                    <input type='password' placeholder='Password' className='infoInput' name='password' />
                      <input type = 'password' placeholder = 'Confirm Password' className = 'infoInput' name = 'conpassword' />
                </div>
                <div>
                    <span style = {{fontSize: '12px'}}>Already have an account? Login </span>
                </div>
                <button className = 'button infoBtn'>Create Account</button>
            </form>
        </div>
    )
}
export default Authentication