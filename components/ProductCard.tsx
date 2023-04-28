import Image from "next/image";
import Link from "next/link";

import Product1 from "../public/product-1.webp";

export function ProductCard() {
  return (
    <Link
      href="/product/1"
      className="flex flex-col rounded-md shadow-md gap-1 overflow-hidden cursor-pointer hover:opacity-90 duration-150 hover:scale-105"
    >
      <div className="pb-2/3">
        <Image
          className="h-full w-full object-cover"
          src={Product1}
          alt="Produto 1"
        />
      </div>
      <div className="flex flex-col gap-1 p-4">
        <div className="text-lg font-semibold text-gray-800">
          Nike Air Max 90
        </div>
        <div className="text-sm font-medium text-gray-600">
          Tênis para corrida
        </div>
        <div className="flex flex-row gap-2 justify-between">
          <div className="text-sm font-medium text-gray-600 ">R$ 299,99</div>
          <div className="flex flex-row gap-2">
            <span className="text-sm font-medium text-gray-600 line-through">
              R$ 399,99
            </span>
            <span className="text-sm font-medium text-green-600">-25%</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
