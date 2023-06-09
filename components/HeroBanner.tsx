import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

import Slide1 from "../public/slide-1.png";
import Slide2 from "../public/slide-2.png";
import Slide3 from "../public/slide-3.png";
import { CaretLeft, CaretRight } from "phosphor-react";

export function HeroBanner() {
  return (
    <div className="relative text-zinc-50 text-3xl w-full max-w-screen-xl mx-auto">
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={4000}
        transitionTime={1000}
        swipeable={true}
        emulateTouch={true}
        animationHandler={"fade"}
        renderArrowNext={(onClickHandler, hasNext, label) => (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="absolute bottom-0 right-5 z-10 transform -translate-y-1/2 text-zinc-900/50 hover:text-zinc-900/80 transition-colors duration-200 focus:outline-none"
          >
            <CaretRight
              size={20}
              weight="bold"
              className="text-zinc-900/50 hover:text-zinc-900/80 transition-colors duration-200"
            />
          </button>
        )}
        renderArrowPrev={(onClickHandler, hasPrev, label) => (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="absolute mx-5 bottom-0 right-5 z-10 transform -translate-y-1/2 text-zinc-900/50 hover:text-zinc-900/80 transition-colors duration-200 focus:outline-none"
          >
            <CaretLeft
              size={20}
              weight="bold"
              className="text-zinc-900/50 hover:text-zinc-900/80 transition-colors duration-200"
            />
          </button>
        )}
      >
        <div>
          <Image
            src={Slide1}
            alt="Picture of the author"
            className="aspect-w-1 aspect-h-1"
          />
          <div className="absolute px-4 md:px-10 py-3 md:py-6 font-urbanist bg-zinc-200 bottom-6 md:bottom-20 left-0 text-zinc-900/50 text-sm md:text-3xl uppercase font-medium cursor-pointer hover:opacity-90 rounded-r-md shadow-md">
            Shop Now
          </div>
        </div>

        <div>
          <Image
            src={Slide2}
            alt="Picture of the author"
            className="aspect-w-1 aspect-h-1"
          />
          <div className="absolute px-4 md:px-10 py-3 md:py-6 font-urbanist bg-zinc-200 bottom-6 md:bottom-20 left-0 text-zinc-900/50 text-sm md:text-3xl uppercase font-medium cursor-pointer hover:opacity-90 rounded-r-md shadow-md">
            Shop Now
          </div>
        </div>

        <div>
          <Image
            src={Slide3}
            alt="Picture of the author"
            className="aspect-w-1 aspect-h-1"
          />
          <div className="absolute px-4 md:px-10 py-3 md:py-6 font-oswald bg-zinc-200 bottom-6 md:bottom-20 left-0 text-zinc-900/50 text-sm md:text-3xl uppercase font-medium cursor-pointer hover:opacity-90 rounded-r-md shadow-md">
            Shop Now
          </div>
        </div>
      </Carousel>
      <div className="carousel-nav">
        <button type="button" className="carousel-button prev">
          <span className="sr-only">Anterior</span>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button type="button" className="carousel-button next">
          <span className="sr-only">Próximo</span>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      <div className="carousel-indicators">
        <button type="button" className="indicator active"></button>
        <button type="button" className="indicator"></button>
        <button type="button" className="indicator"></button>
      </div>
    </div>
  );
}
