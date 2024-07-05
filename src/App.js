import { useEffect, useState } from "react"
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { UserContextProvider } from './utilities/context/UserContext';
import store from "./utilities/redux/store";
import { Provider } from "react-redux";
import { ContextProvider } from "./utilities/context/Context";
import Themeprovider from "./theme/ThemeProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { appRoutes } from "./routes/routes";
import { ClerkProvider } from '@clerk/clerk-react'

function App() {
  const [user, setUser] = useState("")

  const PUBLISHABLE_KEY = "pk_test_cmVuZXdlZC1taXRlLTU0LmNsZXJrLmFjY291bnRzLmRldiQ"
  if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
  }

  return (
    <div>
      <Provider store={store}>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <Themeprovider>
            <UserContextProvider value={{
              user,
              setUser
            }}>
              <ContextProvider>
              <ToastContainer />
              <RouterProvider router={appRoutes} />
              </ContextProvider>
            </UserContextProvider>
        </Themeprovider>
        </ClerkProvider>
      </Provider>
    </div>
  );
}

export default App;
