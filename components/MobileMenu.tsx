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
  setMobileMenu: (value: boolean) => void;
}

export function MobileMenu({
  showCatMenu,
  setShowCatMenu,
  setMobileMenu,
}: SubMenuProps) {
  return (
    <ul className="flex flec-col md:hidden font-bold absolute top-12 left-0 w-full h-[calc(100vh-58px)] bg-zinc-50 border-t text-zinc-900">
      {data.map((item) => {
        return (
          <Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="cursor-pointer py-4  border-b flex flex-col relative"
                onClick={() => setShowCatMenu(!showCatMenu)}
              >
                <div className="flex justify-between items-center">
                  {item.name}
                  <CaretDown size={14} weight="light" />
                </div>

                {showCatMenu && (
                  <ul className="bg-zinc-900/10 -mx-5 mt-5 -mb-4">
                    {subMenuData.map((subItem) => {
                      return (
                        <Link
                          key={subItem.id}
                          href={`/category/${subItem.name}`}
                          onClick={() => {
                            setShowCatMenu(false);
                            setMobileMenu(false);
                          }}
                        >
                          <li className="py-4 px-8 border-t justify-between">
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
              <li className="py-4 px-5 border-b">
                <Link
                  href={item?.url as string}
                  onClick={() => setMobileMenu(false)}
                >
                  {item.name}
                </Link>
              </li>
            )}
          </Fragment>
        );
      })}
    </ul>
  );
}
