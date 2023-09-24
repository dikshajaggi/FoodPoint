import { useState } from "react"
import './App.css';
import Main from "./layouts/Main";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from "./pages/About"
import { UserContextProvider } from './utilities/context/UserContext';
import store from "./utilities/redux/store";
import { Provider } from "react-redux";
import Cart from "./pages/Cart";
import Offers from "./pages/Offers";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Payment from "./pages/Payment";
import { ContextProvider } from "./utilities/context/Context";
import Specific from "./pages/SpecificRestDetail";
import Themeprovider from "./theme/ThemeProvider";

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
        <Themeprovider>
          <ContextProvider>
            <UserContextProvider value={{
              user,
              setUser
            }}>
              <RouterProvider router={appRoutes} />
            </UserContextProvider>
          </ContextProvider>
        </Themeprovider>
      </Provider>
    </div>
  );
}

export default App;
