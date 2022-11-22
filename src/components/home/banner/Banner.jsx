import React from "react"
import { banner } from "../../assets/data/data"
import {motion} from 'framer-motion'
export const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className='posts'>
          {banner.map((items) => (
            <div className='post' key={items.id}>
              <div className='content'>
                <div className='img'>
                  <img src={items.imgUrl} alt='' />
                </div>
                <div className='text'>
                  <h2>{items.title1}</h2>
                  <h2>{items.title2}</h2>
                  <p>{items.desc}</p>
                  <motion.button whileHover={{scale:1.2}} whileTap={{scale:0.9}} className='button'>SHOP NOW</motion.button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
