import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
const Cart = () => {
    return (
        <div className='cart'>
            <img src='/accest/cart/PLATINUM_NCC1980_T42023_Header_1263x60.png'></img>
            <Header/>
            <div className='cart__content'>
                <h3>GIỎ HÀNG <span>(0 sản phẩm)</span></h3>
                <div className='cart__content__body'>
                    <div>
                    <img src='/accest/cart/ico_emptycart.svg'></img>
                    <p>Chưa có sản phẩm trong giỏ hàng của bạn</p>
                    <button className='btn btn-danger'>MUA SẮM NGAY</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Cart;
