import Link from "next/link";
import { BsFillPlusSquareFill, BsPeopleFill } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";

interface Props {
  href: string;
}

export default function NavigationLink({ href }: Props) {
  const findIcon = () => {
    if (href === "/") {
      return <GoHomeFill className="w-6 h-6 mb-1" />;
    } else if (href === "/studio") {
      return <BsFillPlusSquareFill className="w-6 h-6 mb-1" />;
    }
    return <BsPeopleFill className="w-6 h-6 mb-1" />;
  };

  return (
    <Link
      href={href}
      className="inline-flex flex-col items-center justify-center px-5 hover:text-blue-500"
    >
      {findIcon()}
    </Link>
  );
}
