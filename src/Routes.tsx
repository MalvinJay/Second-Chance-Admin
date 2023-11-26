import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
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
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/addupcomingshows" element={<AddUpcomingShows />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/addnewmember" element={<AddNewMember />} />
          <Route path="/vogliveseries" element={<VOGLiveSeries />} />
          <Route path="/addvogliveseries" element={<AddVOGLiveSeries />} />
          <Route path="/tvshows" element={<TVShows />} />
          <Route path="/addtvshows" element={<AddTVShows />} />
          <Route path="/fmstation" element={<FMStation />} />
          <Route path="/addfmstationone" element={<AddFMStationOne />} />
          <Route path="/royalnews" element={<RoyalNews />} />
          <Route path="/addfmstation" element={<AddFMStation />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/addpreviousshows" element={<AddPreviousShows />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
