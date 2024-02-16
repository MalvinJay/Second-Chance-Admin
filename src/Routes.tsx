import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";

import { FallbackIcon } from "components/Icons/Icons";

const AddPreviousShows = React.lazy(() => import("pages/AddPreviousShows"));
const ContactUs = React.lazy(() => import("pages/ContactUs"));
const AddFMStation = React.lazy(() => import("pages/AddFMStation"));
const RoyalNews = React.lazy(() => import("pages/RoyalNews"));
const AddFMStationOne = React.lazy(() => import("pages/AddFMStationOne"));
const FMStation = React.lazy(() => import("pages/FMStation"));
const AddTVShows = React.lazy(() => import("pages/AddTVShows"));
const TVShows = React.lazy(() => import("pages/TVShows"));
const TVShowsDetails = React.lazy(() => import("pages/TVShows/showDetails"));
const VOGDetails = React.lazy(() => import("pages/VOGLiveSeries/vogDetails"));
const AddVOGLiveSeries = React.lazy(() => import("pages/AddVOGLiveSeries"));
const VOGLiveSeries = React.lazy(() => import("pages/VOGLiveSeries"));
const AddNewMember = React.lazy(() => import("pages/AddNewMember"));
const Aboutus = React.lazy(() => import("pages/Aboutus"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const SignIn = React.lazy(() => import("pages/SignIn"));

const ProjectRoutes = () => {
  return (
    <React.Suspense
      fallback={
        !location.pathname.includes("sign-in") && (
          <div className="w-[193px] !sticky bg-gray-900 h-screen sm:hidden md:px-5 top-[0]">
            <FallbackIcon />
          </div>
        )
      }
    >
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/vog-live-services" element={<VOGLiveSeries />} />
          <Route path="/vog-live-services/:id" element={<VOGDetails />} />
          <Route path="/tv-shows" element={<TVShows />} />
          <Route path="/tv-shows/:id" element={<TVShowsDetails />} />
          <Route path="/fm-stations" element={<FMStation />} />
          <Route path="/royal-news" element={<RoyalNews />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/sign-in" element={<SignIn />} />

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
