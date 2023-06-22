import React, { useEffect, useState } from "react";
import Card from "./Card";
import Info from "./Info";
import axios from "axios";
const Main=()=>{
    const[data,setData]=useState([]);
    const[loading,setLoading]=useState(true);
    const[url,setUrl]=useState(`https://pokeapi.co/api/v2/pokemon/`);
    const[nextUrl,setNexturl]=useState();
    const[previousUrl,setPreviousurl]=useState();
    const[pokeDex,setPokedex]=useState();

        const pokeFun=async()=>{
            setLoading(true)
            const res=await axios.get(url);
            // console.log(res.data.results);
            setNexturl(res.data.next);
            setPreviousurl(res.data.previous);
            getpokeData(res.data.results);
            setLoading(false);
           // console.log(data);
        }

        const getpokeData=async(x)=>{
                x.map(async(item)=>{
                    const result=await axios.get(item.url);
                    // console.log(result.data)
                    setData(state=>{
                        state=[...state,result.data]
                        state.sort((a,b)=>a.id>b.id?1:-1)
                        return state;
                    })
                  })
        }
    useEffect(()=>{
        pokeFun();
    },[url])
    return(
        <>
            <div className="container" id="container">
                <div className="left-contain" id="left-container">
                    <Card pokemon={data} loading={loading} infoPokemon={poke=>setPokedex(poke)}/>
                    
                    <div className="btn" id="btn">
                    {previousUrl && <button onClick={()=>{
                        setData([])
                        setUrl(previousUrl)
                    }}>Previous</button>}
                    {nextUrl &&<button onClick={()=>{
                        setData([])
                        setUrl(nextUrl)
                    }}>Next</button>}
                    </div>

                </div>
                <div className="right-contain" id="right-contain">
                <Info data={pokeDex}/>
                </div>
            </div>
        </>
    )
}
export default Main;