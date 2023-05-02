import './Card.css'

function Card() {
    return (
        <div className='cards_conteiner'>
            <a href="">
                <div className="card_conteiner">
                    <div className="card_img">
                        <img src="https://img.freepik.com/foto-gratis/camisetas-negras-espacio-copia_53876-102012.jpg?w=1380&t=st=1682926194~exp=1682926794~hmac=bc83065a8ce5a88aa30265724e8da957153f3762f818335a2bb548cb5c2fbb28" alt="" />
                    </div>
                    <div className="card_body">
                        <p>$30.99</p> <br />
                        <p>Remera muy pro</p>
                    </div>
                </div>
            </a>
            <a href="">
                <div className="card_conteiner">
                    <div className="card_img">
                        <img src="https://img.freepik.com/foto-gratis/camisetas-blancas-espacio-copia-sobre-fondo-gris_53876-104920.jpg?w=1380&t=st=1682926206~exp=1682926806~hmac=df50a4c73f005bed2e906c68c9a94362f282c62f895aa7ca1ab6229290eef310" alt="" />
                    </div>
                    <div className="card_body">
                        <p>$30.99</p> <br />
                        <p>Remera muy pro</p>
                    </div>
                </div>
            </a>
            <a href="">
                <div className="card_conteiner">
                    <div className="card_img">
                        <img src="https://img.freepik.com/foto-gratis/vista-gorra-camionero-equipo-beisbol_23-2149410056.jpg?w=1380&t=st=1682926264~exp=1682926864~hmac=18874b50fdcb5913fdcbc66f7959fc5c32978d564cf9253341b6d7afa13d68bb" alt="" />
                    </div>
                    <div className="card_body">
                        <p>$30.99</p> <br />
                        <p>Remera muy pro</p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Card