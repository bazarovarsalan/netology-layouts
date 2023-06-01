import ShopCard from "./ShopCard";

function CardsView({products}) {
  return (
    <section className="CardsView">
      {
        Array.from(products).map((product, productIndex) => {
          return (
            <ShopCard
              key={productIndex}
              name={product.name.toUpperCase()}
              price={product.price}
              color={product.color}
              img={product.img}
            />
          )
        })
      }
    </section>
  );
}

export default CardsView;