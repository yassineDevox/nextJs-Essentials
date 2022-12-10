
interface User {
  id: number,
  name: string,
}
//home page 
const HomePage = (props: { users: User[] }) => {
  return (
    <ul>
      {props.users.map((u: User) => <li key={u.id} >{u.name}</li>)}
    </ul>
  )
}
export default HomePage

export async function getStaticProps() {
  let data = await fetch('https://jsonplaceholder.typicode.com/users')
  data = await data.json()
  //only on the terminal and in the browser generate an error that it should return an object 
  // console.log(data)
  return {
    props: {
      users: data
    }
  }

}