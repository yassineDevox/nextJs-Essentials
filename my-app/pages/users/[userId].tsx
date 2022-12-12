import React from 'react'
import { User } from '../user.type'

const UserDetails = ({ userDetails }: { userDetails: User }) => {
    return (
        <div>{JSON.stringify(userDetails)}</div>
    )
}

export default UserDetails

//to get dynamic params with ssg
export async function getStaticPaths() {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/`)
    const data = await response.json()

    const allPaths = [...data.map((u:User) => ({ params: { userId: u.id+"" } }))]
    return {
        paths:allPaths,
        fallback: false
    }
}
//to get dynamic props with ssg
export async function getStaticProps(context: { params: { userId: string } }) {
    const { params: { userId } } = context
    let data = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    data = await data.json()
    return {
        props: {
            userDetails: data
        }
    }
}