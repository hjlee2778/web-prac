import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Product from './components/Product';
import Root from './components/Root';
import ProductList from './components/ProductList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {index: true, element: <Home/>},
      {path: "/product", element: <ProductList/>},
    ],
  }
]);


const App = () => {
  return <RouterProvider router={router}/>;
}

export default App;
