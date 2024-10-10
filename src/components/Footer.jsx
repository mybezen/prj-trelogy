import { Typography } from "@material-tailwind/react";
import XIcon from "/assets/XIcon.png";

//Icon

const LINKS = [
  {
    title: "Daftar Konten",
    items: ["Beranda", "Perjuangan Singkat", "Ikrar", "Blog", "Tim Kami"],
  },
  {
    title: "Member",
    items: ["Sultan", "Amri", "Sayid", "Bintang", "Fadhlan"],
  },
  {
    title: "Credit",
    items: ["PeintagonsTeam"],
  },
];

const currentYear = new Date().getFullYear();

export function FooterWithSocialLinks() {
  return (
    <footer className="w-full bg-white">
      <div className="w-full max-w-full px-8 pt-12">
        <div className="grid justify-between grid-cols-1 gap-4 md:grid-cols-2">
          <Typography
            variant="h5"
            className="mb-6 text-3xl italic text-black kenarose"
          >
            JejakPemuda
          </Typography>
          <div className="grid justify-between grid-cols-3 gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="black"
                  className="mb-3 opacity-40 poppins-bold"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="black"
                      className="py-1.5 poppins-regular transition-colors hover:text-green-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          {/* Logo/Icon */}
          <div className="flex gap-4 text-black-900 ">
            <Typography
              as="a"
              href=""
              target="_blank"
              className="transition-opacity opacity-80 hover:opacity-100"
            >
              <img src={XIcon} className="w-8 h-8"></img>
            </Typography>
            <Typography
              as="a"
              href="https://www.instagram.com/peintagons/"
              target="_blank"
              className="transition-opacity opacity-80 hover:opacity-100"
            >
              <svg
                className="w-8 h-8"
                fill="black"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </Typography>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full py-4 mt-12 border-t border-black md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center text-black poppins-regular md:mb-0"
          >
            &copy; {currentYear}{" "}
            <a href="https://instagram.com/peintagons">Peintagons</a>. Hak Cipta
            Dilindungi Undang-Undang
          </Typography>
        </div>
      </div>
    </footer>
  );
}
