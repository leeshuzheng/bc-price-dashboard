import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky w-full h-14 lg:h-16 flex items-center border-b border-white/20">
      <div className="container flex mx-auto px-5 h-full items-center">
        <Link href="/" className="gap-2 flex items-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clipPath="url(#a)">
              <path
                d="M2.054 8.722.959 9.817a3.12 3.12 0 0 0 0 4.5l8.821 8.909c.21.214.452.391.72.525V12.952l-8.446-4.23z"
                fill="#80e038"
              ></path>
              <path
                d="m21.947 8.722 1.095 1.095a3.12 3.12 0 0 1 0 4.5l-8.822 8.909c-.21.214-.452.391-.72.525V12.952l8.447-4.23z"
                fill="#80e038"
              ></path>
              <path
                d="M19.828 6.487 14.308.952a3.134 3.134 0 0 0-4.5 0L4.273 6.487l7.755 3.87 7.8-3.87z"
                fill="#80e038"
              ></path>
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h216v24H0z"></path>
              </clipPath>
            </defs>
          </svg>
          <h1 className="text-base md:text-[18px] font-semibold text-neutral-50">
            price.dashboard
          </h1>
        </Link>
      </div>
    </header>
  );
};
