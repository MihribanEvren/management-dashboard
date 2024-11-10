import { CiSearch } from 'react-icons/ci';
import { Input } from '../ui/input';

function Search() {
  return (
    <div className="relative flex items-center w-1/2">
      <CiSearch className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
      <Input
        placeholder="Search for Application here"
        className="pl-10 bg-lightgray"
      />
    </div>
  );
}

export default Search;
