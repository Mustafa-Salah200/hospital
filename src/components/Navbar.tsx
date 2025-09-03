import menu from '../assets/menu.svg'
const Navbar = () => {
  return (
        <nav className="container">
                <h1>عيادة التغذية الصحية</h1>
                <ul>
                    <li><a href="#">الرئيسية</a></li>
                    <li><a href="#">خدماتنا</a></li>
                    <li><a href="#">عن العيادة</a></li>
                    <li><a href="#">المدونة</a></li>
                    <li><a href="#">اتصل بنا</a></li>
                </ul>
                <img src={menu} alt="" />
    </nav>
  )
}

export default Navbar