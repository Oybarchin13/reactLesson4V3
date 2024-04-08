// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./App.css";

function App(props) {
  return (
    <div>
      <header className=" d-flex shadow">
        <div className="header-left">
          <h4>Company name</h4>
        </div>
        <div className="header-right ">
          <ul className="d-flex">
            <li>Features</li>
            <li>Enterprise</li>
            <li>Support</li>
            <li>Pricing</li>
            <li>
              <Button variant="primary">Sign Up</Button>
            </li>
          </ul>
        </div>
      </header>
      <div className="text">
        <div className="text2">
          <h1>Pricing</h1>
          <p>
            Quickly build an effective pricing table for your potential
            customers with this Bootstrap example. It's built with default
            Bootstrap components and utilities with little customization.
          </p>
        </div>
      </div>
      <div className="box-container">
        <div className="box">
          <h2>Free</h2>
          <div className="price">
            <span className="price-span">$0</span> / mo
          </div>
          <p className="p-text">
            <span>10 users included</span> <span>2 GB of storage</span>{" "}
            <span>Email support</span> <span>Help center access</span>
          </p>
          <Button
            className="button"
            variant="outline-primary"
          >
            Sign up for free
          </Button>
        </div>
        <div className="box">
          <h2>Pro</h2>
          <div className="price">
            <span className="price-span">$15</span> / mo
          </div>
          <p className="p-text">
            <span>10 users included</span> <span>2 GB of storage</span>{" "}
            <span>Email support</span> <span>Help center access</span>
          </p>
          <Button
            className="button"
            variant="primary"
          >
            Sign up for free
          </Button>
        </div>
        <div className="box">
          <h2>Enterprise</h2>
          <div className="price">
            <span className="price-span">$29</span> / mo
          </div>
          <p className="p-text">
            <span>10 users included</span> <span>2 GB of storage</span>{" "}
            <span>Email support</span> <span>Help center access</span>
          </p>
          <Button
            className="button"
            variant="primary"
          >
            Sign up for free
          </Button>
        </div>
      </div>
     <div className="footer-container">
     <div className="footer">
        <div className="footer-icon">
          <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" />
          <p>© 2017-2018</p>
        </div>
        <div className="footer-box">
          <h4>Features</h4>
          <p>
            <span>Cool stuff</span>
            <span>Random feature</span>
            <span>Team feature</span>
            <span>Stuff for developers</span>
            <span>Another one</span>
          </p>
        </div>
        <div className="footer-box">
          <h4>Resources</h4>
          <p>
            <span>Resource</span>
            <span>Resource name</span>
            <span>Another resource</span>
            <span>Final resource</span>
          </p>
        </div>
        <div className="footer-box">
          <h4>About</h4>
          <p>
            <span>Team</span>
            <span>Locations</span>
            <span>Privacy</span>
            <span>Terms</span>
          </p>
        </div>
        <div></div>
      </div>
     </div>
    </div>
  );
}

export default App;
