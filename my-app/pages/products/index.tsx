import React from 'react'
import LinkItem from '../../components/linkItem'

const ListProducts = () => {
    return (
        <ul>
            <LinkItem path='products/1' label='Hacking course 😈'/>
            <LinkItem path='products/2' label='Laptop Gamer 💻'/>
            <LinkItem path='products/3' label='Keyboard Gamer ⌨️'/>
        </ul>
    )
}

export default ListProducts