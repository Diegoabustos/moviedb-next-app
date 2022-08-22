import React, { useState, useRef } from "react";

type SearchInputProps = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const TIME = 300; //MS


const SearchInput = ({ setQuery }: SearchInputProps) => {
  const [text, setText] = useState("");
  const timer = useRef<NodeJS.Timeout>()


  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value;
      clearTimeout(timer.current);
      setText(value);
      timer.current = setTimeout(() => {
        setQuery(value);
    }, TIME);
  };

  return (
    <>
      <input
        className="h-10 pr-14 rounded-full p-4 text-md bg-zinc-700 text-white focus:outline-none focus:border focus:border-solid focus:border-cyan-200"
        type="text"
        placeholder="Search Movie"
        value={text}
        onChange={handleInput}
      />
    </>
  );
};

export default SearchInput;