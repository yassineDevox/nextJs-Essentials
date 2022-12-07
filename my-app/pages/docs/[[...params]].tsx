import { useRouter } from 'next/router'
import React from 'react'

const Docs = () => {
    const { query: { params } } = useRouter()

    return (
        <div>{JSON.stringify(params)}</div>
    )
}

export default Docs