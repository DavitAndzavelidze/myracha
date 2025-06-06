"use client";

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
    <section className="bg-green-500/50 dark:bg-gray-900 dark:text-gray-100 px-4 py-6 rounded-lg ">
      <div className="container mx-auto flex gap-4 flex-wrap justify-between items-center">
        <div className="w-full md:1/3 lg:w-auto mb-4 md:mb-0">
          <label className="block text-sm font-normal mb-2 ">
            სასტუმროს ტიპი
          </label>
          <div className="relative">
            <select
              value={roomTypeFilter}
              onChange={handleRoomTypeChange}
              className="w-full px-4 py-2 capitalize rounded leading-tight focus:outline-none text-black"
            >
              <option value="">ყველა</option>
              <option value="სასტუმრო">სასტუმრო</option>
              <option value="კოტეჯი">კოტეჯი</option>
              <option value="საოჯახო სასტუმრო">საოჯახო სასტუმრო</option>
            </select>
          </div>
        </div>
        <div className="w-full md:1/3 lg:w-auto mb-4 md:mb-0">
          <label className="block text-sm font-normal mb-2 ">მოძებნე</label>
          <input
            type="search"
            id="search"
            placeholder="სასტუმრო..."
            className="w-full px-4 py-3 rounded leading-tight focus:outline-none placeholder:text-black "
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
