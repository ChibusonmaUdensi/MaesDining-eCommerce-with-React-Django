import React from 'react'
import PlaceHolder from './PlaceHolder'

const PlaceHolderContainer = () => {
    const placeNumbers = [...Array(12).keys()].slice(0);

  return (
    <section className='py-5' id='shop'>
        <h4 style={{textAlign: 'center'}}>Our Meals</h4>
        <div className='container px-4 px-lg-5 mt-5'>
            <div className='row justify-content-center'>
                {placeNumbers.map(num => <PlaceHolder key={num} />)}
            <PlaceHolder />
            </div>
            </div>

    </section>
  )
}

export default PlaceHolderContainer