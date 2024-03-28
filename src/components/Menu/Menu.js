// Menu.jsx
import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Card } from '../Card/Card';
import { Navbar } from '../Navbar'
import './index.css'
import { redirect } from 'react-router-dom';

const menu = {
    'tea': [
        { name: 'Special Tea', price: '20' },
        { name: 'Black Tea', price: '20' },
        { name: 'Hot Coffee', price: '30' },
        { name: 'Black Tea', price: '20' },
        { name: 'Hot Coffee', price: '30' },
        // ... other tea items
    ],
    'coffee': [
        { name: 'Thik Cold Coffee', price: '50' },
        { name: 'Jumbo Cold Coffee', price: '70' },
        { name: 'Cold Coffee With Crush', price: '70' },
        { name: 'Cold Coffee With Ice Cream', price: '70' },
        { name: 'Evening Special Cold Coffee', price: '100' },
        // ... other coffee items
    ],
    'cadb': [
        { name: 'Cad (Chocolate)', price: '120' },
        { name: 'Cad (Mango)', price: '120' },
        { name: 'Cad (Strawberry)', price: '120' },
        { name: 'Cad (Butterschotch)', price: '120' },
        // ... other coffee items
    ],
    'mojito': [
        { name: 'Mint Mojito', price: '99' },
        { name: 'Lemon Mojito', price: '99' },
        { name: 'Virgin Mojito', price: '99' },
        { name: 'Blueberry Mojito', price: '120' },
        { name: 'Raspberry Mojito', price: '120' },
        { name: 'Blood Orange Mojito', price: '120' },
        { name: 'Water Melon Mojito', price: '120' },
        // ... other coffee items
    ],
    'shake': [
        { name: 'Vanilla Shake', price: '100' },
        { name: 'Strawberry Shake', price: '100' },
        { name: 'Mango Shake', price: '100' },
        { name: 'Butter Scotch Shake', price: '100' },
        { name: 'Mix Shake', price: '100' },
        { name: 'Brownie Shake', price: '100' },
        { name: 'Chocolate Shake', price: '100' },
        { name: 'Oreo Shake', price: '100' },
        { name: 'Kit-Kat Shake', price: '100' },
        // ... other coffee items
    ],
    'burger': [
        { name: 'Veg Burger', price: '70' },
        { name: 'Veg Crispy Burger', price: '80' },
        { name: 'Veg Cheese Burger', price: '90' },
        { name: 'Schezwan Veg Burger', price: '120' },
        { name: 'Crispy Cheese Blast Burger', price: '130' },
        { name: 'Mexican Burger', price: '140' },
        { name: 'Paneer Burger', price: '100' },
        { name: 'Paneer Cheese Burger', price: '120' },
        { name: 'Corn Burger', price: '90' },
        { name: 'Corn Cheese Burger', price: '110' },
        { name: 'Maggi Burger', price: '110' },
        // ... other coffee items
    ],
    'sandwich': [
        { name: 'Veg Non Grill', price: '70' },
        { name: 'Veg Grill', price: '80' },
        { name: 'Crispy Aloo Tikki Grill', price: '100' },
        { name: 'Schezwan Veg Grill', price: '100' },
        { name: 'Veg Makhani Grill', price: '120' },
        { name: 'Paneer Tikka Grill', price: '120' },
        { name: 'Panner Makhani Grill', price: '120' },
        { name: 'Corn & Capsicum Grill', price: '100' },
        { name: 'Corn Mayo Grill', price: '100' },
        { name: 'Corn Mayo Makhani Grill', price: '120' },
        { name: 'Chocolate Grill', price: '70' },
        { name: 'Cheese Chilly Tost', price: '100' },
        { name: 'Bread Butter', price: '50' },
        { name: 'Garlic Bread (Own Bread )', price: '200' },
        // ... other coffee items
    ],
    'maggi': [
        { name: 'Plain Maggi', price: '60' },
        { name: 'Masala Maggi', price: '80' },
        { name: 'Butter Masala Maggi', price: '100' },
        { name: 'Cheese Chilly Garlic Maggi', price: '120' },
        { name: 'Italian Maggi', price: '120' },
        { name: 'Tandoor Maggi', price: '120' },
        // ... other coffee items
    ],
    'pasta': [
        { name: 'White Sauce Pasta', price: '120' },
        { name: 'Red Sause Pasta', price: '120' },
        { name: 'Spicy Desi Pasta', price: '140' },
        { name: 'Mix Sause Pasta', price: '150' },
        { name: 'Extra Cheese', price: '30' },
        // ... other coffee items
    ],
    'pizza': [
        { name: 'Cappuccino', price: '25' },
        { name: 'Espresso', price: '22' },
        { name: 'Latte', price: '28' },
        // ... other coffee items
    ],
    'fries': [
        { name: 'Plain French Fries', price: '70' },
        { name: 'Masala French Fries', price: '80' },
        { name: 'Peri-Peri French Fries', price: '90' },
        { name: 'Desi Schezwan Fries', price: '100' },
        { name: 'Cheesy Mayo French Fries', price: '120' },
        { name: 'Cheesy French Fries', price: '120' },
        { name: 'Jalapeno Cheese Fries', price: '120' },
        { name: 'Chipotle Cheese Fries', price: '120' },
        { name: 'Mexican Fries', price: '150' },
        { name: 'Chocolate Fries', price: '120' },
        { name: 'Fully Loaded Fries', price: '180' },
        // ... other coffee items
    ],
    'bites': [
        { name: 'Momos (Fried/Steem)', price: '70' },
        { name: 'Veg Nuggets', price: '90' },
        { name: 'Veg Kabab', price: '80' },
        { name: 'Cheesy Samosa', price: '80' },
        { name: 'Veg Finger', price: '80' },
        { name: 'Spring Roll', price: '50' },
        { name: 'Crispy Onion Ring', price: '100' },
        { name: 'Potato Wedges', price: '80' },
        // ... other coffee items
    ],
    'chocolate': [
        { name: 'Chocolate Burger', price: '99' },
        { name: 'Chocolate Pizza', price: '250' },
        { name: 'Sizzling Brownie', price: '200' },
        { name: 'Hot Chocolate', price: '99' },
        { name: 'Chocolate Shot', price: '55' },
        { name: 'Hot Brownie With Chocolate', price: '99' },
        { name: 'Hot Brownie With Ice - Cream', price: '150' },
        { name: 'Hot Chocolate Cak', price: '99' },
        // ... other coffee items
    ],
    'starter': [
        { name: 'Tawa Paneer', price: '200' },
        { name: 'Corn Fry', price: '150' },
        { name: 'Crispy Corn Chilly', price: '200' },
        { name: 'Paneer Crispy Fry', price: '200' },
        { name: 'Paneer Crispy Chilly', price: '200' },
        // ... other coffee items
    ],
    'nachose': [
        { name: 'Salted Nachose', price: '150' },
        { name: 'Corn and Olive Nachose', price: '200' },
        { name: 'Veggie Nachose', price: '220' },
        { name: 'Evening Special Nachose', price: '250' },
        // ... other coffee items
    ],
    'rolls': [
        { name: 'Veg Roll', price: '150' },
        { name: 'Veg Cheese Roll', price: '150' },
        { name: 'Veg Creamy Roll', price: '150' },
        { name: 'Panner Roll', price: '200' },
        { name: 'Panner Cheese Roll', price: '250' },
        { name: 'Corn and Mayo Roll', price: '250' },
        { name: 'Aloo Tikki Roll', price: '250' },
        // ... other coffee items
    ],
    'desserts': [
        { name: 'Vanilla Ice Cream', price: '60' },
        { name: 'Butter Scotch', price: '60' },
        { name: 'Chocolate', price: '60' },
        { name: 'Mango', price: '60' },
        { name: 'Strawberry', price: '60' },
        { name: 'Red Velvet Cake Jar', price: '250' },
        // ... other coffee items
    ],
    'combo': [
        { name: 'Fries + Coke', price: '100' },
        { name: 'Fries + Cold Coffee', price: '100' },
        { name: 'Veg Burger + Coke', price: '100' },
        { name: ' Veg Burger + French Fries + Coke', price: '150' },
        { name: ' Veg Sandwich + French Fries + Coke', price: '150' },
        { name: 'Veggie Pizza 8” + Coke', price: '220' },
        { name: 'Veggie Pizza 8” + French Fries + Coke', price: '250' },
        { name: ' Single Pizza 8” + French Fries + Coke', price: '200' },

        // ... other coffee items
    ],
};

