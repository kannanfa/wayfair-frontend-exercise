import react from "react";
 
const index = ({ButtonText}) =>{
    return (
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="navbarDarkDropdownMenuLink"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {ButtonText} <i className="fa-regular fa-circle-user ms-2"></i>
      </a>
    );
  }
  

  export default index;