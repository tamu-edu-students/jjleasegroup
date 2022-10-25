import React, {useCallback, useEffect, useState} from 'react'
//import APIService from "../APIService";

function ChangePasswordForm({ checkOldPassword , error}){
    const [details, setDetails] = useState({name: "", email: "", password:"", password_new:"",password_rep:""});
    const [checkError, setCheckError] = useState("");
    //pass through detail 


    const handleCompare = event => {
        
        setDetails({...details, password_rep: event.target.value})
        
        if(event.target.value !== details.password_new){
            setCheckError("Password are not the same");
        }else{
            setCheckError("");
            console.log("two password match");
        }
    }
    // const submitHandler = e =>{
    //     e.preventDefault();
    //     console.log("=====step1 check two password match=====");
    //     if(details.password_new !== details.password_rep){
    //         console.log("two password not match");
    //         if(checkError){
                
    //         }
            
    //     }else{
    //         setCheckError("");
    //         console.log("two password match");
    //         checkOldPassword(details, "");
    //     }
        
    // }
    // useEffect(()=>{
    //     checkOldPassword(details,checkError);
    // }, [checkError]);

    const submitHandler = e =>{
        e.preventDefault();
        console.log("=====step1 check two password match=====");
        if(details.password_new !== details.password_rep){
            console.log("two password not match");
            setCheckError("Password are not the same");
            checkOldPassword(details, "password wrong");
        }else{
            setCheckError("");
            console.log("two password match");
            checkOldPassword(details, "");
        }
        
    }
    return(
        <form onSubmit={submitHandler}>  
            <div className='form-inner'>
                <h2>Change Password</h2>           
                <div className="form-group">
                    <label htmlFor="password">Old password: </label>
                    <input 
                        type="password" name="password_old" id="password_old" 
                        onChange={e=>setDetails({...details, password: e.target.value})} 
                        value = {details.password}
                        />
                </div>
                
                <div className="form-group">
                    <label htmlFor="password">New password: </label>
                    <input 
                        type="password" name="password_new" id="password_new" 
                        onChange={e=>setDetails({...details, password_new: e.target.value})} 
                        value = {details.password_new}
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="password">Repeat password: </label>
                    <input 
                        type="password" name="password_rep" id="password_rep" 
                        onChange={e=>setDetails({...details, password_rep: e.target.value})}
                        value = {details.password_rep}
                    />
                    {/*ERROR*/checkError !=="" ? (<div className='error'>{checkError}</div>) : "" }
                </div>
                <input type="submit" value="Confirm" />
                {/*ERROR*/error !=="" ? (<div className='error'>{error}</div>) : "" }
            </div>
        </form>
    )

}

export default ChangePasswordForm