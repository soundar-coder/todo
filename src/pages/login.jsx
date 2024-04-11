import { useState } from "react"
import { Link } from "react-router-dom"
import {useNavigate} from "react-router-dom"



function Login(props){
    const nav=useNavigate()
    const User =props.User
    
    const [uname,setuname]=useState("")
    
    const [upass,setupass]=useState("")
    const [ruser,setruser]=useState(true)

    function userr(event){
        setuname(event.target.value)
    }
    function passs(event){
        setupass(event.target.value)
    }
    function loginn()

    {
        var userfound=false
        User.forEach(function(item){
          console.log(item)

            if(item.name===uname && item.password===upass ){
                console.log("sccessfull")
                userfound=true
                nav("/langing",{state:{uname}})
            }
      
          
        })
        if(userfound==false){
            console.log("unsccesfully")
            setruser(false)
        }
    }

    return(<div className="login">
        <div className="login__inside">
        <div className="head">
        <h3>Hey hi</h3>
        {ruser?<p>I will help to manage your activity :)</p>:<p>plz sign up before login</p>}
        </div>

        <div className="login__input">
          <input placeholder="Username"  onChange={userr}></input><br></br>
          <input placeholder="Password"  onChange={passs}></input><br></br>
          
        </div>

            <button onClick={loginn}>Login</button>
        <p>Don't have an account? <Link to={"/Signup"}>signup</Link></p>
        </div>
        </div>
   )
}

export default Login