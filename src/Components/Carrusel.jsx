import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Carrusel() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        style={{ objectFit: 'cover', height: '600px' }}
                        className="d-block w-100"
                        src="https://img.freepik.com/foto-gratis/mujer-joven-posando-al-estilo-moda-anos-2000_23-2149870098.jpg?w=1380&t=st=1682926299~exp=1682926899~hmac=a499e72ea8385af3f40734b2f61badff2e2c9f59a799b44e90a47d28b02a4f2f"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ objectFit: 'cover', height: '600px' }}
                        className="d-block w-100"
                        src="https://img.rawpixel.com/private/static/images/website/2022-05/upwk61843118-wikimedia-image-kowc5fl7.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=fa1fe774ca2208773517b43dfd2b4f46"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ objectFit: 'cover', height: '600px' }}
                        className="d-block w-100"
                        src="https://img.freepik.com/foto-gratis/alta-moda-look-glamor-retrato-hermosa-sexy-elegante-caucasica-joven-modelo-tela-negra_158538-1960.jpg?w=1380&t=st=1682926331~exp=1682926931~hmac=fccd9359973766bf0f317fd58f1a74a91bcee46dbf7014250c85203094fa973e"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Carrusel