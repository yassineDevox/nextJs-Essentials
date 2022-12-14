import { GetStaticProps } from "next"
import Link from "next/link"
import { ROOT_API } from "../constants"
import { Post } from "./post.type"


//home page 
const HomePage = (props: { posts: Post[] }) => {
  // console.log(props.posts)
  return (
    <ul>
      {
        props.posts.map(
          (p: Post) => <li key={p.id} >
            <Link href={`posts/${p.id}`}>
              goto to {p.id} :
            </Link>
            {p.title}
          </li>
        )
      }
    </ul>
  )
}
export default HomePage

export async function getStaticProps() {
  let data = await fetch(`${ROOT_API}/posts`)
  data = await data.json()
  //only on the terminal and in the browser generate an error that it should return an object 
  // console.log(data)
  return {
    props: {
      posts: data,
    },
    //tell to next regenerate the productList after 10sec starting from the moment when the user make the second request 
    revalidate: 10
  }

}