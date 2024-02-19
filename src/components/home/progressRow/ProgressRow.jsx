import React from "react";
import Title from "../../common/Title";
import styles from "../../../styles/home/progressRow.module.css";
import InfoRow from "../InfoRow";
import ProgressBar from "./ProgressBar";

function ProgressRow() {
  return (
    <InfoRow
      src="/images/02.jpg"
      customContent={
        <>
          <Title
            title="Our Stats"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quos."
          />
          <div className={styles.infoRowProgressBarContainer}>
            <ProgressBar title="Adventure" value={75} />
            <ProgressBar title="Trips" value={50} />
            <ProgressBar title="Success" value={60} />
            <ProgressBar title="Satisfaction" value={90} />
          </div>
        </>
      }
    />
  );
}

export default ProgressRow;
