import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { StarIcon } from '@heroicons/react/20/solid'
import fetchCard from './fetchCards';
import { useContext, useState } from "react";
import Modal from './Modal'
import MyCardContext from "./MyCardContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
function DetailsCard() {
    const {id} = useParams()
    const [showModal, setShowModal] = useState(false);
    const results = useQuery(['details',id], fetchCard)
    
    // const [_,setMyCard] = useContext(MyCardContext)

    if (results.isLoading) {
        return (
          <div className="loading-pane">
            <h2 className="loader">🌀</h2>
          </div>
        );
      }
      const card = results.data.data[0];
      // console.log(card)
  
  return (
    <div className="pb-16 pt-6 sm:pb-24">
        <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ol role="list" className="flex items-center space-x-4">
            <li className="text-sm">
              <div className="font-medium text-gray-500 hover:text-gray-600">
                {card.name}
              </div>
            </li>
          </ol>
        </nav>
        <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="flex justify-between">
                <h1 className="text-xl font-medium text-gray-900">{card.name}</h1>
                <p className="text-xl font-medium text-gray-900">${card.card_prices[0].cardmarket_price}</p>
              </div>
              <div>
              <h2 className="text-md font-medium text-gray-900 text-left">Archetype : {card.archetype}</h2>
              <div className='flex'>
                <h3 className="text-md font-medium text-gray-700 text-left mr-4">Atk : {card.atk}</h3>
                <h3 className="text-md font-medium text-gray-700 text-left">Def : {card.def}</h3>
              </div>
              <h3 className="text-md font-medium text-gray-700 text-left">Type : {card.type}</h3>
              
              </div>
              {/* Reviews */}
              <div className="mt-4">
                <h2 className="sr-only">Reviews</h2>
                <div className="flex items-center">
                  <p className="text-sm text-gray-700">
                    {card.level}
                    <span className="sr-only"> out of 5 stars</span>
                  </p>
                  <div className="ml-1 flex items-center">
                    {[0, 1, 2, 3, 4].map((rate) => (
                      <StarIcon
                        key={rate}
                        className={classNames(
                          card.level > rate ? 'text-yellow-400' : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <div aria-hidden="true" className="ml-4 text-sm text-gray-300">
                    ·
                  </div>

                </div>
              </div>
            </div>

            {/* Image gallery */}
            <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
              <h2 className="sr-only">Images</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                <img
                src={card.card_images[0].image_url}
                className='lg:col-span-2 lg:row-span-2 hidden lg:block rounded-lg'
                />
     
              </div>
            </div>

            <div className="mt-8 lg:col-span-5">
              <form>
                <h1 onClick={()=>{
                  setShowModal(true)
                }}
                  type="submit"
                  className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >Tambahkan
                </h1>
              </form>
              {showModal ? (
              <Modal card={card}>
              </Modal>
            ) : null}

              {/* Product details */}
              <div className="mt-10">
                <h2 className="text-md font-medium text-gray-900">Description</h2>
                <h3 className='text-sm font-medium text-gray-700'>{card.desc}</h3>

                <div
                  className="prose prose-sm mt-4 text-gray-500"
                />
              </div>

              <div className="mt-8 border-t border-gray-200 pt-8">
                <h2 className="text-sm font-medium text-gray-900">Card Sets</h2>
                <div className="prose prose-sm mt-4 text-gray-500">
                  <div className="list flex justify-around">
                    {card.card_sets.map((set) => (
                        <div className='w-1/2' key={set}>
                            <h3 key={set}>set code : {set.set_code}</h3>
                            <h3 key={set}>set name : {set.set_name}</h3>
                            <h3 key={set}>set price : ${set.set_price}</h3>
                            <h3 key={set}>set rarity : ${set.set_rarity}</h3>
                            <h3 key={set}>set rarity code: ${set.set_rarity_code}</h3>
                        </div>
                      
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default DetailsCard