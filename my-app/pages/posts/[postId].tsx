import React from 'react'
import { ROOT_API } from '../../constants'
import { Post } from '../post.type'

const PostDetails = ({ postDetails }: { postDetails: Post }) => {

    return (
        <div>{JSON.stringify(postDetails)}</div>
    )
}

export default PostDetails

//to get dynamic params with SSG
export async function getStaticPaths() {

    let response = await fetch(`${ROOT_API}/posts/`)
    const data = await response.json()

    const allPaths = [...data.map((u: Post) => ({ params: { postId: u.id + "" } }))]
    return {
        paths: allPaths,
        fallback:"blocking"
    }
}

//to get dynamic props with SSG
export async function getStaticProps(context: { params: { postId: string } }) {
    const { params: { postId } } = context
    let data = await fetch(`${ROOT_API}/posts/${postId}`)
    data = await data.json()
    return {
        props: {
            postDetails: data
        }
    }
}