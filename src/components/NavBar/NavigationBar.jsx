import { Link } from "react-router";
import NavButtons from "../re-usable/NavBtn/NavButtons.jsx";

const NavigationBar = () => {
  return (
    <nav
      className="navigation-bar"
      style={{
        backgroundColor: "#0C0950",
      }}
    >
      <div
        style={{
          backgroundColor: "#0C0950",
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 15% ",
        }}
      >
        <div>
          <Link
            style={{
              color: "blue",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "35px",
            }}
            to="/"
          >
            <span
              style={{
                color: "#FBE4D6",
              }}
            >
              Research
            </span>{" "}
            <span
              style={{
                color: "#98D8EF",
              }}
            >
              Clinic
            </span>
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NavButtons path="/about" pathName="About" />
          <NavButtons path="/services" pathName="Services" />
          <NavButtons path="/team" pathName="Team" />
          <NavButtons path="/contact" pathName="contact" />
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
