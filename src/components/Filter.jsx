
const Filter = () => {
  return (
    <div>
      <select className="shadow-md py-2 px-5">
      <option value="" disabled selected hidden>
           Filter by Region
      </option>
        <option value="All">All</option>
        <option value="Africa"> Africa </option>
        <option value="America"> America </option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  )
}

export default Filter
