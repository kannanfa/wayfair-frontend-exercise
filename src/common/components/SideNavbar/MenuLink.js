import { Circle } from "common/layouts";
import { Icon, ToggleIcon } from "common/components";
import PropTypes from 'prop-types';


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
 * MenuLink is the style component used in the side navigation bar
 * @param {{  title: string,
 *            hasAlert: boolean, 
 *            icon: string, 
 *            url: string, 
 *            isChildrenAvaliable: boolean, 
 *            isOpen: boolean, 
 *            isFinalChild: boolean, 
 *            onLinkClick: object, 
 *            iconName: string, 
 *            isIconOnlyMenu: boolean, 
 *            id: string}} props
 *  title - - Title used to show that in the menu 
 *  hasAlert - If notification pending related to a page. we will get true in this value else we will get false.
 *  icon - Icon name/type to display in the navigation menu
 *  url - URL used to navigate to specific page when user click on this link 
 *  isChildrenAvaliable - Boolean value used to control and render the multilevel submenu
 *  isOpen - Boolean value used to control the given menu is opened or not.
 *  isFinalChild - This boolean variable is used to control the selecte menu designe in the navigation tree
 *  onLinkClick - This function used to select the menu and 
 *  iconName - Icon name for this menu item
 *  isIconOnlyMenu -  This boolean value is used to control the main menu items to show only icon 
 *  id -  Unique id for this menu item
 * @returns {Component}
 */


const MenuLink = ({
    title,
    hasAlert,
    icon,
    url,
    isChildrenAvaliable,
    isOpen,
    isFinalChild,
    onLinkClick,
    iconName,
    isIconOnlyMenu,
    id
  }) => {

    const style = isFinalChild
      ? {
          color: "var(--primary)",
        }
      : null;
    const onClick = (e) =>{
      onLinkClick(url);
    }

    return (
      <a
        className="sidenav-link"
        onClick={onClick}
        title={title}
        style={style}
        data-testid={id}
      >
        {isIconOnlyMenu && hasAlert && (
          <Circle
            customStyle={{
              position: "absolute",
              right: "20px",
              top: "22px",
            }}
          />
        )}
        {isFinalChild && !icon && (
          <Circle
            customStyle={{
              background: "var(--primary)",
              position: "absolute",
              left: "-16px",
              bottom: "8px",
            }}
          />
        )}
        {icon && <Icon name={iconName} size="fa-xl"></Icon>}
        {!isIconOnlyMenu && <span   data-testid={`${id}-menu-label`}>{title}</span>}
        {isChildrenAvaliable && !isIconOnlyMenu && (
          <ToggleIcon toggle={isOpen}></ToggleIcon>
        )}
      </a>
    );
  }

  MenuLink.propTypes = {
    title: (props, propName, componentName) => {
      if (!props[propName] || props[propName].length === 0 ) {
        return new Error(`Invalid prop ${propName} passed to ${componentName}. ${propName} is required field`);
      }
    },
    url: PropTypes.string,
    icon: PropTypes.string,
    hasAlert: PropTypes.bool,
    isChildrenAvaliable: PropTypes.bool,
    isOpen: PropTypes.bool,
    isFinalChild:PropTypes.bool,
    onLinkClick:PropTypes.func,
    iconName:PropTypes.string,
    isIconOnlyMenu:PropTypes.bool
    
  }
  

  export default MenuLink;