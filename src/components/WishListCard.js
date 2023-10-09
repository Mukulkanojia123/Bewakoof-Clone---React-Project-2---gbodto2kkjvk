import React from 'react';

const WishListCard = ({ data }) => {
  let displayImage, name, price;

  if (data.products) {
    // this is for data come from wishList component
    const { products, _id } = data;
    displayImage = products.displayImage;
    name = products.name;
    price = products.price;
  } else {
    // this is for data come from cart component
    const { product, _id } = data;
    displayImage = product.displayImage;
    name = product.name;
    price = product.price;
  }

  return (
    
      <div className='w-[350px] shadow-lg m-5'>
        <img src={displayImage} alt={name} />
        <div className='text-bold p-2'>{name}</div>
        <div className='text-bold font-bold p-2'>{price}</div>
        <div>
          <button className='bg-green-400 text-white p-2 rounded-lg m-3'>Add to order</button>
        </div>
      </div>
    
  );
}

export default WishListCard;
