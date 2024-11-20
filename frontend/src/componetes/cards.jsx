import React from "react";

function Cards({ items }) {
    // if (!items) {
    //     return <div>Loading...</div>; // Or handle the missing `items` case appropriately
    //   }
  return (
    <div className="mt-6 my-3 px-3">
      <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:border dark:text-white ">
        <figure>
          <img
            src={items.image} alt={items.title}/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {items.name}
            <div className="badge badge-secondary">{items.category}</div>
          </h2>
          <p>{items.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline py-3">{items.price} ₹</div>
            <div className="badge badge-outline cursor-pointer hover:bg-pink-500 transition-all hover:text-white duration-300 py-3">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
