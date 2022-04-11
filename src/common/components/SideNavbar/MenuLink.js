import { Circle } from "common/layouts";
import { Icon, ToggleIcon } from "common/components";
import PropTypes from 'prop-types';


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
    isIconOnlyMenu
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
        {!isIconOnlyMenu && <span>{title}</span>}
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