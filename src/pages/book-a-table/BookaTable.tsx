import Wrapper from "../../Wrapper";
import "../../css/BookaTable.css";

function BookaTable() {
  return (
    <>
      <Wrapper>
        <BookaTablePage />
      </Wrapper>
    </>
  );
}

export default BookaTable;

export function BookaTablePage() {
  return (
    <>
      <div className="s5-main-cont">
        <div className="s5-img-cont">
          <img className="img-detail" src="img/video.jpg" alt="" />
        </div>
        <div className="detail-form">
          <div className="form">
            <div className="reserve">
              <h3>Reservation</h3>
            </div>
            <div className="book-a">BOOK A TABLE ONLINE</div>

            <div className="name-email">
              <input
                type="text"
                className="constmer-name"
                placeholder="Your Name"
              />
              <input
                type="text"
                className="constmer-email"
                placeholder="Your Email"
              />
            </div>
            <div className="date-no">
              <input
                type="date"
                className="date-time"
                placeholder="Date & time"
              />
              <input
                type="text"
                className="no-of-people"
                placeholder="No Of People"
              />
            </div>
            <div className="discri">
              <input
                type="description"
                placeholder="Special request"
                className="text-area"
              />
            </div>
            <div className="book1">
              <button className="book-now1">BOOK NOW</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
