import { useState } from 'react'
import './CardItem.scss';
import {AiOutlineStar as Star} from 'react-icons/ai';
import Button from '../Button/Button';

const CardItem = ({card, onOpenModal, onOpenSecondModal}) => {
    const [isHovered, setIsHovered] = useState(false);
    const {name, price, color, urlImg, article} = card;

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <li className="goods-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="goods-img">
                <Star onClick={onOpenSecondModal}/>
                <img src={urlImg} width="270" height="393" alt={name + article} />
            </div>
            <div className='goods-info'>
                {isHovered ?
                    (<Button text='Add to cart' onClick={onOpenModal}/>) :
                    (<>
                        <p className='goods-title'>
                            {name}
                            <span className='goods-color'>color: {color}</span>
                        </p>
                        <p>{price + ' PLN'}</p>
                    </>)
                }
            </div>
        </li>
    );
}
 
export default CardItem;