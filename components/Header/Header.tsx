import Link from "next/link";
import Image from "next/image";
// Components
import SearchInput from "../SearchInput/SearchInput";

type HeaderProps = {
  setQuery?: React.Dispatch<React.SetStateAction<string>>;
};

const Header = ({ setQuery }: HeaderProps) => (
  <div className="sticky flex top-0 z-40 w-full h-24 bg-zinc-900">
    <div className="flex justify-between w-full h-full max-w-7xl m-auto px-4">
      <Link href="/">
        <div className="flex items-center cursor-pointer">
          <div className="invisible md:visible">
            <Image width="150" height="50" src="/logo.svg" alt="logo" />
          </div>
          <div className="absolute md:invisible pt-2">
            <Image
              width="82"
              height="82"
              src="/logo-small.svg"
              alt="logo-small"
            />
          </div>
        </div>
      </Link>
      {setQuery ? (
        <div className="relative flex items-center">
          <SearchInput setQuery={setQuery} />
        </div>
      ) : null}
    </div>
  </div>
);

export default Header;
