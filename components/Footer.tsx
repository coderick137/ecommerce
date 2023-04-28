import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";
import { Wrapper } from "./Wrapper";

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 pt-14 pb-3">
      <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
        <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
          <div className="flex flex-col gap-3 shrink-0">
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              Find a store
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              become a partner
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              sign up for email
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              send us feedback
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              student discount
            </div>
          </div>

          <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
            <div className="flex flex-col gap-3">
              <div className="font-oswald font-medium uppercase text-sm">
                get help
              </div>
              <div className="text-sm text-zinc-400/50 hover:text-zinc-300 cursor-pointer">
                Order Status
              </div>
              <div className="text-sm text-zinc-400/50 hover:text-zinc-300 cursor-pointer">
                Delivery
              </div>
              <div className="text-sm text-zinc-400/50 hover:text-zinc-300 cursor-pointer">
                Returns
              </div>
              <div className="text-sm text-zinc-400/50 hover:text-zinc-300 cursor-pointer">
                Payment Options
              </div>
              <div className="text-sm text-zinc-400/50 hover:text-zinc-300 cursor-pointer">
                Contact Us
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="font-oswald font-medium uppercase text-sm">
                About nike
              </div>
              <div className="text-sm text-zinc-400/50 hover:text-zinc-300 cursor-pointer">
                News
              </div>
              <div className="text-sm text-zinc-400/50 hover:text-zinc-300 cursor-pointer">
                Careers
              </div>
              <div className="text-sm text-zinc-400/50 hover:text-zinc-300 cursor-pointer">
                Investors
              </div>
              <div className="text-sm text-zinc-400/50 hover:text-zinc-300 cursor-pointer">
                Sustainability
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 justify-center md:justify-start">
          <div className="w-10 h-10 rounded-full bg-white/25 flex items-center justify-center text-black hover:bg-white/30 cursor-pointer">
            <FacebookLogo size={26} weight="light" />
          </div>
          <div className="w-10 h-10 rounded-full bg-white/25 flex items-center justify-center text-black hover:bg-white/30 cursor-pointer">
            <TwitterLogo size={24} />
          </div>
          <div className="w-10 h-10 rounded-full bg-white/25 flex items-center justify-center text-black hover:bg-white/30 cursor-pointer">
            <YoutubeLogo size={24} />
          </div>
          <div className="w-10 h-10 rounded-full bg-white/25 flex items-center justify-center text-black hover:bg-white/30 cursor-pointer">
            <InstagramLogo size={24} />
          </div>
        </div>
      </Wrapper>
      <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
        <div className="text-[12px] text-zinc-400/50 hover:text-zinc-300 cursor-pointer text-center md:text-left">
          © 2023 Nike, Inc. All Rights Reserved
        </div>

        <div>
          <div className="text-[12px] text-white/50 hover:text-white cursor-pointer text-center md:text-left">
            Feito com ❤️ por{" "}
            <a
              href="https://www.linkedin.com/in/ricardoanjosn/"
              target="_blank"
              className="text-white/50 hover:text-blue-500 cursor-pointer"
            >
              @code_rick
            </a>
          </div>
        </div>

        <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
          <div className="text-[12px] text-zinc-400/50 hover:text-zinc-300 cursor-pointer">
            Guides
          </div>
          <div className="text-[12px] text-white/50 hover:text-white3cursor-pointer">
            Terms of Sale
          </div>
          <div className="text-[12px] text-white/50 hover:text-white3cursor-pointer">
            Terms of Use
          </div>
          <div className="text-[12px] text-white/50 hover:text-white3cursor-pointer">
            Privacy Policy
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}
