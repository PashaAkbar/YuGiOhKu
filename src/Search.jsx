function Search() {
    return (
            <div className='w-1/3 mt-3 rounded-md px-4 py-3 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 text-left h-max mx-2'>
                <h1 className='text-2xl py-2'>Cari Kartu</h1>
                <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 ">
                <label htmlFor="name" className="block text-xs font-medium text-gray-900 text-left">Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 px-2"
                    placeholder="Masukkan nama"
                />
                </div>
                <div className="rounded-md mt-2 px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 ">
                    <label htmlFor="name" className="block text-xs font-medium text-gray-900 text-left">Archetype
                    </label>
                    <input
                        type="text"
                        name="archetype"
                        id="archetype"
                        className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 px-2"
                        placeholder="Masukkan archetype"
                    />
                </div>
                <div>
                    <button
                        type="button"
                        className="rounded-full mt-3 w-16 bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >Cari
                 </button>
                </div>
                
            </div>
            
          )
}

export default Search