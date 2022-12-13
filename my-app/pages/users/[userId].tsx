import { useRouter } from 'next/router'
import React from 'react'
import { User } from '../user.type'

const UserDetails = ({ userDetails }: { userDetails: User }) => {
    const router = useRouter()
    //in case the param does not exist among the list of params provided by getStaticPaths
    //go get it and while is waiting display loading ...
    if (router.isFallback) {
        return "loading ..."
    }
    return (
        <div>{JSON.stringify(userDetails)}</div>
    )
}

export default UserDetails

//to get dynamic params with SSG
export async function getStaticPaths() {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/`)
    const data = await response.json()

    const allPaths = [...data.map((u: User) => ({ params: { userId: u.id + "" } }))]
    return {
        paths: allPaths,
        fallback: true
    }
}
//to get dynamic props with SSG
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