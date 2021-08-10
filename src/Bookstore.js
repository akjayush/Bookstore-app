import React from 'react'
import './index.css'

function Bookstore() {
    return (
        <section className="booklist">
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            
        </section>
            
    )
}

const Book = () => {
    return <article>
        <Img/>
        <Title/>
        <Author/>
        </article>
}
const Img = () => <img src="https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg"
alt=""></img>
const Title = () => <h1>Ikigai</h1>
const Author = () => <h3>Hector Garcia</h3>
export default Bookstore