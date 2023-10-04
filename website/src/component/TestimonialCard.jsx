import React from 'react'

const TestimonialCard = (props) => {
  return (
    <div className="testimonial-item rounded p-4 p-lg-5 mb-5">
        <img className="mb-4" src={props.img} alt=""/>
            <p className="mb-4">{props.comment}</p>
            <h5>{props.name}</h5>
            <span className="text-primary">{props.profession}</span>
    </div>
  )
}
export default TestimonialCard
