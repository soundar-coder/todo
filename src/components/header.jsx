
function Header(props){
  
    return(
        <div>
            <h1 className='font-medium text-3xl' >Hi {props.name} </h1>
            <p >I help you manage your activity!</p>
        </div>
    )
}

export default Header