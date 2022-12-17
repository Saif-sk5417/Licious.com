import { ChakraProvider } from "@chakra-ui/react"
import { useEffect } from "react"
import { BsTypeH1 } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"
import { getChickenData } from "./Redux/action"
import { SingleCard } from "./SingleCard"
import styles from './SingleCard.module.css'

const ChickenPage = () =>{
const dispatch = useDispatch()
const ChickenData = useSelector((store) => store.ChickenData)
  useEffect(()=>{
    dispatch(getChickenData())
  },[])


    return (
   <div>
    <Navbar />
       <div  className={styles.SingleCard_radio_Box}>
       <hr />
       <div className={styles.SingleCard_radio_Main}>
         <div className={styles.SingleCard_radio}>
           <input type="radio"/>
           <label>Boneless</label>
         </div>
         <div className={styles.SingleCard_radio}>
           <input type="radio"/>
           <label>Bone-IN</label>
         </div>
         <div className={styles.SingleCard_radio}>
           <input type="radio"/>
           <label>Cleaned</label>
         </div>
         <div className={styles.SingleCard_radio}>
           <input type="radio"/>
           <label>Curry Cut</label>
         </div>
         <div className={styles.SingleCard_radio}>
           <input type="radio"/>
           <label>Thinly Sliced</label>
         </div>
         <div className={styles.SingleCard_radio}>
           <input type="radio"/>
           <label>Fillet</label>
         </div>
         <div className={styles.SingleCard_radio}>
           <input type="radio"/>
           <label>STRIPS</label>
         </div>
       </div>
       <hr /> 
       <div className={styles.SingleCard_Select_box}>
        <div className={styles.SingleCard_Select_Main}>
        <select className={styles.SingleCard_Select}>
            <option value="">Price</option>
            <option value="Ascending">Ascending</option>
            <option value="Descending">Descending</option>
        </select>
        </div>
        <div className={styles.SingleCard_Select_Main}>
        <select className={styles.SingleCard_Select}>
            <option value="">Name</option>
            <option value="">A to Z</option>
            <option value="">Z to A</option>
        </select>
        </div>
       </div>            
       <div className={styles.SingleCard_Main}>
         {ChickenData.map((el)=><NavLink to = {`/Chicken/${el.id}`}><ChakraProvider>
         <SingleCard
         key = {el.id}
         Name = {el.Name}
         image = {el.Image}
         des_1 = {el.des_1}
         weights = {el.Weight}
         Price = {el.Price}
         quantity = {el.quantity}
         /></ChakraProvider></NavLink>)}
        </div>
       </div>
   </div>
    )
}
export { ChickenPage  }







