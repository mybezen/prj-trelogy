import React from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? 'rotate-180' : ''
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div
        className={`bg-red-800 md:px-[91px] md:py-[25px] px-2 rounded-xl md:rounded-3xl duration-300 drop-shadow-2xl transition-[width] w-full ${
          open === 1 ? 'md:w-8/12' : 'md:w-5/12'
        }`}
      >
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className="border-b-0 flex justify-center md:text-2xl poppins-bold"
          >
            Apa Itu Sumpah Pemuda?
          </AccordionHeader>
          <AccordionBody className="text-white md:text-lg text-[15px] p-5 plus-jakarta-sans-medium">
            Sumpah Pemuda adalah keputusan Kongres Pemuda Kedua yang
            diselenggarakan dua hari, 27—28 Oktober 1928 di Batavia (kini
            bernama Jakarta). Keputusan ini menegaskan cita-cita akan "tanah air
            Indonesia", "bangsa Indonesia", dan "bahasa Indonesia". Keputusan
            ini diharapkan menjadi asas bagi setiap perkumpulan kebangsaan
            Indonesia dan agar disiarkan dalam berbagai surat kabar dan
            dibacakan di muka rapat perkumpulan-perkumpulan.
          </AccordionBody>
        </Accordion>
      </div>
    </>
  );
}
