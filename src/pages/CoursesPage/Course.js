import React from 'react'
// import ml from "./3222625.png";

export default function Course({title,about,icon}) {
  
  return (
    <div>
      <div class="card" style={{ width: '20rem', margin: ' 0px 10px'}}>
  <img class="card-img-top" src={icon} alt="Card image cap" style={{width:'60%' , margin:'5px auto'}}/>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text"> {about}</p>
  </div>
  <div class="card-body">
  <button type="button" class="btn btn-link">Learn More</button>
 
  <hr></hr>
  <button type="button" class="btn btn-success">Buy Now</button>
  </div>
</div>
    </div>
  )
}
