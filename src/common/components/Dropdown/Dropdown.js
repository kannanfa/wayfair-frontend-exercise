import DropdownButton from 'common/components/Dropdown/DropdownButton'
import DropdownList from './DropdownList';

const index = ({ name, dropdownMenu}) => {
  console.log(dropdownMenu, "::::::::::::::::::::")

  return (
    <ul className="navbar-nav">
      <li className="nav-item dropdown">
        <DropdownButton ButtonText={name}></DropdownButton>
        <DropdownList data={dropdownMenu}></DropdownList>
      </li>
    </ul>
  );
};

export default index;
