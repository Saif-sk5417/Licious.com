import styles from './HomePageSlider2.module.css'

import Slider from "react-slick";
 function SampleNextArrow(props) {
     const { className, style, onClick } = props;
     return (
       <div
         className={className}
         style={{ ...style,
         padding : '15px 10px' ,
         borderRadius:'30px',
         backgroundColor:'#c5c5cb',
         margin:'0px -25px 0px 0px'
      }}
         onClick={onClick}
       />
     );
   }
  
   function SamplePrevArrow(props) {
     const { className, style, onClick } = props;
     return (
       <div
         className={className}
         style={{ ...style,
             padding : '15px 10px' ,
             borderRadius:'30px',
             backgroundColor:'#c5c5cb',
         }}
         onClick={onClick}
       />
     );
   }
const HomePageSlider2 =()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    return (
        <div  className={styles.HomPage_slider2_Main}>
        <Slider {...settings}>
          <div className={styles.HomPage_slider2_Child1}>
            <img src="https://d2407na1z3fc0t.cloudfront.net/inTheNews/35/inthenews_62aadde78bdae" alt="img1"/>
          </div>
          {/* <div className={styles.HomPage_slider2_Child2}>
          <img src="https://d2407na1z3fc0t.cloudfront.net/inTheNews/40/inthenews_62aae21e9a38e" alt="img7"/>
          </div> */}
          <div className={styles.HomPage_slider2_Child1}>
          <img src="https://d2407na1z3fc0t.cloudfront.net/inTheNews/35/inthenews_62aadde78bdae" alt="img2"/>
          </div>
          {/* <div className={styles.HomPage_slider2_Child3}>
          <img src="https://d2407na1z3fc0t.cloudfront.net/inTheNews/42/inthenews_62aae2a6d9bc4" alt="img8"/>
          </div> */}

          {/* <div className={styles.HomPage_slider2_Child2}>
          <img src="https://d2407na1z3fc0t.cloudfront.net/inTheNews/40/inthenews_62aae21e9a38e" alt="img8"/>
          </div> */}
          <div className={styles.HomPage_slider2_Child6}>
          <img src="https://d2407na1z3fc0t.cloudfront.net/inTheNews/45/inthenews_62aae4c4d8331" alt="img8"/>
          </div>
          <div className={styles.HomPage_slider2_Child4}>
          <img src="https://d2407na1z3fc0t.cloudfront.net/inTheNews/43/inthenews_62aae2dadd8aa" alt="img8"/>
          </div>
          <div className={styles.HomPage_slider2_Child7}>
          <img src="https://d2407na1z3fc0t.cloudfront.net/inTheNews/38/inthenews_62aae10540001" alt="img4"/>
          </div>
          <div className={styles.HomPage_slider2_Child1}>
          <img src="https://d2407na1z3fc0t.cloudfront.net/inTheNews/35/inthenews_62aadde78bdae" alt="img5"/>
          </div>
          <div className={styles.HomPage_slider2_Child5}>
          <img src="https://d2407na1z3fc0t.cloudfront.net/inTheNews/43/inthenews_62aae2dadd8aa" alt="img8"/>
          </div >
        </Slider>
      </div>
    )
}

export { HomePageSlider2 }



