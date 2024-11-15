import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { College_Login } from './Pages/College/College_Login';
import { College_Register } from './Pages/College/College_Register';
import { Student_Login } from './Pages/Student/Stu_Login';
import { Student_Register } from './Pages/Student/Stu_Reg';
import { Home } from './Pages/Home/Home';
import { Login } from './Pages/Home/Login';
import { AuthProvider } from './Context/AuthProvider';
import { useAuth } from "./Context/AuthProvider";
import { Logout } from './Pages/Home/Logout';
import { Verification } from './Pages/Student/Verification';
import { Otp } from './Pages/Student/Otp';
import { BlogDetail } from './Pages/BlogJ/BlogDetail';
import { BlogPage } from './Pages/BlogJ/BlogPage';
import AddBlog from  './Pages/BlogJ/addBlog';
// import BlogHome from './Pages/BlogPage/pages/Blogs';
// import Blog from './Pages/BlogPage/pages/Blog';

// import EventForm from './Pages/Event_listing_page/EventListingForm';
import { College_otp } from './Pages/College/College_otp'
import { ProfilePage } from './Pages/Profile/Student_Profile';
import { Profile_Otp } from './Pages/Profile/Profile_Otp';
import { CollegeProfile } from './Pages/Profile/College_Profile';
import { Club_Otp } from './Pages/Profile/Club_Otp';
import { ClubProfile } from './Pages/Profile/ClubProfile';

export const App = () => {
  const type = localStorage.getItem("type");
  return (
    <>
      <Router >
        <AuthProvider>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/blogs/:blogId" element={<BlogDetail />} />
            <Route path="/add-blog" component={<AddBlog/>} />
            {/* <Route path='/listing' element={<EventForm />} /> */}
            <Route path="/college-login" element={<College_Login />} />
            <Route path="/college-register" element={<College_Register />} />
            <Route path="/student-login" element={<Student_Login />} />
            <Route path="/student-register" element={<Student_Register />} />
            <Route path='/verification' element={<Verification />} />
            <Route path='/otp/:userId' element={<Otp />} />
            <Route path='/college-otp/:userId' element={<College_otp />} />
            <Route path='/profile-otp/:userId' element={<Profile_Otp />} />
            <Route path='/club-otp/:userId' element={<Club_Otp />} />
            <Route path="/" element={<Home />} />
            {type === "user" && (
              <Route path="/student-profile" element={<ProfilePage />} />
            )}
            {type === "college" && (
              <Route path="/college-profile" element={<CollegeProfile />} />
            )}
            {type === "club" && (
              <Route path="/club-profile" element={<ClubProfile />} />
            )}
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
};
