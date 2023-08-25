// import Search from "./Search"
import Cards from "./Cards"
import {useContext, useState, useEffect } from "react"
import MyCardContext from "./MyCardContext";

const typeList = [
  { id: 1, type: 'Skill Card' },
  { id: 2, type: 'Spell Card' },
  { id: 3, type: 'Trap Card' },
  { id: 4, type: 'Normal Monster' },
  { id: 5, type: 'Normal Tuner Monster' },
  { id: 6, type: 'Effect Monster' },
  { id: 7, type: 'Tuner Monster' },
  { id: 8, type: 'Flip Monster' },
  { id: 9, type: 'Flip Effect Monster' },
  { id: 10, type: 'Flip Tuner Effect Monster' },
  { id: 11, type: 'Spirit Monster' },
  { id: 12, type: 'Union Effect Monster' },
  { id: 13, type: 'Gemini Monster' },
  { id: 14, type: 'Pendulum Effect Monster' },
  { id: 15, type: 'Pendulum Normal Monster' },
  { id: 16, type: 'Pendulum Tuner Effect Monster' },
  { id: 17, type: 'Ritual Monster' },
  { id: 18, type: 'Ritual Effect Monster' },
  { id: 19, type: 'Toon Monster' },
  { id: 20, type: 'Fusion Monster' },
  { id: 21, type: 'Synchro Monster' },
  { id: 22, type: 'Synchro Tuner Monster' },
  { id: 23, type: 'Synchro Pendulum Effect Monster' },
  { id: 24, type: 'XYZ Monster' },
  { id: 25, type: 'XYZ Pendulum Effect Monster' },
  { id: 26, type: 'Link Monster' },
  { id: 27, type: 'Pendulum Flip Effect Monster' },
  { id: 28, type: 'Pendulum Effect Fusion Monster' },
  { id: 29, type: 'Token' }
]

function Homepage() {
    // const [name, setName] = useState("")
    // const [archetype, setArchetype] = useState("")
    const myCard = useContext(MyCardContext)
    const [cards, setCards] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectType, setSelectType] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    
    useEffect(()=>{
        reqCards()
        console.log(myCard)
    })

    async function reqCards() {
        const res = await fetch(
          `https://db.ygoprodeck.com/api/v7/cardinfo.php`
        );
        const json = await res.json();
    
        setCards(json['data']);
        
        console.log(myCard)
        // console.log()
      }

      useEffect(()=>{
        const filteredResults = cards.filter(item =>{
          const matchSearchTerm = item.name.toLowerCase().includes(searchTerm.toLowerCase())
          const matchType = item.type.toLowerCase().includes(selectType.toLowerCase())

          if(selectType==''){
            return matchSearchTerm
          }
          else if(selectType!=''){
            return matchSearchTerm && matchType
          }
          else{
            return cards
          }
        }
          
        );
        setFilteredData(filteredResults);
      }, [searchTerm, selectType])

  return (
    <div className="flex flex-wrap justify-center">
      <div className="flex flex-col w-1/3">
        <div className='mt-3 rounded-md px-4 py-3 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 text-left h-max mx-2'>
                <h1 className='text-2xl py-2'>Cari Kartu</h1>
                <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 ">
                <label htmlFor="name" className="block text-xs font-medium text-gray-900 text-left">Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 px-2"
                    placeholder="Masukkan nama" onChange={(e)=>{
                      setSearchTerm(e.target.value)
                    }}
                />
                </div>
                 <label htmlFor="type" className="block text-sm font-medium leading-6 text-gray-900">
                  type
                </label>
                
                <select
                  id="type"
                  name="type"
                  className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 onChange={(e) => setSelectType(e.target.value)}>
                {typeList.map((option, index) => (
                  <option key={index} value={option.type}>
                    {option.type}
                  </option>
                ))}
              </select>
                {/* <div>
                    <button
                        type="button"
                        className="rounded-full mt-3 w-16 bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={()=>{

                        }}
                    >Cari
                 </button>
                </div> */}
                
            </div>
          {myCard[0] ? (
          <div className='w-1/3 mt-3 rounded-md px-4 py-3 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 text-left h-max mx-2'>
            <div className="text-md mb-2 text-center">My Card</div>
            <img src={myCard[0].card.card_images[0].image_url} alt={myCard[0].name} /> 

          </div>
        ) : null}
        </div>
        {!filteredData.length  ? (<h1>Cards not found</h1>) : <Cards cards={filteredData}/>
        }
        
    </div>
  )
}

export default Homepage