import logo from "assets/images/wayfair.svg";

const index = () => {
    return (
      <a className="navbar-brand" href="#home">
        <img
          src={logo}
          alt="logo"
          width="200"
          style={{
            paddingRighrt: "12px",
            height: "auto",
            maxHeight: "40px",
            display: "inline-block",
            verticalAlign: "middle",
          }}
        />
      </a>
    );
  }

  export default index;