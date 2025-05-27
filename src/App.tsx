import Section1 from "./Home";
import Section2 from "./Services";
import Navbar from "./Navbar";
import Section3 from "./assets/Aboutus";
import Section5 from "./BookaTable";
import Section6 from "./OurTeam";
import Section7 from "./Review";
import Footer from "./Footer";
import Wrapper from "./Wrapper";

import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  ServerRouter,
  useParams,
} from "react-router-dom";
import AboutUs from "./about-us";
// import Home from "./Home";
import React, { Suspense } from "react";

const OtherComponent = React.lazy(() => import("./Home"));

function Home() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
import Services from "./Services";
import Aboutus from "./assets/Aboutus";
import FoodMenu from "./FoodMenu";
import BookaTable from "./BookaTable";
import OurTeam from "./OurTeam";
import Review from "./Review";
import FoodDetail from "./FoodDetail";
import Payment from "./Payment";

function App() {
  return (
    <>
      <CompRouter />
    </>
  );
}

export default App;

const CompRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Restro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/foodmenu" element={<FoodMenu />} />
        <Route path="/bookatable" element={<BookaTable />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/Review" element={<Review />} />
      </Routes>
    </BrowserRouter>
  );
};

const Restro = () => {
  return (
    <>
      <Wrapper>
        <Home></Home>
        <Services></Services>
        <Aboutus></Aboutus>
        <FoodMenu></FoodMenu>
        <BookaTable></BookaTable>
        <OurTeam></OurTeam>
        <Review></Review>
        <FoodDetail></FoodDetail>
        <Payment></Payment>
      </Wrapper>
    </>
  );
};
