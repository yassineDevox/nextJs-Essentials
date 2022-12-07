import { useRouter } from 'next/router'
import React from 'react'

const ProductPage = () => {
    const { query: { productId } } = useRouter()
    return (
        <div>Product : {productId} 🗳️</div>
    )
}

export default ProductPage