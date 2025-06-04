import Wrapper from "./Wrapper";

import "./css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Home from "./Home";
// import "../../css/.css";
import React, { Suspense } from "react";

const OtherComponent = React.lazy(() => import("./pages/home/Home"));

function Home() {
  return (
    <Wrapper>
      <HomePage />
    </Wrapper>
  );
}
import FoodMenu, { FoodItemPage } from "./pages/food-menu/FoodMenu";

import OurTeam, { OurTeamPage } from "./pages/our-teams/OurTeam";
import Review, { ReviewPage } from "./pages/review/Review";

import AddToCart1 from "./pages/add-to-cart/AddToCart";
import Services, { ServicePage } from "./pages/services/Services";
import Aboutus, { AboutUsPage } from "./pages/about-us/Aboutus";
import BookaTable, { BookaTablePage } from "./pages/book-a-table/BookaTable";
import Payment from "./pages/payment/Payment";

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
        <Route path="/payment" element={<Payment />} />
        <Route path="/addtocart" element={<AddToCart1 />} />
      </Routes>
    </BrowserRouter>
  );
};

const Restro = () => {
  return (
    <>
      <Wrapper>
        <HomePage />
        <ServicePage></ServicePage>
        <AboutUsPage></AboutUsPage>
        <FoodItemPage></FoodItemPage>
        <BookaTablePage />
        <OurTeamPage />
        <ReviewPage />
      </Wrapper>
    </>
  );
};

export function HomePage() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
