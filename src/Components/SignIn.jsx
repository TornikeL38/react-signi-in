import "./style.css"


export default function SignIn(){
    return(
        <div className="screen">
            <div className="cornerDivLeft"></div>
            <div className="cornerDivRight"></div>
            <div className="sigINContainer">
                <h1>Create An Account</h1>
                <p>Create an account to enjoy all the services without any ads for free!</p>
                <input type="text" placeholder="Email adress"/>
                <input type="password" placeholder="Password"/>
                <button>Create Account</button>
                <p id="alreadyHaveAccount">Already Have An Account? <span>Sign In</span></p>
            </div>
        </div>
    )
}