import { useRouter } from 'next/router'
import React from 'react'

const ReviewProductPage = () => {
    const { query: { productId,reviewId } } = useRouter()
    return (
        <div>Product : {productId} 🗳️ =&gt; Review : {reviewId} </div>
    )
}

export default ReviewProductPage