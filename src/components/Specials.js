import Lemon_dessert from '../assets/images/lemon_dessert.jpg'
import greek_salad  from '../assets/images/greek_salad.jpg'
function Specials(){
    return(
    <>
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
    </div>
    </>
    )
}
export default Specials