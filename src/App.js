import { useState } from "react"
import './App.css';
import Main from "./components/Main";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Specific from './components/Specific';
import About from "./components/About"
import { UserContextProvider } from './Utility/Context/UserContext';
import store from "./Utility/Redux/store";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
import { ContextProvider } from "./Utility/Context/Context";
import Offers from "./components/Offers";
import Login from "./components/User auth/Login";
import SignUp from "./components/User auth/SignUp";
import Payment from "./components/Payment";

function App() {
  const appRoutes = createBrowserRouter([
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <SignUp />
    },
    {
      path: "/",
      element: <Main />
    },
    {
      path: "/rest/:id",
      element: <Specific />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/cart",
      element: <Cart />
    },
    {
      path: "/offers",
      element: <Offers />
    },
    {
      path: "/rating",
      element: <Main />
    },
    {
      path: "/delivery-time",
      element: <Main />
    },
    {
      path: "/cost-low-to-high",
      element: <Main />
    },
    {
      path: "/cost-high-to-low",
      element: <Main />
    },
    {
      path: "/payment",
      element: <Payment />
    }
  ])

  const [user, setUser] = useState("")
  return (
    <div>
      <Provider store={store}>
        <ContextProvider>
          <UserContextProvider value={{
            user,
            setUser
          }}>
            <RouterProvider router={appRoutes} />
          </UserContextProvider>
        </ContextProvider>
      </Provider>
    </div>
  );
}

export default App;
