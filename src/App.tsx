import { useState, useCallback, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Helpers/Theme/index";
import { GlobalStyles } from "./Helpers/globalStyle";
import { Routes, Route } from "react-router";
import HomePage from "./Pages/HomePage/homePage";
import LoginPage from "./Pages/AuthPages/LoginPage/loginPage";
import SignUpPage from "./Pages/AuthPages/SignUpPage/signUpPage";
import CreateProductPage from "./Pages/CreateProductPage/createProductPage";
import PaymentPage from "./Pages/PaymentPage/paymentPage";
import ProductPage from "./Pages/ProductPage/productPage";
import ProfilePage from "./Pages/ProfilePage/profilePage";
import ReviewPage from "./Pages/ReviewPage/reviewPage";
import SearchPage from "./Pages/SearchPage/searchPage";
import OrdersAdminPage from "./Pages/AdminPages/OrdersAdminPage/ordersAdminPage";
import ProductsAdminPage from "./Pages/AdminPages/ProductsAdminPage/productsAdminPage";
import UsersAdminPage from "./Pages/AdminPages/UsersAdminPage/usersAdminPage";
import Counter from "./Components/Elements/Counter/counter";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = useCallback(() => {
    if (theme === "dark") {
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  }, [theme]);

  useEffect(() => {
    let theme_ = localStorage.getItem("theme");

    if (theme_) {
      setTheme(theme_);
    }
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles {...(theme === "dark" ? darkTheme : lightTheme)} />
        <Routes>
          {/* add header  */}
          
          {/* Auth */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/singUp" element={<SignUpPage />} />
          {/* Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/createProduct" element={<CreateProductPage />} />
          <Route path="/paymentProduct" element={<PaymentPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/reviewProduct" element={<ReviewPage />} />
          <Route path="/searchProduct" element={<SearchPage />} />
          {/* Admin Page */}
          <Route path="/users" element={<UsersAdminPage />} />
          <Route path="/products" element={<ProductsAdminPage />} />
          <Route path="/orders" element={<OrdersAdminPage />} />
          {/* notFoundPage */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
