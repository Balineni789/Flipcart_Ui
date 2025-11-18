
import React from 'react'
import './Top Deals.css'
import addImg from './Images/Add.png'
import Img1 from './Images/img1.png'
import Img2 from './Images/img2.png'
import Img3 from './Images/img3.png'
import Img4 from './Images/img4.png'
import Img5 from './Images/img5.png'

const Top_Deals = () => {
  return (
    <div>
       <div className ='conts'> 
         <h1>Top Deals</h1>

         <div className ='img1_cont'>
           <img src ={Img1}/>
           <img src ={Img2}/>
           <img src ={Img3}/>
           <img src ={Img4}/>
           <img src ={Img5}/>

           <div className ='img_Txt'>
             <h3>Projectors <span>From ₹6899</span></h3>
             <h3>Speakers   <span>From ₹4799</span></h3>
             <h3>Moniters   <span>From ₹7999</span></h3>
             <h3>Monitor    <span>From ₹8799</span></h3>
             <h3>Camera     <span>From ₹5999</span></h3>
           </div>

          <button className ='Nxt_Btn'>
            <svg width ="24" height ="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points ="9 18 15 12 9 6"></polyline>
            </svg>
           </button>
         </div>
       </div>

      <div className ='img_c'>
         <img src={addImg} alt='deal' className ='img_'/>
      </div>

    </div>
  )
}

export default Top_Deals