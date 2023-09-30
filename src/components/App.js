// import "../styles/App.css";
import Body from './Body'
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import FrontPage from './FrontPage';
import MenWare from './MenWare';
import WomenWare from './WomenWare';
import ClothInfo from './ClothInfo';

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
          element: <MenWare/>
        },
        {
          path : "/womenware",
          element : <WomenWare/>
        },
        {
          path : "/ClothInfo/:resId",
          element : <ClothInfo/>
        }
      ]
    }
  ])
  return <div >
    <RouterProvider router = {appRouter}/>
    </div>;
}

export default App;
