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
const Title = () => <h1 style={{color: '#FF0000', fontsize:'0.50rem', margintop:'0.40rem'}} >Ikigai</h1>
const Author = () => <h3 style={{color: '#617d98', fontsize:'0.75rem', margintop:'0.25rem'}} >Hector Garcia</h3>
export default Bookstore