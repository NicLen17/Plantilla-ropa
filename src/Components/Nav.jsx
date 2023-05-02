import './Nav.css'

function Nav() {
    return (
            <div className="nav_container">
                <img style={{ width: "200px", height: "120px" }} src="./src/assets/B.png" alt="" />
                <a href="" className='nav_item'>Inicio</a>
                <a href="" className='nav_item'>Catalogo</a>
                <a href="" className='nav_item'>Contactos</a>
            </div>
    )
}

export default Nav