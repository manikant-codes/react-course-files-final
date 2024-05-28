import { Button, Card } from "flowbite-react";
import React from "react";

function NewsCard({ article }) {
  console.log(article);
  return (
    <Card
      className="max-w-sm [&>div:last-child]:justify-start [&>div:last-child]:h-auto overflow-hidden"
      renderImage={() => (
        <div className="h-[300px] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={article.urlToImage}
            alt="Meaningful alt text for an that is not purely decorative"
          />
        </div>
      )}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {article.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {article.description}
      </p>
      <Button color="failure">Read More</Button>
    </Card>
  );
}

export default NewsCard;
