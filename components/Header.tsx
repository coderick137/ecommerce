import { useEffect, useState } from "react";
import { Wrapper } from "./Wrapper";

import Logo from "../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "./Menu";
import { HeartStraight, List, ShoppingCartSimple, X } from "phosphor-react";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("transelate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 200) {
      if (currentScrollY > lastScrollY && mobileMenu) {
        setShow("translate-y-[calc(-100%-12px)]");
      } else {
        setShow("shadow-sm translate-y-0");
      }

      setShow("-translate-y-full");
    } else {
      setShow("translate-y-0");
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`
        w-full h-12 md:h-20 bg-zinc-100 flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}
    `}
    >
      <Wrapper className="h-16 flex justify-between items-center">
        <Link href="/">
          <Image src={Logo} alt="Logo" className="w-10 md:w-16" />
        </Link>

        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />

        {mobileMenu && (
          <MobileMenu
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
          />
        )}

        <div className="flex items-center gap-4 text-zinc-900">
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-zinc-900/10 cursor-pointer relative">
            <HeartStraight size={28} weight="regular" />

            <div className="h-[18px] min-w-[12px] min-h-[12px] rounded-full bg-red-600 absolute top-1 left-7 text-zinc-50 flex justify-center items-center px-[5px] text-xs">
              12
            </div>
          </div>

          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-zinc-900/10 cursor-pointer relative">
            <ShoppingCartSimple size={28} weight="regular" />

            <div className="h-[18px] min-w-[12px] min-h-[12px] rounded-full bg-red-600 absolute top-1 left-7 text-zinc-50 flex justify-center items-center px-[5px] text-xs">
              5
            </div>
          </div>

          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-zinc-900/10 cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <X
                size={28}
                weight="regular"
                onClick={() => {
                  setMobileMenu(false);
                }}
              />
            ) : (
              <List
                size={28}
                weight="regular"
                onClick={() => {
                  setMobileMenu(true);
                }}
              />
            )}
          </div>
        </div>
      </Wrapper>
    </header>
  );
}
