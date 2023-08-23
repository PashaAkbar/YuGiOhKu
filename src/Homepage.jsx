import Search from "./Search"
import Cards from "./Cards"
import { useState, useEffect } from "react"

function Homepage() {
    // const [name, setName] = useState("")
    // const [archetype, setArchetype] = useState("")
    const [cards, setCards] = useState([]);
    useEffect(()=>{
        reqCards()
    })

    async function reqCards() {
        const res = await fetch(
          `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=30&offset=30`
        );
        const json = await res.json();
    
        setCards(json['data']);
        // console.log()
      }


  return (
    <div className="flex flex-wrap justify-center">
        <Search/>
        {!cards.length  ? (<h1>Cards not found</h1>) : (<Cards cards={cards}/>)
        }
        
    </div>
  )
}

export default Homepage