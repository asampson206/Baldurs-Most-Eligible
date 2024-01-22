import Home from "./App"
import Shadowheart from "./Shadowheart"
import Karlach from "./Karlach"
import Astarion from "./Astarion"
import ErrorPage from "./ErrorPage"

const Routes = [
    {path: "/",
      element: <Home />,
      errorElement: <ErrorPage /> },
      {path: "/Karlach",
      element: <Karlach  />,
      errorElement: <ErrorPage /> },
      {path: "/Astarion",
      element: <Astarion />,
      errorElement: <ErrorPage /> },
      {path: "/Shadowheart",
      element: <Shadowheart />,
      errorElement: <ErrorPage /> },
      
     
    ]
  
  export default Routes