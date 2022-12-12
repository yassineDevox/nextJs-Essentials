import Link from "next/link"
import { User } from "./user.type"


//home page 
const HomePage = (props: { users: User[] }) => {
  return (
    <ul>
      {
        props.users.map(
          (u: User) => <li key={u.id} >
            <Link href={`users/${u.id}`}>
              goto to {u.id} :
            </Link>
            {u.name}
          </li>
        )
      }
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