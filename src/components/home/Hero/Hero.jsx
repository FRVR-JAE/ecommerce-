import React, { useState } from "react"
import { BiSearch } from "react-icons/bi"
import { products } from "../../assets/data/data"
import { SearchItems } from "./SearchItems"

export const Hero = () => {
  // search
  const [value, setValue] = useState("")
  const onChanage = (e) => {
    setValue(e.target.value)
  }

  const onSearch = (key) => {
    setValue(key)
    console.log("search", key)
  }
  return (
    <>
      <section className='hero'>
        <div className='container'>
        <h1>
                <label>Over <span>1000</span> Perfumes Curated </label>
                <br />
                <label>  <span> For You </span> </label>
            </h1>
            <p>
                High quality perfumes, suited to your very taste.
            </p>
          <div className='search'>
            <span>All Categories</span>
            <hr />
            <input type='text' placeholder='Search Products...' onChange={onChanage} value={value} />
            <button onClick={() => onSearch(value)}>
              <BiSearch className='serachIcon heIcon' />
            </button>
          </div>
          <SearchItems products={products} value={value} onSearch={onSearch} />
          <p>Our products range from VERSACE, DIOR, CHANEL.......</p>
        </div>
      </section>
    </>
  )
}
