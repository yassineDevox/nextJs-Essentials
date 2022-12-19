import React from 'react'

const HomeContainer = ({ data }: any) => {

  return (
    <div>
      <h1>Hi I'm The home Page 😇</h1>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  )
}

export default HomeContainer