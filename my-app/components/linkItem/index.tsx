import Link from "next/link"
import { LinkItemProps } from "./linkItem.type"

//link item component
const LinkItem = ({ path, label }: LinkItemProps) => {
  return <li> <Link href={path}>{label}</Link></li>
}

export default LinkItem