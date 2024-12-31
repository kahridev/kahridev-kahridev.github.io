import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";

// Sayfalar
import SplashScreen from "./components/SplashScreen";
import Login from "./components/Login";
import CocktailList from "./components/CocktailList";
import CocktailDetail from "./components/CocktailDetail";
//import CocktailDetail from "./components/CocktailDetail";

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useContext(AuthContext);

  if (loading) {
    return <SplashScreen />;
  }

  return currentUser ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <CocktailList />
                </PrivateRoute>
              }
            />
            <Route
              path="/cocktail/:id"
              element={
                <PrivateRoute>
                  <CocktailDetail />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
