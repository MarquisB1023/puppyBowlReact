import {useState} from 'react'
import {link } from 'react-router-dom'

function Nav({puppies, setPuppies}){
    

    return (
        <>
        <form onSubmite ={searchArray}>
            <label>
                search:
            <input
             name ="search"
             value ={searchVal}
             onChange = {(e)=>setSeatchValue(e.target.value)}
             >
            </input>
            </label>
            <input
             name ="submit"
             type ="submit"
             value="search"
           
             >
            </input>
        </form>
        </>
    )
}

export default Nav