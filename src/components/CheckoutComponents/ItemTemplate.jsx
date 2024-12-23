import React from 'react';
import { PlusIcon, MinusIcon, TrashIcon } from '@heroicons/react/24/outline'; // Importuoti ikonėles
import IconButton from '../UI/IconButton';

const ItemTemplate = ({ item, onUpdateCount, onRemoveItem }) => {

  const calculatePrice = (price) => {
    const priceValue = parseFloat(price.replace('$', ''));
    return `$${(priceValue * item.itemCount).toFixed(2)}`;
  };

  return (
    <div className="item-template">
      <div className="item-img">
        <img src={item.imageUrl} alt="Item picture"/>
      </div>

      <div className="first-col">
        <h3 className='title'>{item.title}</h3>
        {item.specifications && Object.keys(item.specifications).length > 0 && (
          <div className="specifications">
            <ul>
              {Object.entries(item.specifications).map(([key, value], index) => (
                <li key={index}>
                  <span className='key'>{key}: </span>
                  <span className="highlighted">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        )}


        <div className="add-remove">
          <IconButton
            icon={<MinusIcon className="small-icon" />} 
            onClick={() => onUpdateCount(item.id, -1)}
            disabled={item.itemCount <= 1}
          />
          <span className="count">{item.itemCount}</span>
          <IconButton
            icon={<PlusIcon className="small-icon" />} 
            onClick={() => onUpdateCount(item.id, 1)}
          />
        </div>
      </div>

      <div className="second-col">
          {item.priceAfterDiscount ? (
            <>
              <h3 className="price">{calculatePrice(item.priceAfterDiscount)}</h3>
              <h3 className="old-price">{calculatePrice(item.price)}</h3>
            </>
          ) : (
            <h3 className="price">{calculatePrice(item.price)}</h3>
          )}
      </div>

      <IconButton icon={<TrashIcon className="delete-btn" />} onClick={() => onRemoveItem(item.id)} />
      
    </div>
  );
};

export default ItemTemplate;
