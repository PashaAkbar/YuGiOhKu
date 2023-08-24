import './App.css'
import Homepage from './Homepage';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DetailsCard from './DetailsCard';
import MyCardContext from './MyCardContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  const myCard = useState(null);

  return (
    <div>
       <BrowserRouter>
       <MyCardContext.Provider value={myCard}>
        <QueryClientProvider client={queryClient}>
            <div className='w-full'>
              <Link to="/"><h1 className='text-2xl mb-4'>Yu-Gi-Oh-Ku!</h1></Link>
              <Routes>
                <Route path="/details/:id" element={<DetailsCard />} />
                <Route path="/" element={
                <Homepage/>}/>
              </Routes>
              
            </div>
          </QueryClientProvider>
          </MyCardContext.Provider>
        </BrowserRouter>
    </div>
  )
}

export default App
