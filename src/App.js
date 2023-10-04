import { useEffect, useState } from "react"
import './App.css';
import Main from "./layouts/Main";
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import About from "./pages/About"
import { UserContextProvider } from './utilities/context/UserContext';
import store from "./utilities/redux/store";
import { Provider, useDispatch } from "react-redux";
import Cart from "./pages/Cart";
import Offers from "./pages/Offers";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Payment from "./pages/Payment";
import { ContextProvider } from "./utilities/context/Context";
import Specific from "./pages/SpecificRestDetail";
import Themeprovider from "./theme/ThemeProvider";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utilities/firebase";
import { addUser, removeUser } from "./utilities/redux/userSlice";

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

  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // will be executed whenever sign-in or sing-up is done by the user
        const { uid, email, displayName } = user.uid;
        // passing payload to the action
        dispatch(addUser({ udi: uid, email: email, displayName: displayName }))
      } else {
        // User is signed out
        dispatch(removeUser())
      }
    });
  }, [])

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
