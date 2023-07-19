import ProductItem from "./ProductItem"

function MainContainer() {
  const products = [
    {
      id: 1,
      title: 'iPhone 9',
      description: 'An apple mobile which is nothing like apple',
      imageUrl: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
      isSale: true
    },
    {
      id: 2,
      title: 'iPhone X',
      description: 'IM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
      imageUrl: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
      isSale: false
    },
    {
      id: 3,
      title: 'Samsung Universe 9"',
      description: 'Samsung\'s new variant which goes beyond Galaxy to the Universe',
      imageUrl: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
      isSale: true
    },
    {
      id: 4,
      title: 'OPPOF19',
      description: 'OPPO F19 is officially announced on April 2021.',
      imageUrl: 'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
      isSale: true
    },
    {
      id: 5,
      title: 'Huawei P30',
      description: 'Huawei\'s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.',
      imageUrl: 'https://i.dummyjson.com/data/products/5/thumbnail.jpg',
      isSale: false
    },
  ]

  const productItemList = products.map(
    product => <ProductItem key={product.id} title={product.title} description={product.description} imageUrl={product.imageUrl} isSale={product.isSale} />
  )

  return (
    <>
      <div className="d-flex">
        {productItemList}
      </div>
    </>
  )
}

export default MainContainer
