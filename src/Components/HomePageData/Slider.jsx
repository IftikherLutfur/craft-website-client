
const Slider = () => {
    return (
        <div>
<div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://images.fineartamerica.com/images-medium-large/handcraft-okan-yilmaz.jpg" className="w-full h-[450px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://www.singulart.com/blog/wp-content/uploads/2019/10/large.jpg" className="w-full h-[450px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://www.ubuy.com.bd/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzF0QlNzWmd3MUwuX0FDX1NMMTUwMF8uanBn.jpg" className="w-full h-[450px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://cdn.britannica.com/32/3732-050-1AFCB2CB/Portrait-Couple-oil-canvas-Isaac-Rebecca-Rembrandt.jpg" className="w-full h-[450px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>            
        </div>
    );
};

export default Slider;