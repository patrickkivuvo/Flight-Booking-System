
import './Card.css'
import Rooms from './data';
import { useCart } from 'react-use-cart';

const TheCard = (props) =>{
    const { addItem } = useCart()
    return(
        <div className="card" id='book'>
            {/* <div className='home-swiper'></div> */}
            <img src={props.img} alt=''/>
            <div className="details">
                <h3>{props.name}</h3>
                <h4>{props.price}</h4>
                <button onClick={() => addItem(props.item)}>Book Now</button>
            </div>
        </div>
    )
}

const Card = () => {
    return (
        <div className="container">
            <div className='cards'>
                {
                    Rooms.map( (room, index) =>(
                        <TheCard  
                            name={room.name} 
                            price={room.price} 
                            img={room.img} 
                            key={index} 
                            item={room}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Card;
