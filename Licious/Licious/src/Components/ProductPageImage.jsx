
import styles from './ProductPageImage.module.css'

const ProductPageImage = () =>{
    const Data = [
        {
            img : 'https://www.licious.in/img/rebranding/landing/USP1.png' ,
            text : 'Premium produce, sourced directly from the origin'
        },
        {
            img : 'https://www.licious.in/img/rebranding/landing/USP2.png' ,
            text : 'Scientifically designed central production Unit'
        },
        {
            img : 'https://www.licious.in/img/rebranding/landing/USP3.png' ,
            text : 'Compliance to stringent quality checks'
        },
        {
            img : 'https://www.licious.in/img/rebranding/landing/USP4.png' ,
            text : 'Delivered fresh everyday'
        },
        {
            img : 'https://www.licious.in/img/rebranding/landing/USP5.png' ,
            text : 'Delivered fresh everyday'
        }
    ]
    return (
        <div>
           <div className={styles.ProductPageImage_Main}>
             <div className={styles.ProductPageImage_Box1}>
                <hr />
                <p>The <span>Licious</span> Way</p>
             </div>
             <div className={styles.ProductPageImage_Box2}>
                 {Data.map((el)=>{
                    return <div className={styles.ProductPageImage_Box3}>
                        <div className={styles.ProductPageImage_img}><img src={el.img} alt={el.text} /></div>
                        <div className={styles.ProductPageImage_text}><p>{el.text}</p></div>
                    </div>
                 })}
             </div>
           </div>
        </div>
    )
}

export default ProductPageImage