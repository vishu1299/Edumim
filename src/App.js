import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import HomeOne from "./Components/Home/HomeOne";
import HomeThree from "./Components/Home/HomeThree";
import HomeTwo from "./Components/Home/HomeTwo";
import ErrorPage from "./Components/Pages/404Page";
import AboutOne from "./Components/Pages/AboutOne";
import AboutTwo from "./Components/Pages/AboutTwo";
import BLogStandard from "./Components/Pages/BLogStandard";
import ContactUs from "./Components/Pages/ContactUs";
import Courses from "./Components/Pages/Courses";
import CourseSideBar from "./Components/Pages/CourseSideBar";
import Event from "./Components/Pages/Event";
import EventSingle from "./Components/Pages/EventSingle";
import InstructorDetails from "./Components/Pages/InstructorDetails";
import InstructorOne from "./Components/Pages/InstructorOne";
import InstructorTwo from "./Components/Pages/InstructorTwo";
import SingleBlog from "./Components/Pages/SingleBlog";
import SingleCourse from "./Components/Pages/SingleCourse";
import Thanks from "./Components/Pages/Thanks";

function App() {
  return (
    <BrowserRouter>
      <div className="font-gilroy font-medium text-gray text-lg leading-[27px]">
        <Routes>
          <Route path="/" element={<HomeOne />} />
          <Route path="/home-two" element={<HomeTwo />} />
          <Route path="/home-three" element={<HomeThree />} />
          <Route path="/about" element={<AboutOne />} />
          <Route path="/about-two" element={<AboutTwo />} />
          <Route path="/instructor" element={<InstructorOne />} />
          <Route path="/instructor-two" element={<InstructorTwo />} />
          <Route path="/instructor-details" element={<InstructorDetails />} />
          <Route path="/event" element={<Event />} />
          <Route path="/event-single" element={<EventSingle />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses-sidebar" element={<CourseSideBar />} />
          <Route path="/single-course" element={<SingleCourse />} />
          <Route path="/blog-standard" element={<BLogStandard />} />
          <Route path="/single-blog" element={<SingleBlog />} />
          <Route path="/contacts" element={<ContactUs />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
