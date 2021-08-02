import React from 'react'

const Search = ({search , setInput}) => {
    const inputHandler = (e) =>{
        
        setInput(e.target.value)   // 每次改变都会调用setinput 方法 改变input 这个state的value
    }
    return (
        <div className ="search" >
            <input onChange={inputHandler} type="text"/>
            <button onClick ={search}>Search</button>
        </div>
    )
}

export default Search
