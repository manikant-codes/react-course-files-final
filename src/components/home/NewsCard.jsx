import { Button, Card } from "flowbite-react";
import React from "react";

function NewsCard() {
  return (
    <Card
      className="max-w-sm [&>div:last-child]:justify-start [&>div:last-child]:h-auto overflow-hidden"
      renderImage={() => (
        <div className="h-[300px] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1716534134003-ba47907e119b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Meaningful alt text for an that is not purely decorative"
          />
        </div>
      )}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
      <Button color="failure">Read More</Button>
    </Card>
  );
}

export default NewsCard;
