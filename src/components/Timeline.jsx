function Timeline() {
  return (
    <div className="">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">1984</time>
            <div className="text-lg font-black">Awal Kebangkitan Nasional</div>
            Pada awal abad ke-20, kesadaran nasionalisme mulai tumbuh di
            kalangan bangsa Indonesia, dipengaruhi oleh munculnya pendidikan
            modern yang didirikan oleh Belanda. Kaum terpelajar yang
            berkesempatan mendapat pendidikan mulai menyadari pentingnya
            persatuan dalam melawan kolonialisme. Salah satu organisasi awal
            yang mendorong kebangkitan ini adalah Budi Utomo, didirikan pada
            tahun 1908, yang sering disebut sebagai awal Kebangkitan Nasional.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">1998</time>
            <div className="text-lg font-black">
              Munculnya Organisasi Pemuda
            </div>
            Setelah Budi Utomo, berbagai organisasi kepemudaan bermunculan,
            seperti Tri Koro Dharmo (yang kemudian menjadi Jong Java), Jong
            Sumatranen Bond, Jong Ambon, dan Jong Minahasa. Meskipun
            organisasi-organisasi ini masih bersifat kedaerahan, mereka mulai
            menyadari pentingnya persatuan di antara pemuda dari berbagai suku
            bangsa.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">1926</time>
            <div className="text-lg font-black">Kongres Pemuda I</div>
            Kongres Pemuda pertama diadakan pada tahun 1926 di Jakarta. Kongres
            ini bertujuan untuk memajukan gagasan persatuan Indonesia, namun
            belum berhasil menyatukan sepenuhnya para pemuda karena masih adanya
            sentimen kedaerahan yang kuat. Meskipun begitu, Kongres Pemuda I
            menjadi langkah awal yang penting dalam menyatukan visi perjuangan.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">1928</time>
            <div className="text-lg font-black">Kongres Pemuda II</div>
            Pada 27-28 Oktober 1928, diadakan Kongres Pemuda II yang dihadiri
            oleh organisasi-organisasi kepemudaan dari berbagai daerah, termasuk
            Jong Java, Jong Batak, Jong Ambon, Jong Celebes, Pemuda Indonesia,
            dan lainnya. Dalam kongres ini, para pemuda berhasil merumuskan
            Sumpah Pemuda, sebuah deklarasi yang menegaskan komitmen mereka
            terhadap persatuan bangsa Indonesia.
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Timeline;
