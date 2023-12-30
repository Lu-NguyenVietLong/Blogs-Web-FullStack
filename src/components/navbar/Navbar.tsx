"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const session = true;
  const isAdmin = true;

  return (
    <div className="flex w-full h-[100px] items-center justify-between">
      <div className="text-[30px] font-bold">
        <Link href="/">Long</Link>
      </div>
      <div className="flex items-center">
        <Link
          className={`ml-[10px] block px-[15px] py-[5px] rounded-[20px] ${
            pathName === "/" && "bg-white text-black"
          }`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`ml-[10px] block px-[15px] py-[5px] rounded-[20px] ${
            pathName === "/about" && "bg-white text-black"
          }`}
          href="/about"
        >
          About
        </Link>
        <Link
          className={`ml-[10px] block px-[15px] py-[5px] rounded-[20px] ${
            pathName === "/contacts" && "bg-white text-black"
          }`}
          href="/contacts"
        >
          Contact
        </Link>
        <Link
          className={`ml-[10px] block px-[15px] py-[5px] rounded-[20px] ${
            pathName === "/blog" && "bg-white text-black"
          }`}
          href="/blog"
        >
          Blog
        </Link>
        {session ? (
          <>
            {isAdmin && (
              <>
                <Link
                  href="/admin"
                  className={`ml-[10px] block px-[15px] py-[5px] rounded-[20px] ${
                    pathName === "/admin" && "bg-white text-black"
                  }`}
                >
                  Admin
                </Link>
                <button
                  className={`ml-[10px] block px-[15px] py-[5px] ${"bg-white text-black"}`}
                >
                  Logout
                </button>
              </>
            )}
          </>
        ) : (
          <Link
            className={`ml-[10px] block px-[15px] py-[5px] ${"bg-white text-black"}`}
            href="/blog"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
