import React, {useState} from 'react'

function ChangePasswordForm({ checkOldPassword , error}){
    const [details, setDetails] = useState({name: "", email: "", password:"", password_new:"",password_rep:""});
    const [checkError, setCheckError] = useState("");
    //pass through detail 


    const handleCompare = (event) => {
        this.setDetails({...details, password_rep: event.target.value})
        if(this.details.password_new !== event.target.value){
            setCheckError("Password are not the same");
        }
        
    }
    
    const submitHandler = e =>{
        e.preventDefault();
        if(checkError !== ""){
            checkOldPassword(details);
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
                        onChange={(handleCompare)}
                        value = {details.password_rep}
                    />
                    {/*ERROR*/checkError !=="" ? (<div className='error'>{checkError}</div>) : "" }
                </div>
                <input type="submit" value="Confirm" />
                
            </div>
        </form>
    )

}

export default ChangePasswordForm