import react, {useMemo} from "react";
import { Rectangle } from "common/layouts";
import MenuLink  from "./MenuLink";
import { IconList } from "common/utils";
import { isChildAvaliable, isMenuOpen, isFinalChiled, canShowBorder} from 'common/components/SideNavbar/utils'
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom"

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
      <li key={id} className="sidenav-item pt-4" style={{ position: "relative" }}>
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