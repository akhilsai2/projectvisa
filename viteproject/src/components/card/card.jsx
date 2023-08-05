import 'bootstrap/dist/css/bootstrap.css';

const Card=()=>{
    return(
        
           <div class="card-deck row card-container" style={{width:"100%"}}>
            <h2 style={{color:"orange"}}> What We Offer</h2>
            <h3>Traing We Provide</h3>
  <div class="card col-lg-3 col-md-2 m-2">
    <img class="card-img-top " src="https://t3.ftcdn.net/jpg/02/55/22/68/360_F_255226859_Rhqr5hflr2esVXHQE1sS1bWxmZxs0gWI.jpg" style={{height:"90%",width:"100%"}} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      <button className='btn btn-primary'>Read more..</button>
    </div>
  </div>
  <div class="card col-lg-3 col-md-3 m-2">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      <button className='btn btn-primary'>Read more..</button>
    </div>
    <img class=" col-lg-3 " src="https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?cs=srgb&dl=pexels-pixabay-301920.jpg&fm=jpg"  style={{height:"50%",width:"100%"}} alt="Card image cap"/>
  </div>
  <div class="card col-lg-3 col-md-3 m-2">
    <img class="card-img-top" src="https://www.avanse.com/blogs/images/Planning-to-study-abroad.jpg" style={{height:"100%",width:"100%"}} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      <button className='btn btn-primary'>Read more..</button>
    </div>
  </div>
</div>
       
    )
}
export default Card;