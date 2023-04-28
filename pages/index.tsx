import { HeroBanner } from "@/components/HeroBanner";
import { ProductCard } from "@/components/ProductCard";
import { Wrapper } from "@/components/Wrapper";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <Wrapper>
        <div className="text-center max-w-3xl mx-auto my-14">
          <div className="text-4xl font-bold text-gray-800 leading-loose">
            Simple and fast e-commerce template
          </div>
          <div className="text-2xl font-medium text-gray-600 leading-snug">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            illo, autem eveniet suscipit dolore quasi molestiae fugiat odio
            exercitationem, nihil placeat pariatur laudantium totam neque harum
            ut qui voluptates voluptatum!
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
    </main>
  );
}
