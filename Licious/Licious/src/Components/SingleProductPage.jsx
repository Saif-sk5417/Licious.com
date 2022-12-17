import { ChakraProvider } from "@chakra-ui/react"
import { useState } from "react"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { SingleCard } from "./SingleCard"
import Styles from './SingleProductPage.module.css'


const SingleProductPage = () =>{
    const { id } = useParams()
    const ChickenData = useSelector(store => store.ChickenData)
    const [CurrentProduct , setCurrentProduct] = useState({})
    useEffect(()=>{
     if(id){
        const  SingleProduct = ChickenData.find(item => item.id === Number(id))
        SingleProduct && setCurrentProduct(SingleProduct)
     }
    },[id])
    return (
        <div>
            <h1>Single Product</h1>
             <div className={Styles.SingleProductPage_Main} >
                <div className={Styles.SingleProductPage_Box1}>
                    <img src={CurrentProduct.Image} alt={CurrentProduct.Name}/>
                </div>
                <div className={Styles.SingleProductPage_Box2}>
                   <div className={Styles.SingleProductPage_Box22}>
                    <h1>{CurrentProduct.Name}</h1>
                    <h2 className={Styles.SingleProductPage_Box22_category}>{CurrentProduct.sub_category}</h2>
                    <hr />
                   </div>
                   <p className={Styles.SingleProductPage_Box22_des}>{CurrentProduct.des_2}</p>
                   <h2 className={Styles.SingleProductPage_Box22_Price}>MRP : ₹{CurrentProduct.Price}</h2>
                </div>
             </div>
        </div>
    )
}

export { SingleProductPage }