

import Header from "../components/header";
import Middle from "../components/middle";
import Todo from "../components/todo";



import {useLocation} from "react-router-dom"
function Langing(){
    const data=useLocation()
    console.log(data)
    return(    <div className='bg-black p-16'>
    <div className='bg-white border rounded-md p-10'>
      <Header name={data.state.user}></Header>
      <div className='flex justify-between gap-7 flex-wrap my-5 '>
      <Middle bg={"pink"} text={"karur"} para={"23"} ></Middle>
      <Middle bg={"yellow"} text={"12:00"} para={"26 Jan"} ></Middle>
      <Middle bg={"orange"} text={"react"} para={"Bulit using "} ></Middle>
      </div>
      {/*todo*/}
      <Todo></Todo>
    </div>

  </div>)
}

export default Langing