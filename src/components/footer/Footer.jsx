import {Link} from "react-router";


const Footer = () => {
  return (

      <div style={{
          margin: "auto",

          marginTop: "100px",
          marginBottom: "0px",
          padding: '5%',
          // width: '70%',
          // backgroundColor: "#9cbae4",
          backgroundColor: "transparent",
          // backgroundColor: "#161179",
          // borderRadius: '20px 20px 0 0',

          borderRadius: '0px',
          boxShadow: "2px 0px 27px -4px rgba(0,0,0,0.67)"
      }}>
          <div><p style={{
              width: '100%',
              textAlign: 'center',
              color: '#FBE4D6',
              fontWeight: '700',
          }}>
           <Link to={"/"}>Copyright © 2025 Department of Biochemistry. All Rights Reserved.</Link>
          </p></div>

      </div>
  );
};
export default Footer;
