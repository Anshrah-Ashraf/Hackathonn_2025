import Header from "./home/navbar";
import Products from "./home/product";
import Browse from "./home/browse";
import BeautifulRooms from "./home/inspirations";
import Share from "./home/share";
import Hero from "./home/hero";
import Shop from "./shop/page";

export default function Home(){
  return(
    <>
      <Hero />
      <Browse />
      <Products />
      <BeautifulRooms />
      <Share />
    </>
  )
}