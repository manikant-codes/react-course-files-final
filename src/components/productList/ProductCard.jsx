import { Button, Card } from "flowbite-react";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import Rating from "./Rating";

function ProductCard({ product }) {
  const { title, img, rating, price } = product;
  const dispatch = useDispatch();

  function handleAddToCart() {
    console.log(addToCart());
    dispatch(addToCart(product));
  }

  return (
    <Card
      className="max-w-sm"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc={img}
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
      <Rating rating={rating} />
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          ${price}
        </span>
        <Button pill gradientDuoTone="pinkToOrange" onClick={handleAddToCart}>
          Add to cart
        </Button>
      </div>
    </Card>
  );
}

export default ProductCard;
