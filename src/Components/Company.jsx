import './Company.css'

function Company() {
    return (
        <div className='company_container'>
            <div className='logo_container'>
                <img className='company_logo' style={{ borderRadius: '50%' }} src="./src/assets/B.png" alt="" />
            </div>
            <div className='about_container'>
                <p>Benjamin&apos;s clothes</p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore delectus sit aliquid sapiente ipsam error nihil ad veritatis laborum accusantium fugit pariatur, accusamus deleniti quod a optio corrupti voluptates.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas iste laudantium, aspernatur suscipit, facere perspiciatis dolore itaque aperiam soluta rerum quam nostrum ad molestias commodi error aut corrupti modi quasi.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolorem, quos reprehenderit consequatur ea cum magnam eius alias illo doloremque eligendi! Itaque eum hic, temporibus ducimus odio nulla ipsa consequuntur?
            </div>
        </div>
    )
}

export default Company