import { createContext, useState } from "react";
import users from "./../../data/usersData";
const UsersContext = createContext({
  login: false,
  users,
  loginHandler: () => {},
  logOutHandler: () => {},
});

export function UsersContextProvider(props) {
  const [login, setLogin] = useState(null);
  const [allUsers, setAllUsers] = useState(users);
  const loginHandler = function (email) {
    const current = allUsers.find((user) => user.email === email);
    setLogin(current);
  };

  const logOutHandler = function () {
    setLogin(null);
    const updateUser = allUsers.map((user) => {
      if (user.email === login.email) return login;
      else return user;
    });
    setAllUsers(updateUser);
  };

  const signUpHandler = function (newuser) {
    setAllUsers([...allUsers, newuser]);
  };

  const addShow = function (movie) {
    if (login.shows.includes(movie)) return;
    setLogin({ ...login, shows: [...login.shows, movie] });
  };

  const removeShow = function (entrymovie) {
    const entry = login.shows.filter((movie) => movie.id !== entrymovie.id);
    setLogin({ ...login, shows: entry });
  };

  const value = {
    login,
    allUsers,
    loginHandler,
    logOutHandler,
    signUpHandler,
    addShow,
    removeShow,
  };
  return (
    <UsersContext.Provider value={value}>
      {props.children}
    </UsersContext.Provider>
  );
}

export default UsersContext;
