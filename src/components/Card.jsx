import React from 'react'

const Card = ({img, fName, lName, handle, rating, maxRating, rank, maxRank}) => {
  return (
    <div className='details-card'>
        <img src={img} alt="user-img" />
        <h2>{fName + ' ' + lName}</h2>
        <h3>{handle}</h3>
        <h3>{rating+`(max-${maxRating})`}</h3>
        <h3>{rank+`(max-${maxRank})`}</h3>
    </div>
  )
}

export default Card