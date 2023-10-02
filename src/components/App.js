// import "../styles/App.css";
import Body from './Body'
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import FrontPage from './FrontPage';
import Products from './Products';

import ClothInfo from './ClothInfo';
import Login from './Login';
import Signup from './Signup';

function App() {

  const appRouter = createBrowserRouter([
    {
      path : "/",
      element: <Body/>,
      children : [
        {
          path:"/",
          element:<FrontPage/>
        },
        {
          path:"/menware",
          element: <Products/>
        },
        {
          path : "/womenware",
          element : <Products/>
        },
        {
          path : "/ClothInfo/:resId",
          element : <ClothInfo/>
        },
        {
          path:"/login",
          element : <Login/>
        },
        {
          path:"/signuppage",
          element:<Signup/>
        }
      ]
    }
  ])
  return <div >
    <RouterProvider router = {appRouter}/>
    </div>;
}

export default App;
