function ProductItem(props) {
  const { title, description, imageUrl, isSale } = props;
  let saleBanner;
  if (isSale) {
    saleBanner = <span className="text-danger">(SALE!!!)</span>
  }


  return (
    <>
    <div data-aos="flip-left" className="card" style={{ width: '18rem' }}>
      <img src={imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title} {saleBanner}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">Add to Cart</a>
      </div>
    </div>
    </>
  )
}

export default ProductItem
