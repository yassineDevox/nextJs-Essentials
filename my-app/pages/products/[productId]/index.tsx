import { useRouter } from 'next/router'
import React from 'react'

const ProductPage = () => {
    const { query: { productId },push,replace } = useRouter()
    return (
        <div style={{display:'flex',flexDirection:"column",alignItems:"flex-start",gap:5}}>
            <span>Product : {productId} 🗳️</span>
            <button onClick={()=>push('/')}> order now (push) </button>
            <button onClick={()=>replace('/')}> order now (replace) </button>
        </div>
    )
}

export default ProductPage