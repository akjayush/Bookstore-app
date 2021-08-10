import React from 'react'

function Bookstore() {
    return (
        <section>
            <Book />
            
        </section>
            
    )
}

const Book = () => {
    return <article><Img></Img></article>
}
const Img = () => <img src="https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg"
alt=""></img>
export default Bookstore