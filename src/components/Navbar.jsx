import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 lg:px-8 ">
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 poppins-regular poppins-bold"
      >
        <a href="#" className="flex items-center text-lg">
          Beranda
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 poppins-bold"
      >
        <a href="#" className="flex items-center text-lg">
          Tentang
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 poppins-bold"
      >
        <a href="#" className="flex items-center text-lg">
          Blog
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 poppins-bold"
      >
        <a href="#" className="flex items-center text-lg">
          Data
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 poppins-bold"
      >
        <a href="#" className="flex items-center text-lg">
          Docs
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="fixed top-0 z-10 max-w-full px-4 py-2 rounded-none lg:sticky h-max lg:px-8 lg:py-4">
      <div className="flex items-center justify-between">
        <Typography className="mr-4 cursor-default py-1.5 poppins-bold text-3xl text-black">
          Vital<span className="text-black">Motion</span>
        </Typography>
        <div className="flex items-center gap-4">
          <div className="hidden mr-4 lg:block">{navList}</div>
          <IconButton
            variant="text"
            className="w-6 h-6 p-4 ml-auto rounded-none text-inherit hover:bg-transparent focus:bg-black active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>{navList}</MobileNav>
    </Navbar>
  );
}
