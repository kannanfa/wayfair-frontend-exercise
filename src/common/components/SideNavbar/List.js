import react, {useMemo} from "react";
import { Rectangle } from "common/layouts";
import MenuLink  from "./MenuLink";
import { IconList } from "common/utils";
import { isChildAvaliable, isMenuOpen, isFinalChiled, canShowBorder} from 'common/components/SideNavbar/utils'
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom"

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
 * @param {{  item: MenuItem,
 *            index:number,
 *            allIndex: Array.<string>
 *            position: number, 
 *            selectedMenu : Array.<number>
 *            setSelectedMenu : Function
 *            isIconOnlyMenu: boolean
 * }} props
 * item - MenuItem
 * index - Give the position of the item in the array
 * allindex - list of index value from paren to grant child 
 * position - Menu sub Level postion like Main menu value - 0, Submenu value - 1,  menu inside submenu value would be - 2
 * selectedMenu - list of select menu index every level
 * setSelectedMenu - setter function for selected menu
 * isIconOnlyMenu -  This boolean value is used to control the main menu items to show only icon 
 * @returns {Component}
 */

const ListItem = ({
    item: { title, children, url, id, icon, hasAlert },
    index,
    allindex,
    position,
    selectedMenu,
    setSelectedMenu,
    isIconOnlyMenu,
  }) => {

    const isChildrenAvaliable = useMemo(() => isChildAvaliable(children), [children]) ;
    const isOpen = useMemo(() => isMenuOpen(selectedMenu, position, index), [selectedMenu, position, index])
    const isFinalChild = useMemo(() => isFinalChiled(isOpen, position, selectedMenu, isChildrenAvaliable), [isOpen, position, selectedMenu, isChildrenAvaliable]) 
    const canShowIconBorder = useMemo(() => canShowBorder(isOpen, position, isIconOnlyMenu), [isOpen, position, isIconOnlyMenu])
    const navigateTo = useNavigate(url);
    const onLinkClick = (url) => {
      if(url){
        navigateTo(url);
      }
      setSelectedMenu(allindex);
    };
    
    if(!title || title.length === 0){
      return "";
    }
    return (
      <li key={`${id}-list`} data-testid ={`${id}-list`} className="sidenav-item pt-4" style={{ position: "relative" }}>
        {canShowIconBorder && <Rectangle />}
        <MenuLink
          title={title}
          icon={icon}
          hasAlert={hasAlert}
          url={url}
          isChildrenAvaliable={isChildrenAvaliable}
          isOpen={isOpen}
          isFinalChild={isFinalChild}
          onLinkClick={onLinkClick}
          iconName={IconList[index]}
          isIconOnlyMenu={isIconOnlyMenu}
          id={id}
        ></MenuLink>
        {isChildrenAvaliable && isOpen && !isIconOnlyMenu && (
          <List
            menu={children}
            allindex={allindex}
            position={position}
            setSelectedMenu={setSelectedMenu}
            selectedMenu={selectedMenu}
          />
        )}
      </li>
    );
  };
  

  ListItem.propTypes = {
    item:PropTypes.shape({
      "title": PropTypes.string.isRequired,
      "url": PropTypes.string,
      "id": PropTypes.string.isRequired,
      "icon": PropTypes.string,
      "hasAlert": PropTypes.bool,
      "children":PropTypes.any
    }),
    index:PropTypes.number,
    allindex:PropTypes.arrayOf(PropTypes.number),
    position:PropTypes.number,
    selectedMenu:PropTypes.arrayOf(PropTypes.number),
    setSelectedMenu:PropTypes.func,
    isIconOnlyMenu:PropTypes.bool
  }




  /**
 * MenuLink is the style component used in the side navigation bar
 * @param {{  menu: Array.<MenuItem>,
 *            allIndex: Array.<string>
 *            position: number, 
 *            selectedMenu : Array.<number>
 *            setSelectedMenu : Function
 *            isIconOnlyMenu: boolean
 * }} props
 * item - MenuItem
 * allindex - list of index value from paren to grant child 
 * position - Menu sub Level postion like Main menu value - 0, Submenu value - 1,  menu inside submenu value would be - 2
 * selectedMenu - list of select menu index every level
 * setSelectedMenu - setter function for selected menu
 * isIconOnlyMenu -  This boolean value is used to control the main menu items to show only icon 
 * @returns {Component}
 */


  const List = ({
    menu,
    allindex = [],
    position = -1,
    setSelectedMenu,
    selectedMenu,
    isIconOnlyMenu,
  }) => {
    const newPosition = position + 1;
    return (
      <ul className="sidenav-collapse">
        {menu.map((item, index) => {
          let parents = allindex.slice();
          parents.push(index);
          return (
            <ListItem
              item={item}
              key={item.id}
              index={index}
              allindex={parents}
              position={newPosition}
              selectedMenu={selectedMenu}
              setSelectedMenu={setSelectedMenu}
              isIconOnlyMenu={isIconOnlyMenu}
            ></ListItem>
          );
        })}
      </ul>
    );
  };

  List.propTypes = {
    menu:PropTypes.arrayOf(PropTypes.shape({
      "title": PropTypes.string.isRequired,
      "url": PropTypes.string,
      "id": PropTypes.string.isRequired,
      "icon": PropTypes.string,
      "hasAlert": PropTypes.bool,
      "children":PropTypes.any
    })),
    allindex:PropTypes.arrayOf(PropTypes.number),
    position:PropTypes.number,
    selectedMenu:PropTypes.arrayOf(PropTypes.number),
    setSelectedMenu:PropTypes.func,
    isIconOnlyMenu:PropTypes.bool
  }

  export default List