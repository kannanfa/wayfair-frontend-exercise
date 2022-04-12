import "common/components/SideNavbar/SideNavbar.css";
import  List from 'common/components/SideNavbar/List'
import  {useSideBar} from 'common/components/SideNavbar/utils'

/**
 * @typedef MenuItem
 * @type {object}
 * @param {!string} title - Title used to show that in the menu 
 * @param {!string} url - URL used to navigate to specific page when user click on this link 
 * @param {!string} id - Unique id for this item
 * @param {?boolean} icon - Icon name/type to display in the navigation menu
 * @param {?boolean} hasAlert - If notification pending related to a page. we will get true in this value else we will get false.
 * @param {?Array.<MenuItem>} children - Sub menu used in the navigation.
 */

/**
 * Sidebar is the base componnet for the sidebar menu 
 * @param {object} props
 * @param {Array<MenuItem>} props.data - Multi level navigation data 
 * @returns {Component}
 */

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
          data-testid={'navigation-toggle-icon'}
        >
          <i className="fa-solid fa-bars fa-xl my-auto align-bottom"></i>
        </a>
      </div>
      <div
        className={
          !isIconOnlyMenu ? "col-12 sidebar" : "col-12 sidebar offset-2"
        }
        style={{ display: "block" }}
        data-testid={'navigation-skeleton'}
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
