
import user_icon from '../assets/user_icon.png';
import email_icon from '../assets/email_icon.png';
import password_icon from '../assets/password_icon.png';
import './LoginSignup.css'

const LoginSignup = () => {
    return (
        <div className="container">
            <div className='header'>
                <div className='text'>Sign Up</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img src={user_icon} alt="" />
                    <input type="text" />
                </div>
                <div className='input'>
                    <img src={email_icon}
                        alt="" />
                    <input type="email" />
                </div>
                <div className='input'>
                    <img src={password_icon}
                        alt="" />
                    <input type="password" />
                </div>
            </div>
            <div className='forgot-password'>Lost Password <span>Click Here</span></div>
            <div className="submit-container">
                <div className='submit'>Sign Up</div>
                <div className='submit'> Login</div>
            </div>
        </div>

    )
}
export default LoginSignup;