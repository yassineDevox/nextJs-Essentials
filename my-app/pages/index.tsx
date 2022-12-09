import LinkItem from "../components/linkItem"


//home page 
const HomePage = () => {
  return (
    <ul>
        <LinkItem label="Home" path="/"/>
        <LinkItem label="About" path="/about"/>
        <LinkItem label="My Profile " path="/profil"/>
        <LinkItem label="My Products " path="/products"/>
    </ul>
  )
}
export default HomePage
