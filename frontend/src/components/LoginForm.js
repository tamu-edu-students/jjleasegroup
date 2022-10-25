import React, {useState} from 'react'

function LoginForm({checkLogin , error}){
    const [details, setDetails] = useState({ email: "", password:""});
    
    //pass through detail 
    const submitHandler = e =>{
        e.preventDefault();
        checkLogin(details);
    }

    return(
        <form onSubmit={submitHandler}>  
            <div className='form-inner'>
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input 
                        type="email" name="emai" id="email" 
                        onChange={e=>setDetails({...details, email: e.target.value})} 
                        value = {details.email}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">password: </label>
                    <input 
                        type="password" name="password" id="password" 
                        onChange={e=>setDetails({...details, password: e.target.value})} 
                        value = {details.password}
                    />
                </div>
                <input type="submit" value="LOGIN" />
                {/*ERROR*/error !=="" ? (<div className='error'>{error}</div>) : "" }
            </div>
        </form>
    )

}

export default LoginForm