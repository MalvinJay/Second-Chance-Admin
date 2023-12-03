import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
const AddPreviousShows = React.lazy(() => import("pages/AddPreviousShows"));
const ContactUs = React.lazy(() => import("pages/ContactUs"));
const AddFMStation = React.lazy(() => import("pages/AddFMStation"));
const RoyalNews = React.lazy(() => import("pages/RoyalNews"));
const AddFMStationOne = React.lazy(() => import("pages/AddFMStationOne"));
const FMStation = React.lazy(() => import("pages/FMStation"));
const AddTVShows = React.lazy(() => import("pages/AddTVShows"));
const TVShows = React.lazy(() => import("pages/TVShows"));
const AddVOGLiveSeries = React.lazy(() => import("pages/AddVOGLiveSeries"));
const VOGLiveSeries = React.lazy(() => import("pages/VOGLiveSeries"));
const AddNewMember = React.lazy(() => import("pages/AddNewMember"));
const Aboutus = React.lazy(() => import("pages/Aboutus"));
const AddUpcomingShows = React.lazy(() => import("pages/AddUpcomingShows"));
const Homepage = React.lazy(() => import("pages/Homepage"));

const ProjectRoutes = () => {
  return (
    <React.Suspense
      fallback={
        <div className="p-4">
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      }
    >
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/vog-live-services" element={<VOGLiveSeries />} />
          <Route path="/tv-shows" element={<TVShows />} />
          <Route path="/fm-stations" element={<FMStation />} />
          <Route path="/royal-news" element={<RoyalNews />} />
          <Route path="/contact-us" element={<ContactUs />} />

          <Route path="/addupcomingshows" element={<AddUpcomingShows />} />
          <Route path="/addnewmember" element={<AddNewMember />} />
          <Route path="/addvogliveseries" element={<AddVOGLiveSeries />} />
          <Route path="/addtvshows" element={<AddTVShows />} />
          <Route path="/addfmstationone" element={<AddFMStationOne />} />
          <Route path="/addfmstation" element={<AddFMStation />} />
          <Route path="/addpreviousshows" element={<AddPreviousShows />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;
