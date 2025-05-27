import Navbar from "./Navbar";
import Footer from "./Footer";

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
