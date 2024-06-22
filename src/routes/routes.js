import Fav from "../pages/Fav";
import WelcomePage from "../pages/WelcomePage";
import ProtectedRoute from "../utilities/ProtectedRoutes";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TnC from "../pages/TnC";
import Orders from "../pages/Orders";
import OrderTrackingMap from "../pages/OrderTrackingMap";
import DishDiscoveryGpt from "../pages/DishDiscoveryGpt";
import Specific from "../pages/SpecificRestDetail";
import Cart from "../pages/Cart";
import Offers from "../pages/Offers";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Payment from "../pages/Payment";
import Main from "../layouts/Main";
import { createBrowserRouter } from 'react-router-dom';
import About from "../pages/About"
import Disclaimer from "../pages/Disclaimer";
import Search from "../pages/Search";
import Category from "../pages/Category";

export const appRoutes = createBrowserRouter([
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
    element:
      <ProtectedRoute>
        <WelcomePage />
      </ProtectedRoute>

  },
  {
    path: "/main",
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
    path: "/orders",
    element: <Orders />
  },
  {
    path: "/map",
    element: <OrderTrackingMap />
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
  },
  {
    path: "/fav-restaurant",
    element: <Fav />
  },
  {
    path: "/search",
    element: <Search />
  },
  {
    path: "/category/:id",
    element: <Category />
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />
  },
  {
    path: "/terms_conditions",
    element: <TnC />
  },
  {
    path: "/disclaimer",
    element: <Disclaimer />
  },
  {
    path: "/gpt-dish-discovery",
    element: <DishDiscoveryGpt />
  }
])