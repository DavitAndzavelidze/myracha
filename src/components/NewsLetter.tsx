const NewsLetter = () => {
  return (
    <section className="container mx-auto px-4">
      <form className="bg-green-500/50  dark:bg-gray-900 dark:text-gray-100 px-4 rounded-xl md:rounded-[30px] flex flex-col justify-center items-center py-6 md:py-24">
        <p className="md:font-semibold text-lg md:text-xl text-center mb-3">
          გამოგყევით Facebook - ზე და instagram - ზე
        </p>
        <h6 className="md:font-semibold font-medium text-2xl md:text-3xl lg:text-5xl text-center">
          გაეცანით სიახლეებს რაჭაზე
        </h6>

        <div className="flex-col justify-center w-full md:flex-row flex pt-12">
          <input
            type="email"
            placeholder="Your email"
            className="placeholder:text-gray-800 h-11 md:h-16 mb-2 md:mb-0 rounded-xl pl-6 md:mr-5 md:w-[452px] focus:outline-none"
          />
          <button type="button" className="btn-primary shadow-md">
            გამოწერა
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewsLetter;
