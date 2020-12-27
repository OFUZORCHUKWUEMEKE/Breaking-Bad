import React from 'react'
import CharacterItem from './CharacterItem'
import Spinnner from './Spinnner'

const CharacterGrid = ({isLoading,items}) => {
    return isLoading ? (
        <Spinnner/>
    ):(
        <section className="cards">
            {items.map((item)=>{
                return(
                  <CharacterItem item={item}/>
                )
            })}
        </section>
    )
        

}

export default CharacterGrid
