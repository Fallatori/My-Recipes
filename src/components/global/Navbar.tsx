import Image from "next/image";
import Link from "next/link";
import Logo from "../../icons/mooncake.png";

export default function Navbar() {
  return (
    <header className="py-6 border-b border-zinc-800 z-30 mb-8 px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/">
          <Image src={Logo} width={75} height={75} alt="logo" />
        </Link>
        <nav>
          <ul className="flex items-center gap-x-8">
            <li>
              <Link
                href="/recipes"
                className="hover:text-purple-400 duration-300"
              >
                Recipes
              </Link>
            </li>
            {/* <li>
              <Link
                href="/projects"
                className="hover:text-purple-400 duration-300"
              >
                Projects
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}