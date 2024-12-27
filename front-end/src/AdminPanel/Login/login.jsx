// import { useNavigate } from "react-router-dom"
// import "./login.css"
// import { useContext, useState } from "react"
// import { UserContext } from "../../../context/userContext/userContext"
// import login from "../../../api/login"



// const LoginPage = () => {

//     const navigate = useNavigate()
//     const { loginSubmit } = useContext(UserContext)
//     const [wrongLogin, setWrongLogin] = useState('')
//     const [loginForm,setLoginForm]=useState({
//         email: 'admin@gmail.com',
//         password: 'admin54321'
//     })

//     const LoginHandler = async (e) => {
//         e.preventDefault()
//         const formData = new FormData(e.target)

//         setLoginForm({
//             email: formData.get('email'),
//             password: formData.get('password')
//         })

//         try {
//             let loginUser = await login(loginForm);
//             if (loginUser.isAdmin) {
//                 loginSubmit();
//                 navigate('/admin');
//             }
//         } catch (error) {
//             setWrongLogin(error.message)
//         }

//     }

//     const changeHandler=(e)=>{
//        const {name,value}=e.target
//        setLoginForm(prev=>({
//         ...prev,
//         [name]:value
//        }))
//     }

//     return (
//         <div>
//             <p className="login-title">Admin panel</p>

//             <div className="login">
//                 {
//                     wrongLogin && <div className="wrong-login">{wrongLogin}</div>
//                 }
//                 <form onChange={changeHandler} onSubmit={LoginHandler}>
//                     <div className="login-input">
//                         <label>
//                             <p>Login</p>
//                             <input type="email" name='email' value={loginForm.email}/>
//                         </label>
//                     </div>
//                     <div className="login-input">
//                         <label>
//                             <p>Password</p>
//                             <input type="password" name='password' value={loginForm.password}/>
//                         </label>
//                     </div>
//                     <div className="login-submit">
//                         <input type="submit" value='Sign in' />
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default LoginPage;

//-----------------------------------------------------------------

// import { useNavigate } from "react-router-dom";
// import "./login.css";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { login  } from "../../Redux/userSlice";
// import login from "../../Requests/login";

// const LoginPage = () => {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const [wrongLogin, setWrongLogin] = useState('');
//     const [loginForm, setLoginForm] = useState({
//         email: '',
//         password: '',
//     });

//     const LoginHandler = async (e) => {
//         e.preventDefault();
//         const formData = new FormData(e.target);

//         setLoginForm({
//             email: formData.get('email'),
//             password: formData.get('password'),
//         });

//         try {
//             const loginUser = await login(loginForm);
//             if (loginUser.isAdmin) {
//                 dispatch(loginAction({
//                     email: loginForm.email,
//                     isAdmin: true,
//                 }));
//                 navigate('/admin');
//             }
//         } catch (error) {
//             setWrongLogin(error.message);
//         }
//     };

//     const changeHandler = (e) => {
//         const { name, value } = e.target;
//         setLoginForm((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };

//     return (
//         <div>
//             <p className="login-title">Admin panel</p>

//             <div className="login">
//                 {wrongLogin && <div className="wrong-login">{wrongLogin}</div>}
//                 <form onChange={changeHandler} onSubmit={LoginHandler}>
//                     <div className="login-input">
//                         <label>
//                             <p>Login</p>
//                             <input type="email" name="email" value={loginForm.email} />
//                         </label>
//                     </div>
//                     <div className="login-input">
//                         <label>
//                             <p>Password</p>
//                             <input type="password" name="password" value={loginForm.password} />
//                         </label>
//                     </div>
//                     <div className="login-submit">
//                         <input type="submit" value="Sign in" />
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default LoginPage;

//-------------------------------------------------------------

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login as loginAction } from "../../Redux/userSlice";
import login from "../../Requests/login";
import { useSelector } from "react-redux";
import "./login.css";

