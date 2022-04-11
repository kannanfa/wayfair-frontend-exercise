import react, { useState } from "react";
import  {useDidMountEffect, useOnClickOutside} from "common/hooks"

const isChildAvaliable = (children) => {
  const isChildrenAvaliable = children && children.length > 0 ? true : false;
  return isChildrenAvaliable;
};

const isMenuOpen = (selectedMenu, position, index) => {
  const canOpen =
    selectedMenu && selectedMenu.length > position
      ? selectedMenu[position] === index
      : false;
  return canOpen;
};

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

const canShowBorder = (isOpen, position, isIconOnlyMenu) => {
  const canShowIconBorder =
    isOpen && position === 0 && isIconOnlyMenu ? true : false;
  return canShowIconBorder;
};

const useSideBar = (ref) => {
 
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
