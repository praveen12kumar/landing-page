import React from 'react'

const ShoeCard = ({shoe, bigShoe, setBigShoe, changeBigShoe}) => {

    const handleImageChange = ()=>{
        if(bigShoe !== shoe.bigShoe){
            changeBigShoe(shoe.bigShoe)
        }
    }

  return (
    <div className={`border-2 rounded-xl cursor-pointer m-4 ${bigShoe === shoe.bigShoe ? "border-coral-red" : "border-transparent" }  `}>
        <div className="flex justify-center items-center bg-card bg-current bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-2">
      
      <img src={shoe.thumbnail} alt="" width={127} height={103} className='object-contain' onClick={handleImageChange} />
    
    </div>
    </div>
  )
}

export default ShoeCard
