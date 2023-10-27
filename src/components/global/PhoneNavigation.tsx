import Link from "next/link";
import { GoHomeFill } from "react-icons/go";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { PiBowlFoodFill } from "react-icons/pi";

export default function PhoneNavigation() {
  const iconStyles = "w-6 h-6 mb-1 text-gray-500 group-hover:text-blue-600";
  const linkStyles =
    "inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group";

  return (
    <footer>
      <nav className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200">
        <div className="grid h-full max-w-lg grid-cols-3 mx-auto">
          <Link href="/" className={linkStyles}>
            <GoHomeFill className={iconStyles} />
          </Link>
          <Link href="/studio" className={linkStyles}>
            <BsFillPlusSquareFill className={iconStyles} />
          </Link>
          <Link href="/recipes" className={linkStyles}>
            <PiBowlFoodFill className={iconStyles} />
          </Link>
        </div>
      </nav>
    </footer>
  );
}
