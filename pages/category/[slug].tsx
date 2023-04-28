import { ProductCard } from "@/components/ProductCard";
import { Wrapper } from "@/components/Wrapper";
import { useRouter } from "next/router";

export default function Category() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="w-full py-20">
      <Wrapper>
        <div className="text-center max-w-3xl mx-auto mt-4">
          <div className="text-4xl font-bold text-gray-800 leading-loose">
            {slug}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-20">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Wrapper>
    </div>
  );
}
