import React from "react";
import ProgressBar from "./ProgressBar";
import styles from "../../../styles/home/progressRow.module.css";
import Title from "../../common/Title";
import InfoRow from "../infoRow/InfoRow";

function ProgressRow() {
  const data = [
    { title: "Title 1", width: 40 },
    { title: "Title 2", width: 50 },
    { title: "Title 3", width: 60 },
    { title: "Title 4", width: 90 },
  ];

  //   const components = [
  //     <ProgressBar key={0} title="Title 1" value={50} />,
  //     <ProgressBar key={0} title="Title 2" value={60} />,
  //     <ProgressBar key={0} title="Title 3" value={70} />,
  //     <ProgressBar key={0} title="Title 4" value={90} />,
  //   ];

  //   const components = data.map((value, index, array) => {
  //     return <ProgressBar key={index} title={value.title} value={value.value} />;
  //   });

  return (
    <InfoRow
      src="/images/07.jpg"
      customComponent={
        <div>
          <Title
            title="Our Key Metrics"
            desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, ea?"
          />
          <div className={styles.progressRowInnerContainer}>
            {data.map((value, index, array) => {
              return (
                <ProgressBar
                  key={index}
                  title={value.title}
                  width={value.width}
                />
              );
            })}
          </div>
        </div>
      }
    />
  );
}

export default ProgressRow;
