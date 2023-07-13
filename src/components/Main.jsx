import Filter from "./Filter"
import Search from "./Search"



const Main = () => {
  return (
    <div className="my-container">
      <div className="flex flex-col">
        <Search/>
        <Filter/>
      </div>
    </div>
  )
}

export default Main
