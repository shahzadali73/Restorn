import Navbar from "./pages/navbar/Navbar";
import Footer from "./pages/footer/Footer";

function Wrapper({ children }: any) {
  return (
    <>
      <Navbar />
      <div className="boxdiv">{children}</div>

      <Footer />
    </>
  );
}

export default Wrapper;
