import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Account from "./pages/Account";
import MovieDetails from "./components/details/MovieDetails";
import ProtectRoute from "./components/shows/ProtectRoute";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<MovieDetails />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/account"
          element={
            <ProtectRoute>
              <Account />
            </ProtectRoute>
          }></Route>
      </Routes>
    </>
  );
}

export default App;
