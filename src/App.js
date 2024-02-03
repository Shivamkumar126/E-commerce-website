import { useState } from 'react';
import './App.css';
import { AllProductPage } from './components/AllProductPage';
import { CreateProduct } from './components/CreateProduct';
import { Navbar } from './components/Navbar';
import { RouterProvider , createBrowserRouter } from 'react-router-dom';




function App() {
  // const router = createBrowserRouter([
  //   {
  //     path:'/',
  //     element: <AllProductPage/>,
  //     children : [
        
  //       {
  //         path: 'addproduct',
  //         element: <CreateProduct />
  //       }
  //     ]
  //   }
  // ])

  
  return (
    <>
      <AllProductPage />
    
    </>
   
  );
}

export default App;
