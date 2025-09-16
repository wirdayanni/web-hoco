import { Wind, Waves, Sun, Mountain, BookOpen, Car } from "lucide-react"; 

export default function About() {
  return (
    <section id="about" className="py-24 px-6 text-center bg-white">
      {/* Title */}
      <h2 className="text-2xl font-bold text-green-800 mb-8">ABOUT US</h2>

      {/* Descriptions */}
      <div className="max-w-4xl mx-auto text-gray-700 space-y-6 mb-12 leading-relaxed">
        <p>
          Menyapa setiap generasi, HOCO adalah destinasi yang penuh pesona di tengah
          keramaian kota Banda Aceh. Berdiri kokoh sejak tahun 2019, kedai kopi ini tidak hanya
          menjadi tempat untuk menikmati kopi berkualitas tinggi, tetapi juga sebuah wadah
          untuk pengalaman kuliner dan bersosialisasi yang tak terlupakan. HOCO membuka
          pintu pertamanya dengan harapan membawa kenyamanan dan kegembiraan melalui
          hidangan, suasana, juga pelayanan.
        </p>
        <p>
          HOCO mulanya didirikan dengan fokus pada penyajian kopi jenis arabika, kopi jenis ini
          memiliki banyak manfaat bagi kesehatan, dan pada masa itu belum terlalu digemari
          seperti halnya kopi jenis robusta. HOCO didirikan tidak hanya bertujuan untuk
          menyajikan kopi tetapi juga menjadi tempat yang mengedukasi, menginspirasi dan
          menyatukan komunitas. HOCO memiliki kekuatan untuk menghubungkan orang-orang
          dari berbagai latar belakang, dan ingin menciptakan ruang aman dan nyaman di mana
          orang dapat berkumpul, berbagi ide serta menikmati momen.
        </p>
      </div>

      {/* Facilities */}
      <h3 className="text-xl font-bold text-green-800 mb-4">OUR COMFORTABLE SPACE</h3>
      <p className="max-w-2xl mx-auto text-gray-600 mb-10">
        Discover the perfect spot for your next visit, whether you seek a quiet corner
        or a vibrant gathering place.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Indoor AC */}
        <div className="flex flex-col items-center text-center">
          <Wind className="text-green-700 w-10 h-10 mb-3" />
          <h4 className="font-semibold text-gray-800">Indoor AC</h4>
          <p className="text-sm text-gray-600 mt-2">
            Enjoy a cool, climate-controlled environment, perfect for focused work or
            relaxed conversations.
          </p>
        </div>

        {/* Indoor non AC */}
        <div className="flex flex-col items-center text-center">
          <Waves className="text-green-700 w-10 h-10 mb-3" />
          <h4 className="font-semibold text-gray-800">Indoor non AC</h4>
          <p className="text-sm text-gray-600 mt-2">
            Experience the natural breeze and cozy ambience in our comfortable indoor non-AC spaces.
          </p>
        </div>

        {/* Outdoor */}
        <div className="flex flex-col items-center text-center">
          <Sun className="text-green-700 w-10 h-10 mb-3" />
          <h4 className="font-semibold text-gray-800">Outdoor Seating</h4>
          <p className="text-sm text-gray-600 mt-2">
            Savor your coffee amidst the fresh air and vibrant surroundings on our spacious outdoor patio.
          </p>
        </div>

        {/* Outdoor Rooftop */}
        <div className="flex flex-col items-center text-center">
          <Mountain className="text-green-700 w-10 h-10 mb-3" />
          <h4 className="font-semibold text-gray-800">Outdoor Rooftop</h4>
          <p className="text-sm text-gray-600 mt-2">
            Take in panoramic views and unique atmosphere from our stylish rooftop seating area.
          </p>
        </div>

        {/* Prayer Room */}
        <div className="flex flex-col items-center text-center">
          <BookOpen className="text-green-700 w-10 h-10 mb-3" />
          <h4 className="font-semibold text-gray-800">Prayer Room</h4>
          <p className="text-sm text-gray-600 mt-2">
            A serene and clean space dedicated for prayer, offering peace and quiet.
          </p>
        </div>

        {/* Large Parking */}
        <div className="flex flex-col items-center text-center">
          <Car className="text-green-700 w-10 h-10 mb-3" />
          <h4 className="font-semibold text-gray-800">Large Parking</h4>
          <p className="text-sm text-gray-600 mt-2">
            Hassle-free parking available for all our guests, ensuring easy access to our cafe.
          </p>
        </div>
      </div>
    </section>
  );
}