export default function Hero(){
  return (
<section
        className="relative h-screen flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/herobanner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black bg-opacity-40 absolute inset-0"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to</h1>
          <h2 className="text-5xl md:text-7xl font-extrabold mt-2">
            HOCO Coffee
          </h2>
          <p className="mt-4 text-lg md:text-xl">
            your cozy place for coffee, events, and more
          </p>
        </div>
      </section>
  )}