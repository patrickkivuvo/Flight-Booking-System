import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const switcher = (e) => {
    e.preventDefault();
    let card1 = document.querySelector('.card1');
    let card2 = document.querySelector('.card2');
    card2.style.scale = 0;
    card1.style.scale = 1;
};

const switcher2 = (e) => {
    e.preventDefault();
    let card1 = document.querySelector('.card1');
    let card2 = document.querySelector('.card2');
    card2.style.scale = 1;
    card1.style.scale = 0;
};

const Form = () => {
    const [data, setData] = useState({});

    const [logData, setLogData] = useState({});

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const handleReg = async (event) =>{
        event.preventDefault()
        try {
            const res = await axios.post('http://localhost:8080/user-admin' ,data);
            //console.log(res);
            window.location = '/login'
        } catch (error) {
            console.log("data")
            // alert('error while trying to regester account');
        }
    }
    console.log(data)
    const handleLog = async (event) =>{
       // event.preventDefault()
        try {
            event.preventDefault();
            const res = await axios.get('http://localhost:8080/user-admin');
            window.location = '/flights'
            // console.log(res.data)
            
        } catch (error) {
            alert('error while trying to logging');
        }
    }
    return (
        <div className='contactPage'>
            <div className="algeria">
            <div className="bamako"></div>
            <div className="isiolo flex relative">
                <div className="card1 absolute">
                    <div className="relative me">
                        <h3>Create<br/> Account</h3>
                        <form className="flex flex2 absolute" name='createAccount' onSubmit={handleReg}>
                            <input 
                                type="text" 
                                placeholder="User Name" 
                                name="Username" 
                                id="name" 
                                required
                                onChange = {(e) =>{
                                    setData({...data,username:e.target.value})
                                 }}
                            />
                            <input 
                                type="password" 
                                placeholder="Password" 
                                name="password" 
                                id="password" 
                                required
                                onChange = {(e) =>{
                                    setData({...data,password:e.target.value})
                                 }}
                            />
                            <section className="flex flex2">
                                <button type="submit" className="signUp button">
                                    Signup
                                    <span className="arrow">&rarr;</span>
                                </button><br/>
                                <button 
                                    className="button"
                                    onClick={e => switcher2(e)}
                                >
                                    Login
                                </button>
                            </section>
                        </form>
                    </div>
                </div>
                
                <div className="card2 absolute">
                    <div className="relative">
                        <h3>Welcome<br/> Back</h3>
                        <form className="flex flex2 absolute" onSubmit={handleLog}>
                            <input 
                                type="text" 
                                placeholder="User Name" 
                                name="userName" 
                                required
                                onChange = {(e) =>{
                                    setLogData({...data,userName:e.target.value})
                                 }}
                            />
                            <input 
                                type="password" 
                                placeholder="Password" 
                                name="passw" 
                                required
                                onChange = {(e) =>{
                                    setLogData({...data,passw:e.target.value})
                                 }}
                            />
                            <section className="flex flex2">
                                <button type="submit" className="signUp button">
                                    Login
                                    <span className="arrow">&rarr;</span>
                                </button>                
                                <div className="relative flex flex2">
                                    <button 
                                        className="button"
                                        onClick={e => switcher(e)}
                                    >
                                        Signup Now
                                    </button>
                                    <a href="#" className="absolute">forgot password</a>
                                </div>
                            </section>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );

};                              
export default Form;
