import { Button, Card } from "flowbite-react";
import React from "react";
import { HiPlus } from "react-icons/hi";
import Rating from "../common/Rating";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  return (
    <Card
      className="max-w-sm"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc={product?.img}
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {product?.title}
        </h5>
      </a>
      <Rating rating={product?.rating} />
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          ${product?.price}
        </span>
        <Button
          pill
          gradientDuoTone="greenToBlue"
          className="[&>span]:!pl-4"
          size="sm"
          onClick={handleAddToCart}
        >
          <HiPlus className="mr-2 h-5 w-5" />
          Add to cart
        </Button>
      </div>
    </Card>
  );
}

export default ProductCard;
