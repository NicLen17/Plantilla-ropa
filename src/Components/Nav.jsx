import './Nav.css'

function Nav() {
    return (
        <div>
            <div className="nav_container">
                <img style={{ width: "150px", height: "100px" }} src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-2.png" alt="" />
                <a href="" className='nav_item'>Inicio</a>
                <a href="" className='nav_item'>Catalogo</a>
                <a href="" className='nav_item'>Contactos</a>
            </div>
        </div>
    )
}

export default Nav