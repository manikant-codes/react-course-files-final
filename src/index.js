import ReactDOM from "react-dom/client";
import PriceCard from "./PriceCard";

function title(title) {
  return <h1>{title}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <PriceCard
      title="Apple"
      price={5}
      image="https://5.imimg.com/data5/AK/RA/MY-68428614/apple-500x500.jpg"
    />
    <PriceCard
      title="Banana"
      price={2}
      image="https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bunch-of-bananas-67e91d5.jpg"
    />
    <PriceCard
      title="Cherry"
      price={10}
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Cherry_season_%2848216568227%29.jpg/640px-Cherry_season_%2848216568227%29.jpg"
    />
  </>
);
