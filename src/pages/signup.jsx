import { Link } from "react-router-dom"
import { useState } from "react"
import {useNavigate} from  "react-router-dom"
function Signup(props){
  const sign=useNavigate()
    const User=props.User
    const setusername=props.setusername
    const [uname,setuname]=useState("")
    const [upasss,setupass]=useState("")
   
    function userr(event){
      setuname(event.target.value)
  }
  function passs(event){
      setupass(event.target.value)
  }

function s(){
   setusername([...User,{name:uname,password:upasss}])
   sign("/")

}

    return(
    <div className="login">
    <div >

    <div className="login__inside">
    <div className="head">
    <h3>Hey hi</h3>
    <p>You can sign up here?</p>
    </div>

    <div className="login__input">
      <input placeholder="Username" onChange={userr}></input><br></br>
      <input placeholder="Password" onChange={passs}></input><br></br>
      <input placeholder="Confirm password" ></input><br></br>
    </div>
    
        <button onClick={s} >Signup</button>
    <p>Do you have account login?<Link to={"/"}>Login</Link></p>
    </div>
</div>
</div>
)
}
export default Signup