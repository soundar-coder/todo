function Last(props){
    return(
        <div>
        {/*input*/}
        <h1 className="m-2">Manage your activity</h1>
        <input onChange={props.n} value={props.value} placeholder="Next-activity" className='ml-2 border p-1 border-black'></input>
        <button onClick={props.s} className='bg-black p-1  text-white border border-black'>Add</button>
      </div>
    )
}

export default Last