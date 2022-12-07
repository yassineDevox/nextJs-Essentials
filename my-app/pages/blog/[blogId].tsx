import { useRouter } from 'next/router'
import React from 'react'

const ArticlePage = () => {
    const { query: { blogId } } = useRouter()
    return (
        <div>ArticlePage : comme {blogId} 🏝️</div>
    )
}

export default ArticlePage