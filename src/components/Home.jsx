import React from "react";
import "../components/home.css";
import { AiOutlineClose, AiFillEdit } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

function Home() {
  return (
    <div className="wrapper">
      <form>
        <div className="container">
          <div className="card-container">
            <AiOutlineClose style={{ fontSize: "24px", float: "right" }} />
            <br />

            <div className="row" style={{ paddingTop: "40px" }}>
              <div className="col-md-8 col-sm-12 col-12 ">
                <div className="d-flex justify-content-between">
                  <div className="logo d-flex">
                    <span className="circle"></span>
                    <span className="logo-text-1">AceCoin</span>
                    <span className="logo-text-2">Pay</span>
                  </div>
                  <div className="timer">
                    <span className="timer-box">0</span>
                    <span className="timer-box">1</span>
                    <span className="timer-box-divider">:</span>
                    <span className="timer-box">1</span>
                    <span className="timer-box">9</span>
                  </div>
                </div>
                <section className="section d-flex  justify-content-between">
                  <div>
                    <h2 className="card-number">Card Number</h2>
                    <p className="card-number-text">
                      {" "}
                      Enter the 16-digit card number on the card
                    </p>
                  </div>
                  <div className="edit">
                    <AiFillEdit
                      style={{
                        color: "#08a8ef",
                        marginTop: "15px",
                        cursor: "pointer",
                      }}
                    />{" "}
                    <span className="edit-text">Edit</span>
                  </div>
                </section>
                <div className="main">
                  <img
                    className="mastercard-logo"
                    src="/images/master-logo.png"
                  />
                  <input
                    type="text"
                    placeholder="2412   -   7512   -   3412   -   3456"
                  />
                  <img className="verify-icon" src="/images/badge.png" />
                </div>
                <section className="section  d-flex  justify-content-between">
                  <div className="cvv-wrapper">
                    <h2 className="card-number cvv-number">CVV Number</h2>
                    <p className="card-number-text">
                      {" "}
                      Enter the 3-digit card number on the card
                    </p>
                  </div>
                  <div className="main cvv-input">
                    <input type="text" placeholder="327" />
                    <img className="verify-icon" src="/images/grid-dot.svg" />
                  </div>
                </section>
                <section className="section  d-flex  justify-content-between">
                  <div className="cvv-wrapper">
                    <h2 className="card-number cvv-number">Expiry Date</h2>
                    <p className="card-number-text">
                      {" "}
                      Enter the expiry date of the card
                    </p>
                  </div>
                  <div className="d-flex expiry-input">
                    <div className="main cvv-input expire">
                      <input type="text" placeholder="09" />
                    </div>
                    <span className="divider">/</span>
                    <div className="main cvv-input expire">
                      <input type="text" placeholder="22" />
                    </div>
                  </div>
                </section>
                <section className="section  d-flex  justify-content-between">
                  <div className="cvv-wrapper">
                    <h2 className="card-number cvv-number">Password</h2>
                    <p className="card-number-text">
                      {" "}
                      Enter your Dynamic password
                    </p>
                  </div>
                  <div className="main cvv-input">
                    <input type="password" placeholder="••••••••" />
                    <img className="verify-icon" src="/images/grid-dot.svg" />
                  </div>
                </section>
                <button type="submit" className="submit-btn">
                  Pay Now
                </button>
              </div>
              <div className="col-md-4 col-sm-12 col-12 ">
                <div className="checkout">
                  <span className="blue"></span>
                  <div className="credit-card">
                    <div className="credit-card-top d-flex justify-content-between">
                      <img
                        src="/images/chip.png"
                        alt="chip"
                        width={30}
                        height={35}
                      />
                      <img
                        src="/images/wifi.png"
                        alt="wifi"
                        width={30}
                        height={35}
                      />
                    </div>
                    <div className="credit-card-body">
                      <span className="card-holder">Jonathan Micheal</span>
                      <div className="card-digits d-flex">
                        <div className="hidden-digits">
                          <span className="dot"></span>
                          <span className="dot"></span>
                          <span className="dot"></span>
                          <span className="dot"></span>
                        </div>
                        <span className="visible-digits">3456</span>
                      </div>
                    </div>
                    <div className="credit-card-footer d-flex justify-content-between">
                      <span className="expiry">09/22</span>
                      <img
                        src="/images/mastercard-2.svg"
                        className="master-logo"
                        alt="mastercard"
                      />
                    </div>
                    <div className="design d-flex justify-content-center">
                      <span className="inner-stripe"></span>
                    </div>
                  </div>
                  <div className="check-details">
                    <div className="purchase-info">
                      <div className="data d-flex justify-content-between">
                        <span className="title">Company</span>
                        <span className="value d-flex justify-content-between">
                          <img
                            src="/images/apple.svg"
                            alt="apple"
                            className="apple"
                          />
                          <span className="inner-text">apple</span>
                        </span>
                      </div>
                      <div className="data d-flex justify-content-between">
                        <span className="title">Order Number</span>
                        <span className="value ">
                          <span className="inner-text">1266201</span>
                        </span>
                      </div>
                      <div className="data d-flex justify-content-between">
                        <span className="title">Product</span>
                        <span className="value ">
                          <span className="inner-text">Macbook Air</span>
                        </span>
                      </div>
                      <div className="data d-flex justify-content-between">
                        <span className="title">VAT (20%)</span>
                        <span className="value">
                          <span className="inner-text">$ 100.00</span>
                        </span>
                      </div>
                    </div>
                    <div className="divider">
                      <div className="left"></div>
                      <div className="right"></div>
                    </div>
                    <div className="purchase-total d-flex justify-content-between">
                      <div className="total">
                        <span className="description">You have to pay</span>
                        <div className="total-amount d-flex justify-content-center">
                          <h1 className="amount">
                            549 <sub>.99</sub>
                          </h1>
                          <span className="symbol">USD</span>
                        </div>
                      </div>
                      <img src="/images/docket.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Home;
