import ShopItem from "./ShopItem";

function ListView({products}) {
  return (
    <section className="ListView">
      {
        Array.from(products).map((product, productIndex) => {
          return (
            <ShopItem
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

export default ListView;