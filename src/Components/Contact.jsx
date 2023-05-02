import './Contact.css'
// import Carousel from 'react-bootstrap/Carousel';

function Contac() {
  return (
    <div className='contact_section'>
      <section className='contact_form'>
        <form>
          <p>Nombre y Apellido</p>
          <input type="text" />
          <p>Mail</p>
          <input type="email" /> <br />
          <button type='submit'>Enviar</button>
        </form>
      </section>
      <section className='contact_carousel'>
        <img width={800} height={400} src="https://img.freepik.com/foto-gratis/retrato-moda-mujer-joven-elegante_1328-2743.jpg?w=1380&t=st=1682975850~exp=1682976450~hmac=8bdad305cefc24a0d86b6614accac4479ef0a2a25999a5687e209df0701fdd2d" alt="" />
      </section>
    </div>
  )
}

export default Contac