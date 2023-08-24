import { Link } from "react-router-dom";
// import { useState } from "react";

function Cards(cards) {

    return (
        <nav className="w-1/3 h-screen overflow-y-auto mx-2 mt-3 text-left shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 rounded-md">
            
          {cards.cards.slice(0, 30).map((res) => (
            <Link to={`/details/${res.id}`} key={res.id}>
            <div key={res.id} className="relative cursor-pointer">
              <ul role="list" className="divide-y divide-gray-100">
                <li key={res.id} className="flex gap-x-4 px-3 py-5">
                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={res.card_images[0].image_url} alt="" />
                <div className="min-w-0">
                    <p className="text-sm font-semibold leading-6 text-gray-900">{res.name}</p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{res.desc}</p>
                </div>
                </li>
              </ul>
            </div>
            </Link>
           
          ))}
        </nav>
    )
}

export default Cards

