
import search from "../assets/search.png";
const Search = () => {
  return (
    <div>
      <div className="relative">
        <img src={search} alt="" className="absolute top-9 left-3" />
        <input
        type="text"
        className="w-full text-center py-3 my-7 shadow-md rounded-md"
        placeholder="Search for a country..."/>
      </div>
    </div>
  )
}

export default Search
