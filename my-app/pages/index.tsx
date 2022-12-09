import Link from "next/link"

//link component
interface LinkItemProps { path: string; label: string }
const LinkItem = ({ path, label }: LinkItemProps) => {
  return <li> <Link href={path}>{label}</Link></li>
}
//home page 
const HomePage = () => {
  return (
    <ul>
        <LinkItem label="Home" path="/"/>
        <LinkItem label="About" path="/about"/>
        <LinkItem label="My Profile " path="/profil"/>
    </ul>
  )
}
export default HomePage
