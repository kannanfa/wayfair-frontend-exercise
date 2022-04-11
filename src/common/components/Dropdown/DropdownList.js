const DropdownListItem = ({title, url, id }) =>{
    return (
    <li key={`DropdownListItem-${id}`}>
    <a className="dropdown-item" href="#home">
      {title}
    </a>
  </li>)
}


const DropdownList = ({data=[]}) =>{

    return (
        <ul className="dropdown-menu dropdown-menu-lg-end" aria-labelledby="navbarDarkDropdownMenuLink">
            {data.map((item, index)=>{
                return <DropdownListItem title={item.title} id={item.id} url={item.url}  key={`DropdownListItem-${item.id}`}></DropdownListItem>})}

        </ul>)
}

export default DropdownList;