import { useState } from "react"
import "./style.css"


export default function SignIn(){

const [emailAdress, setEmailAdress] = useState("")
const [password, setPassword] = useState("")

const handleSubmit = () =>{
    console.log({
        emailAdress,
        password
    })
}

// if(emailAdress.trim().length === 0 || password.trim().length === 0){
//     return alert("შეავსე ყველა ველი")
// }


    return(
        <div className="screen">
            <div className="cornerDivLeft"></div>
            <div className="cornerDivRight"></div>
            <div className="sigINContainer">
                <h1>Create An Account</h1>
                <p>Create an account to enjoy all the services without any ads for free!</p>
                <input type="text" placeholder="Email adress" onChange={(e) => setEmailAdress(e.target.value)}/>            
                <input type="password" placeholder="Password" onChange={(e) => setPassword (e.target.value)} />
                <button onClick={handleSubmit}>Create Account</button>
                <p id="alreadyHaveAccount">Already Have An Account? <span>Sign In</span></p>
            </div>
        </div>
    )
}