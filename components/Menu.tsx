import { Fragment } from "react";
import Link from "next/link";
import { CaretDown } from "phosphor-react";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
  { id: 1, name: "Jordan", doc_count: 11 },
  { id: 2, name: "Sneakers", doc_count: 8 },
  { id: 3, name: "Running shoes", doc_count: 64 },
  { id: 4, name: "Football shoes", doc_count: 107 },
];

interface SubMenuProps {
  showCatMenu: boolean;
  setShowCatMenu: (value: boolean) => void;
}

export function Menu({ showCatMenu, setShowCatMenu }: SubMenuProps) {
  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-zinc-900">
      {data.map((item) => {
        return (
          <Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="cursor-pointer flex items-center gap-1 relative"
                onMouseEnter={() => setShowCatMenu(true)}
                onMouseLeave={() => setShowCatMenu(false)}
              >
                {item.name}
                <CaretDown size={14} weight="light" />
                {showCatMenu && (
                  <ul className="bg-zinc-50 absolute top-6 left-0 min-w-[16rem] px-1 py-1 text-zinc-900 shadow-lg">
                    {subMenuData.map((subItem) => {
                      return (
                        <Link
                          key={subItem.id}
                          href={`/category/${subItem.name}`}
                          onClick={() => setShowCatMenu(false)}
                        >
                          <li className="h-12 flex justify-between items-center hover:bg-zinc-800/10 rounded-md">
                            {subItem.name}
                            <span className="text-zinc-500">
                              {subItem.doc_count}
                            </span>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="cursor-pointer">
                <Link href={item?.url as string}>{item.name}</Link>
              </li>
            )}
          </Fragment>
        );
      })}
    </ul>
  );
}
