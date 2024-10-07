import HeadStrugIcon from '../assets/HeadStrug.png'

function StrugglePages() {
  return (
    <div className="">
      <section className="relative h-[70vh] w-full bg-cover bg-center" style={{ backgroundImage: `url(${HeadStrugIcon})` }}>
      {/* Overlay hitam transparan */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      {/* Konten teks di atas background */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full max-w-6xl mx-auto px-6 lg:px-12">
        {/* Judul besar */}
        <h1 className="text-white text-4xl lg:text-6xl font-extrabold tracking-tight mb-4">
          Perjuangan Singkat Sumpah Pemuda
        </h1>

        {/* Garis vertikal kecil di samping teks */}
        <div className="border-l-4 border-white pl-4">
          {/* Deskripsi */}
          <p className="text-white lg:text-lg leading-relaxed">
            Perjuangan menuju Sumpah Pemuda merupakan proses panjang yang dilalui oleh kaum muda Indonesia dalam upaya membangun kesadaran nasionalisme dan persatuan di tengah penjajahan kolonial Belanda. 
            Sebelum tercapainya Sumpah Pemuda pada tahun 1928, ada beberapa tonggak penting yang mengawali pergerakan pemuda Indonesia.
          </p>
        </div>
      </div>
    </section>
    <section className='bg-[#F4D9D0] h-[700px]'>

    </section>
    <section className='h-[700px]'>

    </section>
    </div>
  )
}

export default StrugglePages
