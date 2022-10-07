
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Component/about/About';
import Inventory from './Component/inventory/Inventory';
import Orders from './Component/Orders/Orders';
import Shopes from './Component/Shopes/Shopes';
import Main from './Layouts/Main';
import { ProductsAndCartLoader } from './loaders/ProductsAndCartLoader';

function App() {
  const router = createBrowserRouter([
    { path: '/' , element: <Main/>,
    children: [
      {
    path: '/',
    loader: () => fetch ('products.json'),
    element: <Shopes></Shopes>
    },

    {
      path: 'orders',
      loader: ProductsAndCartLoader,
      element: <Orders></Orders>
    },
    {
      path: 'inventory',
      element: <Inventory></Inventory>
    },
    {
       path: 'about',
      element: <About></About> 
    }
  ]
  },
    
  ])
  return (
    <div>
     <RouterProvider router ={router}  ></RouterProvider>
    </div>
  );
}

export default App;
