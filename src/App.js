import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Resgister from './pages/register/Resgister';
import Login from './pages/Login/Login';
import NavBar from './components/NavBar/NavBar';
import Products from './pages/Products/Products.jsx';
import Shoes from './pages/Products/Shoes/Shoes.jsx';
import Tshirts from './pages/Products/Tshirts/Tshirts.jsx';
import Balls from './pages/Products/Balls/Balls.jsx';
import Accessoires from './pages/Products/Accessoires/Accessoires.jsx';
import Basketball from './pages/Products/BasketBall Shirts/BasketBall-Jersey.jsx';
import Footer from './components/Footer/Footer.jsx';
import Profile from './pages/profile/Profile.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { current } from './JS/action/auth.action.js';
import Loading from './components/Loading/Loading.jsx';
import Error from "./pages/Error/Error";
import Admin from './components/Admin';
import CartPage from "./pages/Cart/CartPage.jsx";
import SearchResults from './pages/SearchResults.jsx';

function App() {
  const isAuth = useSelector(state => state.authReducer.isAuth);
  const isLoad = useSelector(state => state.authReducer.isLoad);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(current());
    }
  }, [dispatch]);

  return (
    <div className="App">
      {isLoad && <Loading />}
      <NavBar />

      <Routes>
        {/* 🏠 Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/tshirts" element={<Tshirts />} />
        <Route path="/balls" element={<Balls />} />
        <Route path="/accessoires" element={<Accessoires />} />
        <Route path="/BasketBall-Jersey" element={<Basketball />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/footer" element={<Footer />} />

        {/* 🔍 Search Route */}
        <Route path="/search/:keyword" element={<SearchResults />} />

        {/* 👤 Auth Routes */}
        {isAuth ? (
          <>
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin" element={<Admin />} />
          </>
        ) : (
          <>
            <Route path="/register" element={<Resgister />} />
            <Route path="/login" element={<Login />} />
          </>
        )}

        {/* ❌ Error / Not Found */}
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
