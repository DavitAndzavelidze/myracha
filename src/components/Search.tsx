"use client";

import { FaChevronDown } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { ChangeEvent, FC } from "react";

type Props = {
  roomTypeFilter: string;
  searchQuery: string;
  setRoomTypeFilter: (value: string) => void;
  setSearchQuery: (value: string) => void;
};

const Search: FC<Props> = ({
  roomTypeFilter,
  searchQuery,
  setRoomTypeFilter,
  setSearchQuery,
}) => {
  const router = useRouter();

  const handleRoomTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setRoomTypeFilter(event.target.value);
  };
  const handleSearchQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterClick = () => {
    router.push(`/rooms?roomType=${roomTypeFilter}&searchQuery=${searchQuery}`);
  };

  return (
    <section
      className={`relative bg-green-500/50  dark:bg-gray-900 rounded-lg dark:text-gray-100 px-4 py-6 shadow-md `}
    >
      <div className="container mx-auto flex gap-4 flex-wrap justify-between items-center">
        <div className="w-full md:1/3 lg:w-auto mb-4 md:mb-0">
          <label className="block text-sm font-normal mb-2 ">
            სასტუმროს ტიპი
          </label>
          <div className="relative inline-block w-full max-w-[300px] font-sans-select">
            <select
              value={roomTypeFilter}
              onChange={handleRoomTypeChange}
              className="block w-full px-4 py-2 pr-10 text-gray-700 bg-white border border-gray-300 rounded-md appearance-none cursor-pointer focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
            >
              <option value="">ყველა</option>
              <option value="სასტუმრო">სასტუმრო</option>
              <option value="კოტეჯი">კოტეჯი</option>
              <option value="საოჯახო სასტუმრო">საოჯახო სასტუმრო</option>
            </select>
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 w-3 h-3 transition-transform duration-200 peer-focus:rotate-180"
              aria-hidden="true"
            >
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M1 1L6 6L11 1"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="w-full md:1/3 lg:w-auto mb-4 md:mb-0">
          <label className="block text-sm font-normal mb-2 ">მოძებნე</label>
          <input
            type="search"
            id="search"
            placeholder="სასტუმრო..."
            className="w-full px-4 py-3 rounded leading-tight focus:outline-none text-black placeholder:text-black "
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
        </div>

        <button
          className="btn-primary dark:bg-primary dark:shadow-md"
          type="button"
          onClick={handleFilterClick}
        >
          ძებნა
        </button>
      </div>
    </section>
  );
};

export default Search;
