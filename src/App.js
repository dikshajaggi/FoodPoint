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
import { io } from "socket.io-client";

function App() {
  const [user, setUser] = useState("")
  const message = '1213435';

  const socket = io('http://localhost:8000');

  const PUBLISHABLE_KEY = "pk_test_cmVuZXdlZC1taXRlLTU0LmNsZXJrLmFjY291bnRzLmRldiQ"
  if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
  }

  const sendMessage = () => {
    socket.emit('order_id', message);
    socket.on('order_status_update', (msg) => {
      console.log(msg, "order status")
    })
  };


  useEffect(() => {
    // Clean up the socket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  
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
              <button onClick={sendMessage}>Send</button>
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
