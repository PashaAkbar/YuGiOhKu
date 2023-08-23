import './App.css'
import Homepage from './Homepage';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DetailsCard from './DetailsCard';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {

  return (
    <div>
       <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <div className='w-full'>
              <Link to="/"><h1 className='text-2xl'>Yu-Gi-Oh-Ku!</h1></Link>
              <Routes>
                <Route path="/details/:id" element={<DetailsCard />} />
                <Route path="/" element={
                <Homepage/>}/>
              </Routes>
              
            </div>
          </QueryClientProvider>
        </BrowserRouter>
    </div>
  )
}

export default App
