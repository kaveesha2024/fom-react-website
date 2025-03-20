import { Link } from "react-router";

const NavBarWhiteTheme = () => {
  return (
    <nav>
      <div
        style={{
          // backgroundColor: "#261FB3",
          display: "flex",
          justifyContent: "center",
          padding: "2% 15% ",
        }}
      >
        <Link
          style={{
            color: "blue",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "35px",
          }}
          to={"/"}
        >
          {" "}
          <span
            style={{
              color: "black",
            }}
          >
            {" "}
            Research{" "}
            <span
              style={{
                color: "#0275d8",
              }}
            >
              Clinic
            </span>
          </span>{" "}
        </Link>
      </div>
    </nav>
  );
};

export default NavBarWhiteTheme;