export function Menu() {
    const teaBackgroundUrl = 'https://res.cloudinary.com/dx2ukhurs/image/upload/v1709975796/tea-bg_d8fyry.jpg';
    const coffeeBackgroundUrl = 'https://res.cloudinary.com/dx2ukhurs/image/upload/v1709976018/coffee-bg_rkeq1r.jpg';
    const cadbBackgroundUrl = 'https://res.cloudinary.com/dx2ukhurs/image/upload/v1709498372/cadb-bg_ejhkzz.jpg';
    const mojitoBackgroundUrl = 'https://res.cloudinary.com/dx2ukhurs/image/upload/v1709498374/mojito-bg_xmkcwf.jpg';
    const shakeBackgroundUrl = 'https://res.cloudinary.com/dx2ukhurs/image/upload/v1709498377/shake-bg_jxkjnd.jpg';
    const burgerBackgroundUrl = 'https://res.cloudinary.com/dx2ukhurs/image/upload/v1709498382/burger-bg_rosfyo.jpg';
    const sandwichBackgroundUrl = 'https://res.cloudinary.com/dx2ukhurs/image/upload/v1709498377/sandwich-bg_ztr38i.jpg';
    const maggiBackgroundUrl = 'https://res.cloudinary.com/dx2ukhurs/image/upload/v1709498372/maggi-bg_eescs5.jpg';
    const pastaBackgroundUrl = 'https://res.cloudinary.com/dx2ukhurs/image/upload/v1709498377/pasta-bg_i9hfyv.jpg';
    const pizzaBackgroundUrl = 'https://res.cloudinary.com/dx2ukhurs/image/upload/v1709498375/pizza-bg_yqcuhy.jpg';
    const friesBackgroundUrl = 'https://res.cloudinary.com/dx2ukhurs/image/upload/v1709498371/fries-bg_zalwml.jpg';
    const quickbitesBackgroundUrl = 'https://res.cloudinary.com/dx2ukhurs/image/upload/v1709498378/quick-bites-bg_qie61i.jpg';
    const chocolateBackgroundUrl = 'https://res.cloudinary.com/dx2ukhurs/image/upload/v1709498372/chocolate-bg_ngcw24.jpg';
    const starterBackgroundUrl = 'https://res.cloudinary.com/dx2ukhurs/image/upload/v1709498377/starter-bg_calfaj.jpg';
    const nachosBackgroundUrl = 'https://res.cloudinary.com/dx2ukhurs/image/upload/v1709498375/nachos-bg_w3uxtt.jpg';
    const rollsBackgroundUrl = 'https://res.cloudinary.com/dx2ukhurs/image/upload/v1709498376/rolls-bg_e9m2m4.jpg';
    const dessertBackgroundUrl = 'https://res.cloudinary.com/dx2ukhurs/image/upload/v1709498374/dessert-bg_ga7yna.jpg';
    const comboBackgroundUrl = 'https://res.cloudinary.com/dx2ukhurs/image/upload/v1709499266/combo-bg_ghesvh.jpg';

    const categoryStyle = {
        textAlign: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
        margin: '10px',
        boxShadow: 'inset 100px 100px 150px 100px rgba(0, 0, 0, 0.7)',
        height: '40rem',
        borderRadius: '4px',
        width: '40rem',

        Animation: 'zoom-in-zoom-out'

    };

    return (
        <div className='home-container'>

            <Navbar />
            <div className='menu-bg'>
                <h1 style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '5rem' }}>Menu</h1>

            </div>
            <div className='cards' >
                
                <div style={{ ...categoryStyle, backgroundImage: `url(${teaBackgroundUrl})` }} data-aos='fade-down'>

                    <h2>Tea</h2>
                    {menu['tea'].map((teaItem, index) => (
                        <Card key={`tea-${index}`} itemDetails={teaItem} />
                    ))}
                </div>


                <div style={{ ...categoryStyle, backgroundImage: `url(${coffeeBackgroundUrl})` }} data-aos='fade-down'>
                    <h2>Coffee</h2>
                    {menu['coffee'].map((coffeeItem, index) => (
                        <Card key={`coffee-${index}`} itemDetails={coffeeItem} />
                    ))}
                </div>
                <div style={{ ...categoryStyle, backgroundImage: `url(${cadbBackgroundUrl})` }} data-aos='fade-down'>
                    <h2>Cadb</h2>
                    {menu['cadb'].map((cadbItem, index) => (
                        <Card key={`cadb-${index}`} itemDetails={cadbItem} />
                    ))}
                </div>

                <div style={{ ...categoryStyle, backgroundImage: `url(${mojitoBackgroundUrl})` }} data-aos='fade-down'>
                    <h2>Mojito</h2>
                    {menu['mojito'].map((mojitoItem, index) => (
                        <Card key={`mojito-${index}`} itemDetails={mojitoItem} />
                    ))}
                </div>

                <div style={{ ...categoryStyle, backgroundImage: `url(${shakeBackgroundUrl})` }} data-aos='fade-down'>
                    <h2>Shake</h2>
                    {menu['shake'].map((shakeItem, index) => (
                        <Card key={`shake-${index}`} itemDetails={shakeItem} />
                    ))}
                </div>


                <div style={{ ...categoryStyle, backgroundImage: `url(${burgerBackgroundUrl})` }} data-aos='fade-down'>
                    <h2>Burger</h2>
                    {menu['burger'].map((burgerItem, index) => (
                        <Card key={`burger-${index}`} itemDetails={burgerItem} />
                    ))}
                </div>


                <div style={{ ...categoryStyle, backgroundImage: `url(${sandwichBackgroundUrl})` }} data-aos='fade-down'>
                    <h2>Sandwich</h2>
                    {menu['sandwich'].map((sandwichItem, index) => (
                        <Card key={`sandwich-${index}`} itemDetails={sandwichItem} />
                    ))}
                </div>

                <div style={{ ...categoryStyle, backgroundImage: `url(${maggiBackgroundUrl})` }} data-aos='fade-down'>
                    <h2>Maggi</h2>
                    {menu['maggi'].map((maggiItem, index) => (
                        <Card key={`maggi-${index}`} itemDetails={maggiItem} />
                    ))}
                </div>

                <div style={{ ...categoryStyle, backgroundImage: `url(${pastaBackgroundUrl})` }} data-aos='fade-down'>
                    <h2>Pasta</h2>
                    {menu['pasta'].map((pastaItem, index) => (
                        <Card key={`pasta-${index}`} itemDetails={pastaItem} />
                    ))}
                </div>


                <div style={{ ...categoryStyle, backgroundImage: `url(${pizzaBackgroundUrl})` }} data-aos='fade-down'>
                    <h2>Pizza</h2>
                    {menu['pizza'].map((pizzaItem, index) => (
                        <Card key={`pizza-${index}`} itemDetails={pizzaItem} />
                    ))}
                </div>


                <div style={{ ...categoryStyle, backgroundImage: `url(${friesBackgroundUrl})` }} data-aos='fade-down'>
                    <h2>Special Fries</h2>
                    {menu['fries'].map((friesItem, index) => (
                        <Card key={`fries-${index}`} itemDetails={friesItem} />
                    ))}
                </div>


                <div style={{ ...categoryStyle, backgroundImage: `url(${quickbitesBackgroundUrl})` }} data-aos='fade-down'>
                    <h2>Quick Bites</h2>
                    {menu['bites'].map((bitesItem, index) => (
                        <Card key={`bites-${index}`} itemDetails={bitesItem} />
                    ))}
                </div>


                <div style={{ ...categoryStyle, backgroundImage: `url(${chocolateBackgroundUrl})` }} data-aos='fade-down'>
                    <h2>Chocolate Special</h2>
                    {menu['chocolate'].map((chocolateItem, index) => (
                        <Card key={`chocolate-${index}`} itemDetails={chocolateItem} />
                    ))}
                </div>


                <div style={{ ...categoryStyle, backgroundImage: `url(${starterBackgroundUrl})` }} data-aos='fade-down'>
                    <h2>Starter</h2>
                    {menu['starter'].map((starterItem, index) => (
                        <Card key={`starter-${index}`} itemDetails={starterItem} />
                    ))}
                </div>


                <div style={{ ...categoryStyle, backgroundImage: `url(${nachosBackgroundUrl})` }} data-aos='fade-down'>
                    <h2>Nachose</h2>
                    {menu['nachose'].map((nachoseItem, index) => (
                        <Card key={`nachose-${index}`} itemDetails={nachoseItem} />
                    ))}
                </div>


                <div style={{ ...categoryStyle, backgroundImage: `url(${rollsBackgroundUrl})` }} data-aos='fade-down'>
                    <h2>Rolls</h2>
                    {menu['rolls'].map((rollsItem, index) => (
                        <Card key={`rolls-${index}`} itemDetails={rollsItem} />
                    ))}
                </div>


                <div style={{ ...categoryStyle, backgroundImage: `url(${dessertBackgroundUrl})` }} data-aos='fade-down'>
                    <h2>Desserts</h2>
                    {menu['desserts'].map((dessertsItem, index) => (
                        <Card key={`desserts-${index}`} itemDetails={dessertsItem} />
                    ))}
                </div>


                <div style={{ ...categoryStyle, backgroundImage: `url(${comboBackgroundUrl})` }} data-aos='fade-down'>
                    <h2>Combo</h2>
                    {menu['combo'].map((comboItem, index) => (
                        <Card key={`rolls-${index}`} itemDetails={comboItem} />
                    ))}
                </div>
            </div>
        </div>
    );
}
