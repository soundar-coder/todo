function Middle(props) {
    return (
    
         <div  style={{backgroundColor:props.bg}} className='text-center m-2 px-10 py-5 flex-grow '>
           <h1>{props.para}</h1>
           <p>{props.text}</p>
         </div>
   
      )}

      export default Middle