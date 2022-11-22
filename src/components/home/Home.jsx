import React from "react"
import { Banner } from "./banner/Banner"
import { Blog } from "./blog/Blog"
import { Details } from "./details/Details"
import { Card } from "./Hero/Card"
import { Hero } from "./Hero/Hero"
import { Product } from "./product/Product"
import { Testimonial } from "./testimonial/Testimonial"
import { TopProduct } from "./top/TopProduct"

export const Home = () => {
  return (
    <>
      <Hero />
      <Card />
      <Product />
      <Banner />
      <TopProduct />
      <Testimonial />
      <Blog />
    </>
  )
}
