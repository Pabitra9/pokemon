import React from "react";

const Info = ({ data }) => {
    // console.log(data);
    return (
        <>
            {
                (!data) ? "" : (
                    <>
                        <h1><u>{data.name}</u></h1>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
                        <div className="abilities" id="abilities">
                            {
                                data.abilities.map(poke => {
                                    return(
                                        <div className="group" id="group">
                                        <h2>{poke.ability.name }</h2>
                                    </div>
                                    )
                                    
                                })
                            }
                        </div>
                        <div className="base-stats" id="base-stats">
                            {
                                data.stats.map(poke=>{
                                    return(
                                        <>
                                            <h3>{poke.stat.name}:{poke.base_stat}</h3>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </>
                )
            }
        </>
    )
}
export default Info;