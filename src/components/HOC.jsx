import React from "react";

function HOC(props) {
  const { list, listItem: ListItem } = props;
  return (
    <>
      {list.map((listItem) => {
        return <li>{<ListItem listItem={listItem} />}</li>;
      })}
    </>
  );
}

export default HOC;
