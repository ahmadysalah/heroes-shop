import { Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Helpers/Theme/index";
import { GlobalStyles } from "./Helpers/globalStyle";
import SppinerLoading from "./Components/Elements/SppinerLoading/index";
import Header from "./Components/Header";
import useThemeMode from "./Hook/UseThemeMode";

//React Tostify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//for Stripe
import AllRoutes from "./Routes";

function App() {
  const { theme, ToggelTheme } = useThemeMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <div className="App">
      <ThemeProvider theme={themeMode}>
        <GlobalStyles {...themeMode} />
        {/* add header  */}
        <Header ToggelTheme={ToggelTheme} />

        <Suspense fallback={<SppinerLoading />}>
          {/* pages */}
          <AllRoutes />
        </Suspense>
      </ThemeProvider>
      <ToastContainer />
    </div>
  );
}

export default App;


