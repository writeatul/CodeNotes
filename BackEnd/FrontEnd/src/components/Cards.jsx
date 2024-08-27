import React from 'react'

function Cards({item}) 
{
    console.log(item)
  return (
    <>      
    <div className= "mt-4 my-3 p-3">
    <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200 dark:border dark:bg-slate-900 dark:text-white">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{item.name}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline hover:text-pink-500">{item.category}</div>
      <div className="px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white cursor-pointer">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards
