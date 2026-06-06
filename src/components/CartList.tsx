
import CartItem from './Cartitem';
import { useCartActions, useCartInfo,  } from '../hooks/useCartStore';
import { useEffect } from 'react';

const CartList = () => {
    const {cartItems} = useCartInfo();
    const {calculateTotals} = useCartActions();

    useEffect(()=> {
        calculateTotals();
    }, [cartItems, calculateTotals])

    return (
        <div className='flex flex-col items-center justify-center'>
            <ul>
                {cartItems.map((item) => (
                    <CartItem key={item.id} lp={item} />
                ))}
            </ul>
        </div>
    );
};

export default CartList;