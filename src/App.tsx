import React, { useEffect } from "react";
import { Routes, Route, useNavigationType, useLocation, useNavigate } from "react-router-dom";
import RevisedVerFriendsInFlats from "./pages/RevisedVerFriendsInFlats";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import RoomDetails from "./pages/RoomDetails";
// import the new pages
import SurveyMain from "./pages/SurveyMain";
import  SurveyResultMain from "./pages/SurveyResultMain";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/signup":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/landlord-renter":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <>
        <ToastContainer />
        <Routes>
          <Route path="/roomDetails/:id" element={<RoomDetails />} />
          <Route path="/" element={<RevisedVerFriendsInFlats />} />
          <Route path="/quiz" element={<SurveyMain />} />
          <Route path="/result" element={<SurveyResultMain/>} />
        </Routes>
    </>
  );
}

export default App;
