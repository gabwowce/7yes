import React, { useState } from 'react';
import ItemTemplate from "./ItemTemplate";
import VirtualRecept from './VirtualRecept';

const OrderSummary = ({ initialItems  }) => {

    const [items, setItems] = useState(initialItems);

    const updateItemCount = (id, change) => {
        setItems(prevItems => 
          prevItems.map(item => 
            item.id === id 
              ? { ...item, itemCount: Math.max(item.itemCount + change, 1) } // Užtikriname, kad kiekis nebūtų mažesnis už 1
              : item
          )
        );
      };
      
      const removeItem = (id) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
      };

      return (
        <section aria-labelledby="order-summary" className='order-summary'>
          <h2 id="order-summary">
            Order Summary <span>({items.length} items)</span>
          </h2>
          <div className='items'>
          {items.map(item => (
            <ItemTemplate
              key={item.id}
              item={item}
              onUpdateCount={updateItemCount}
              onRemoveItem={removeItem}
            />
          ))}
          </div>
          
          <VirtualRecept subtotal={92.00} taxes={8.00} shippingCost={15.00} />

        </section>
      );
    };

export default OrderSummary;
