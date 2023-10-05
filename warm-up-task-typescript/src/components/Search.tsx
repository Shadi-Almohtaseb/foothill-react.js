const Search = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-6 max-w-[40rem] w-full shadow-lg bg-[#f2f2f2] rounded-md mt-20 py-1 px-5">
        <img
          width="25"
          height="25"
          src="https://img.icons8.com/ios/50/search--v1.png"
          alt="search--v1"
        />
        <input
          type="text"
          placeholder="Find members..."
          className="bg-[#f2f2f2] rounded-md h-[2.2rem] w-full outline-none"
        />
      </div>
    </>
  );
};

export default Search;
