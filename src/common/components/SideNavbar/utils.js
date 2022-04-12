import react, { useState } from "react";
import  {useDidMountEffect} from "common/hooks"



/**
 * isChildAvaliable - Util function help us to check where the main menu has sub menu or not
 * @param {Array.<MenuItem>} children
 * @returns {Boolean} - True - If children avaliable  False - If there is no children
 */
const isChildAvaliable = (children) => {
  const isChildrenAvaliable = children && children.length > 0 ? true : false;
  return isChildrenAvaliable;
};

/**
 * isMenuOpen - Util help us to determain, wether the given menu is opened or not
 * @param {Array.<number>} selectedMenu - list of select menu index every level 
 * @param {number} position - Menu sub Level postion like Main menu value - 0, Submenu value - 1,  menu inside submenu value would be - 2
 * @param {any} index - Gives the current position of the menu
 * @returns {Boolean} - True - If menu open  False - If menu is closed
 */

const isMenuOpen = (selectedMenu, position, index) => {
  const canOpen =
    selectedMenu && selectedMenu.length > position
      ? selectedMenu[position] === index
      : false;
  return canOpen;
};

/**
 * isFinalChiled - validate is this is the final child.
 * @param {boolean} isOpen  - boolean represent wheathe the current itemis open state or not 
 * @param {number} position - Menu sub Level postion like Main menu value - 0, Submenu value - 1,  menu inside submenu value would be - 2
 * @param {Array.<number>} selectedMenu - list of select menu index every level
 * @param {boolean} isChildrenAvaliable - Do this menu item has sub menu or not 
 * @returns {boolean} True - If it is final child / False - if it is not a final child
 */
const isFinalChiled = (
  isOpen,
  position,
  selectedMenu,
  isChildrenAvaliable
) => {
  const isFinalChild = isOpen
    ? position === selectedMenu.length - 1 && !isChildrenAvaliable
      ? true
      : false
    : false;

  return isFinalChild;
};

/**
 * canShowBorder - Util function help us to control the border shown in the sidebar navigation menu during the menu is in icon state
 * @param {boolean} isOpen - Is menu is selected menu
 * @param {number} position - Menu sub Level postion like Main menu value - 0, Submenu value - 1,  menu inside submenu value would be - 2
 * @param {boolean} isIconOnlyMenu - Is side navbar only showing icon 
 * @returns {boolean}
 */
const canShowBorder = (isOpen, position, isIconOnlyMenu) => {
  const canShowIconBorder =
    isOpen && position === 0 && isIconOnlyMenu ? true : false;
  return canShowIconBorder;
};




/**
 * useSideBar - helper function to seperate the business logic from the view component 
 * @returns {Component}
 */
const useSideBar = () => {
 
  const [isIconOnlyMenu, setIconOnly] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState([]);
  

  useDidMountEffect(() => {
      if (isIconOnlyMenu) {
        setIconOnly((currentVal) => !currentVal);
      }
  }, [selectedMenu]);

  const onSideBarViewChange = (e) => {
    setIconOnly((currentVal) => !currentVal);
  };

  return { selectedMenu, setSelectedMenu, isIconOnlyMenu, onSideBarViewChange, setIconOnly };
};

export {
    isChildAvaliable,
  isMenuOpen,
  isFinalChiled,
  canShowBorder,
  useSideBar
};
