import Lemon_dessert from '../assets/images/lemon_dessert.jpg'
import greek_salad  from '../assets/images/greek_salad.jpg'
import pasta from '../assets/images/redSauce_pasta.png'

function Specials(){
    return(
        <>
        <div className='special-section'>
            <h2 style={{textAlign: "center" , padding:'20px', margin: "40px"}}>Specials</h2>
            <div className='specials_container'>
                <div>
                    <img className='lemon_dessert' src={Lemon_dessert} alt="Lemon Desert"/>
                    <h3>Lemon Dessert</h3>
                    <p>the description of a lemon dessert</p>
                    <button>Order</button>
                </div>
                <div>
                    <img className='greek' src={greek_salad} alt="Greek Salad"/>
                    <h3>Greek Salad</h3>
                    <p>the description of greek salad</p>
                    <button>Order</button>
                </div>
                        <div>
                    <img className='pasta' src={pasta} alt="Pasta"/>
                    <h3>Pasta</h3>
                    <p>the description of pasta</p>
                    <button>Order</button>
                </div>
            </div>
        </div>
            </>
    )
}

export default Specials