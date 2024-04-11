import { useState } from "react"
import Last from "./last"
function Todo(){
    
    const [list,setlist]=useState([{id:1,act:"Write your goals"}])
    const [store,setstore]=useState("")
    function n(event){
        setstore(event.target.value)
    }
    function s(){
        setlist([...list,{id:list.length+1,act:store}])
       setlist("")
    }
    function d(removeid){
        console.log("soundar")
        var a=list.filter(function(item){
            if(removeid==item.id){
                return false
            }
            else{
                return true
            }
        })
        setlist(a)
    }
    return(<div className="flex gap-5 flex-wrap ">
         <Last n={n} s={s} value={store}></Last>
      <div>
        {/*delte*/}
        {}
        <h1 className="p-2">Today Activity</h1>
        <ol className="bg-pink-400 p-5 text-white">
        {list.length===0?<p>you have no activity</p>:""}
            {
                
            list.map(function(item,index){
                return <li className="">{index+1}.{item.act} <button onClick={()=>{d(item.id)}} className="bg-violet-600 p-2">delete</button></li>
           })
            }
        </ol>
      </div>
    </div>)
}
export default Todo 