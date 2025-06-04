import Wrapper from "../../Wrapper";
// import "./Payment.css";
import "../../css/Payment.css";
import { FaCircleCheck } from "react-icons/fa6";

function Payment() {
  return (
    <>
      <Wrapper>
        <PaymentPage />
      </Wrapper>
    </>
  );
}

export default Payment;

export function PaymentPage() {
  return (
    <>
      <div className="payment-main-div">
        <div className="pay-head">
          <h1>Shipping</h1>
          <FaCircleCheck />

          <h1>Delivery</h1>
          <FaCircleCheck />

          <h1>Payment</h1>
        </div>

        <form action="" className="payment-form">
          <h2>Contact Detail</h2>

          <div className="form-container">
            <label htmlFor="first-name" className="form-label">
              First Name
              <input
                type="text"
                placeholder="First Name"
                className="form-input"
              />
            </label>

            <label htmlFor="last-name" className="form-label">
              Last Name
              <input
                type="text"
                placeholder="Last Name"
                className="form-input"
              />
            </label>
          </div>

          <div className="pay-email">
            <label htmlFor="Email" className="form-email">
              Email-
              <input
                type="email"
                placeholder="Enter Email"
                className="email-p"
              />
            </label>
          </div>

          <div className="pay-email">
            <label htmlFor="Email" className="form-email">
              Phone Number-
              <input type="num" placeholder="91+" className="email-p" />
            </label>
          </div>
        </form>

        <form action="" className="shipping-form">
          <h2>Shipping details</h2>
          <div className="pay-email">
            <label htmlFor="Email" className="form-email">
              Flat/House no-
              <input type="email" placeholder="House no-" className="email-p" />
            </label>
          </div>

          <div className="pay-email">
            <label htmlFor="Email" className="form-email">
              Address-
              <input type="email" placeholder="Address-" className="email-p" />
            </label>
          </div>

          <div className="form-container">
            <label htmlFor="first-name" className="form-label">
              Postal Code
              <input
                type="text"
                placeholder="Pin-Code"
                className="form-input"
              />
            </label>

            <label htmlFor="last-name" className="form-label">
              Fomous Landmark
              <input
                type="text"
                placeholder="Fomous Landmark"
                className="form-input"
              />
            </label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" className="checkbox-input" />
            <label htmlFor="same-address" className="checkbox-label">
              My Shipping And Billing Address Are The Same
            </label>
          </div>
          <div className="button1">
            <button className="continue1">Continue</button>
          </div>
        </form>
      </div>

      <div className="payment-method">
        <div className="pay-head">
          <h1>Shipping</h1>
          <FaCircleCheck />

          <h1>Delivery</h1>
          <FaCircleCheck />

          <h1>Payment</h1>
        </div>

        <form action="" className="payment1">
          <h2>Payment Method</h2>
          <div className="payon">
            <input type="radio" name="Payment-method" className="radio-input" />
            <label htmlFor="pay-on-delivery" className="radio-label">
              Pay on Delivery
            </label>
          </div>

          <div className="payon">
            <input type="radio" name="Payment-method" className="radio-input" />
            <label htmlFor="pay-on-delivery" className="radio-label">
              Credit/Debit Card
            </label>
          </div>

          <div className="cardd">
            <input type="" placeholder="Card Number" className="card-p" />
          </div>
          <div className="card-de">
            <input
              type="month"
              min="2024-01"
              max="2030-12"
              placeholder="MM/YY"
              className="card-no"
            />

            <input type="text" placeholder="CVV" className="card-no" />
          </div>
          <div className="payon">
            <input type="radio" name="Payment-method" className="radio-input" />
            <label htmlFor="pay-on-delivery" className="radio-label">
              Direct Bank Transfer
            </label>
          </div>
          <div className="payon">
            <input type="radio" name="Payment-method" className="radio-input" />
            <label htmlFor="pay-on-delivery" className="radio-label">
              Other Payment Methods
            </label>
          </div>
          <div className="button10">
            <button className="btn back-btn">Back</button>
            <button className="btn pay-btn">Pay</button>
          </div>
        </form>
      </div>
    </>
  );
}
