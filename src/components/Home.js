import React from "react"
import main_image from '../assets/images/mainpng.png'
import customer1 from '../assets/images/customer 1.png'
import customer2 from '../assets/images/customer 2.png'
import customer3 from '../assets/images/customer 3.png'
import customer4 from '../assets/images/customer 4.png'
import Header from "./Header"
import Specials from "./Specials"
import { Link } from "react-router-dom"
function Home(props){
    return(
        <>
        
           <div className='header'>
                <div className="header-info">
                    <Header name='Little Lemon' state='Chicago'/>
                    <p>Welcome to Little Lemon, your cozy neighborhood bistro in the heart of Chicago. We pride ourselves on serving delicious, handcrafted dishes made from the freshest ingredients. Whether you're joining us for a casual lunch or a special dinner, our warm and inviting atmosphere is perfect for any occasion. Come experience the flavors of Little Lemon and let us make your dining experience unforgettable!</p>
                    <button className="main_reserve" ><Link to="/BookingForm" style={{color: 'black', textDecoration: 'none'}}>Reserve a Table</Link></button>
                </div>
                <div className="header-image">
                    <img src={main_image} alt="Main"/>
                </div>
           </div>
           <Specials/>
            <h2>What our customers are saying</h2>
            <div className="your_thoughts">
                <div>
                    <img className="customer1" src={customer1} alt="Customer 1"/>
                    <h1>Customer 1</h1>
                    <p>Customer 1's review</p>
                </div>
                                <div>
                    <img className="customer2" src={customer2} alt="Customer 2"/>
                    <h1>Customer 2</h1>
                    <p>Customer 2's review</p>
                </div>
                                <div>
                    <img className="customer3" src={customer3} alt="Customer 3"/>
                    <h1>Customer 3</h1>
                    <p>Customer 3's review</p>
                </div>
                                <div>
                    <img className="customer1" src={customer4} alt="Customer 4"/>
                    <h1>Customer 4</h1>
                    <p>Customer 4's review</p>
                </div>
            </div>
        </>
    )
}
export default Home