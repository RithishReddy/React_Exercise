import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { Navbar } from "./components/Navbar";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient=new QueryClient()
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products/:id" element={<Products />}></Route>
          {/* <Route path='*'></Route> */}
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
