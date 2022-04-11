import "common/components/SideNavbar/SideNavbar.css";
import  List from 'common/components/SideNavbar/List'
import  {useSideBar} from 'common/components/SideNavbar/utils'

const SideBar = ({ data}) => {
  const {onSideBarViewChange, isIconOnlyMenu, selectedMenu, setSelectedMenu}  = useSideBar();
  
  return (
    <>
      <div
        className="col-12 py-3"
        style={
          !isIconOnlyMenu
            ? { height: "60px", cursor:"pointer" }
            : { height: "60px", textAlign: "center" , cursor:"pointer" }
        }
      >
        <a
          className="link-dark d-inline-block"
          onClick={onSideBarViewChange}
        >
          <i className="fa-solid fa-bars fa-xl my-auto align-bottom"></i>
        </a>
      </div>
      <div
        className={
          !isIconOnlyMenu ? "col-12 sidebar" : "col-12 sidebar offset-2"
        }
        style={{ display: "block" }}
      >
        <List
          menu={data}
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
          isIconOnlyMenu={isIconOnlyMenu}
        ></List>
      </div>
    </>
  );
};

export default SideBar;