const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector((state) => state.user);
    
    const [wrongLogin, setWrongLogin] = useState("");
    const [loginForm, setLoginForm] = useState({
        email: "aliverdiyev05@inbox.ru",
        password: "shalbuz10",
    });

    const LoginHandler = async (e) => {
        e.preventDefault();

        try {
            const loginUser = await login(loginForm);
            if (loginUser.isAdmin) {
                dispatch(loginAction(loginUser)); // Dispatch the login action
                navigate("/admin");
            }
        } catch (error) {
            setWrongLogin(error.message);
        }
    };

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setLoginForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div>
            <p className="login-title">Admin panel</p>

            <div className="login">
                {wrongLogin && <div className="wrong-login">{wrongLogin}</div>}
                <form onChange={changeHandler} onSubmit={LoginHandler}>
                    <div className="login-input">
                        <label>
                            <p>Login</p>
                            <input onChange={changeHandler}  type="email" name="email" value={loginForm.email} />
                        </label>
                    </div>
                    <div className="login-input">
                        <label>
                            <p>Password</p>
                            <input onChange={changeHandler} type="password" name="password" value={loginForm.password} />
                        </label>
                    </div>
                    <div className="login-submit">
                        <input type="submit" value="Sign in" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { login as loginAction } from "../../Redux/userSlice";
// import login from "../../Requests/login";
// import "./login.css";

// const LoginPage = () => {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const [wrongLogin, setWrongLogin] = useState('');
//     const [loginForm, setLoginForm] = useState({
//         email: '',
//         password: '',
//     });
//     const [registerForm, setRegisterForm] = useState({
//         email: '',
//         password: '',
//         isAdmin: false,
//     });
//     const [message, setMessage] = useState('');
//     const [isRegistering, setIsRegistering] = useState(false);

//     const LoginHandler = async (e) => {
//         e.preventDefault();
//         const formData = new FormData(e.target);

//         setLoginForm({
//             email: formData.get('email'),
//             password: formData.get('password'),
//         });

//         try {
//             const loginUser = await login(loginForm);
//             if (loginUser.isAdmin) {
//                 dispatch(loginAction({
//                     email: loginForm.email,
//                     isAdmin: true,
//                 }));
//                 navigate('/admin');
//             }
//         } catch (error) {
//             setWrongLogin(error.message);
//         }
//     };

//     const RegisterHandler = async (e) => {
//         e.preventDefault();
//         const formData = new FormData(e.target);

//         setRegisterForm({
//             email: formData.get('email'),
//             password: formData.get('password'),
//             isAdmin: formData.get('isAdmin') === 'on',
//         });

//         try {
//             const response = await fetch('http://localhost:3001/register', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(registerForm)
//             });
//             const data = await response.json();
//             if (response.status === 201) {
//                 setMessage(data.message);
//                 setIsRegistering(false);
//             } else {
//                 setMessage(data.error);
//             }
//         } catch (error) {
//             setMessage('Ошибка при регистрации');
//         }
//     };

//     const changeHandler = (e) => {
//         const { name, value, type, checked } = e.target;
//         if (isRegistering) {
//             setRegisterForm((prev) => ({
//                 ...prev,
//                 [name]: type === 'checkbox' ? checked : value,
//             }));
//         } else {
//             setLoginForm((prev) => ({
//                 ...prev,
//                 [name]: value,
//             }));
//         }
//     };

//     return (
//         <div>
//             <p className="login-title">Admin panel</p>

//             <div className="login">
//                 {wrongLogin && <div className="wrong-login">{wrongLogin}</div>}
//                 {message && <div className="message">{message}</div>}
//                 <form onChange={changeHandler} onSubmit={isRegistering ? RegisterHandler : LoginHandler}>
//                     <div className="login-input">
//                         <label>
//                             <p>Email</p>
//                             <input type="email" name="email" value={isRegistering ? registerForm.email : loginForm.email} />
//                         </label>
//                     </div>
//                     <div className="login-input">
//                         <label>
//                             <p>Password</p>
//                             <input type="password" name="password" value={isRegistering ? registerForm.password : loginForm.password} />
//                         </label>
//                     </div>
//                     {isRegistering && (
//                         <div className="login-input">
//                             <label>
//                                 <p>Admin</p>
//                                 <input type="checkbox" name="isAdmin" checked={registerForm.isAdmin} />
//                             </label>
//                         </div>
//                     )}
//                     <div className="login-submit">
//                         <input type="submit" value={isRegistering ? "Register" : "Sign in"} />
//                     </div>
//                 </form>
//                 <button onClick={() => setIsRegistering(!isRegistering)}>
//                     {isRegistering ? "Already have an account? Sign in" : "Don't have an account? Register"}
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default LoginPage;