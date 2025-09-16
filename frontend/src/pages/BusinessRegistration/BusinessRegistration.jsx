import NavbarComponent from "../../components/NavbarComponent";

const BusinessRegistration = () => {
  return (
    <>
      <NavbarComponent />

      <section className="relative w-full">
        <figure className="relative w-full overflow-hidden
        min-h-[80px] sm:min-h-[120px] md:min-h-[200px] lg:min-h-[320px]">
          <img
            src="/img/carousel/one.webp"
            alt="Business Registration banner"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gray-900/40 z-10 pointer-events-none" />

          <div className="absolute inset-0 z-20 flex items-center justify-center mx-[150px] p-4">
            <h1
              className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold uppercase text-start drop-shadow-md"
              aria-hidden="true"
            >
              Business Registration
            </h1>
          </div>
        </figure>
      </section>
    </>
  );
};

export default BusinessRegistration;
