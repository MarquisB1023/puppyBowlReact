
import {useState} from 'react'
import axios from 'axios'

const APIURL="https://fsa-puppy-bowl.herokuapp.com/api/2308-ACCT-ET-PT-B/teams"
function AllPlayerView({puppies, setPuppies}){
    cont = [searchVale,setSearchVale] = useState("")
    const  [searchedPuppies,setSearchedPuppies] = useState(puppies)
    const  searchArray = (e)=>{
        e.preventDefault()
      const newArray =puppies.filter(puppy=>{
        const puppyName = puppy.name
        if(puppyName.indexOf(SearchVal)>0){
            return puppy
        }
        console.log(newArray)
      })
      setSearchedPuppies(newArray)
    }


    return (
        <>
        <div className="AllPlayers">

            {searchedPuppies && puppies.map(puppy=> <img src ={puppy.imageURL} alt=""/>)}

        </div>
        </>
    )
}


export default AllPlayerView