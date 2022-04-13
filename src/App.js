// import logo from './logo.svg';
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Loading from "./components/loading/Loading";
// import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Error from "./components/404Error/Error";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";
// import Dashboard from "./components/filter/Dashboard";
import Filter from "./components/filter/Filter";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import Search from "./components/property/searchGadgets/Search";
// import NoteState from "./context/notes/NoteState";
// import noteContext from "./context/notes/noteContext.js";
const url = "/recent-property?Purpose=1";
const url1 = "/recent-property?Purpose=2";

function App() {
  const [rent, setRent] = useState();
  const [sale, setSale] = useState();

  // const navigate = useNavigate();
  const redux = useSelector(selectUser);
  const reduxLogin = redux.loggedIn;

  // const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  // setTimeout(() => {
  //   setLoading(false);
  //   console.log("hey");
  // }, 3000);

  const fetchUrl = async () => {
    const response = await fetch(url);
    const result = await response.json();

    const response2 = await fetch(url1);
    const result2 = await response2.json();
    setRent(result);
    setSale(result2);
    setLoading(true);
  };

  useEffect(() => {
    fetchUrl();
  }, []);

  if (!loading) {
    return <Loading />;
  }
  return (
    <>
      {/* <NoteState> */}
      <Router>
        <div>
          <Nav />
          <div>
            <Routes>
              {/* <Route exact path="*" element={<Loading />} /> */}

              {!reduxLogin && (
                <>
                  <Route exact path="/login" element={<Home />} />
                  <Route
                    exact
                    path="/profile"
                    element={<Navigate replace to="/" />}
                  />
                  <Route
                    exact
                    path="/"
                    element={<Home rent={rent} sale={sale} />}
                  />
                </>
              )}

              {reduxLogin && (
                <>
                  {/* <Route
                  exact
                  path="/"
                  element={<Navigate replace to="/profile" />}
                /> */}
                  <Route exact path="/" element={<Search />} />
                  <Route exact path="/profile" element={<Profile />} />
                  <Route
                    exact
                    path="/login"
                    element={<Navigate replace to="/profile" />}
                  />
                  <Route exact path="/jobs" element={<Filter />} />
                  <Route exact path="/property" element={<Search />} />
                </>
              )}
              <Route path="/notFound" element={<Error />} />
              <Route path="*" element={<Navigate replace to="/notFound" />} />
            </Routes>
          </div>
          <NotificationContainer />
        </div>
      </Router>

      {/* <div className="App">{loading ? <Loading /> : <Login />}</div> */}
      {/* </NoteState> */}
    </>
  );
}

export default App;
