import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login, selectUser } from "../../features/userSlice";
import "./profile.css";
import ReactStars from "react-rating-stars-component";
import img1 from "../images/logo.png";
import jobs from "../../data";
import Nav from "../nav/Nav";
import Search from "../property/searchGadgets/Search";
// import noteContext from "../../context/notes/noteContext";
function Profile() {
  const [toogle, setToogle] = useState(1);
  const dispatch = useDispatch();
  const redux = useSelector(selectUser);
  const reduxLogin = redux.loggedIn;
  const navigate = useNavigate();
  // const a = useContext(noteContext);

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  const logout = (e) => {
    e.preventDefault();

    dispatch(
      login({
        username: null,
        loggedIn: null,
      })
    );
    navigate("/");
  };
  if (redux.loggedIn2) {
    window.addEventListener("load", () => {
      alert("You are logged out..");
      dispatch(
        login({
          username: redux.username,
          loggedIn: null,
          loggedIn2: null,
        })
      );
      setTimeout(() => {
        navigate("/");
      });
    });
  }

  return (
    <>
      {/* <Nav /> */}
      {/* <div className="profile">
        <button onClick={logout} className="logout btn btn-danger">
          Logout
        </button>
        <button className="btn btn-primary">
          <Link to="/jobs" style={{ color: "white" }}>
            Jobs
          </Link>
        </button>
        <p style={{ marginLeft: "20px" }}>
          <Link to="/property">Search Property</Link>
        </p>
      </div> */}
      {/* <Search /> */}
      {/* <List /> */}
      <div className="profile-user">
        <div className="logo">
          <img
            src="https://cdn-images-1.medium.com/max/1200/1*NpUUls7kjn9JhO4ChjGV7w.png"
            alt="logo"
          />
          <button>Upload Photo</button>
          <h2 style={{ marginTop: "20px" }}>Apollo Hospital</h2>
          <span>Hospital</span>
          <ReactStars
            count={5}
            value={5}
            edit={false}
            onChange={ratingChanged}
            size={30}
            activeColor="#ffd700"
          />
          <p>4.9</p>
          <div className="sitesLink" style={{ fontSize: "13px" }}>
            <p>
              <i className="bi bi-globe me-2"></i>website url
            </p>
            <p>
              <i className="bi bi-pencil-square me-2"></i>
              website url
            </p>
          </div>
        </div>
        <div className="info">
          <div className="top">
            <div className="topAcc">
              <h2>Manage Your Account</h2>
              <button onClick={logout} className="btn btn-primary">
                Logout
              </button>
            </div>
            <div className="topNav">
              <button
                className={toogle === 1 ? "tab active" : "tab"}
                onClick={() => setToogle(1)}
              >
                Dashboard
              </button>
              <button
                className={toogle === 2 ? "tab active" : "tab"}
                onClick={() => setToogle(2)}
              >
                Profile
              </button>
              <button
                className={toogle === 3 ? "tab active" : "tab"}
                onClick={() => setToogle(3)}
              >
                Doctors
              </button>
              <button
                className={toogle === 4 ? "tab active" : "tab"}
                onClick={() => setToogle(4)}
              >
                Notification
              </button>
              <button
                className={toogle === 5 ? "tab active" : "tab"}
                onClick={() => setToogle(5)}
              >
                Message
              </button>
              <button
                className={toogle === 6 ? "tab active" : "tab"}
                onClick={() => setToogle(6)}
              >
                Appointments
              </button>
              <button
                className={toogle === 7 ? "tab active" : "tab"}
                onClick={() => setToogle(7)}
              >
                Jobs
              </button>
              <button
                className={toogle === 8 ? "tab active" : "tab"}
                onClick={() => setToogle(8)}
              >
                Gallery
              </button>
              <button
                className={toogle === 9 ? "tab active" : "tab"}
                onClick={() => setToogle(9)}
              >
                Reviews
              </button>
              <button
                className={toogle === 10 ? "tab active" : "tab"}
                onClick={() => setToogle(10)}
              >
                Payments
              </button>
            </div>
            <div className="tabContent">
              {toogle === 1 && <p>dash</p>}
              {toogle === 2 && <p>2</p>}
              {toogle === 3 && <p>3</p>}
              {toogle === 4 && <p>4</p>}
              {toogle === 5 && <p>5</p>}
              {toogle === 6 && <p>6</p>}
              {toogle === 7 && <p>7</p>}
              {toogle === 8 && <p>8</p>}
              {toogle === 9 && <p>9</p>}
              {toogle === 10 && <p>10</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
