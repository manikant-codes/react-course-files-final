import React from "react";
import styles from "./userData.module.css";

const UserData = ({ user }) => {
  const randomBgColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    <div
      className={styles.userContainer}
      style={{ backgroundColor: randomBgColor() }}
    >
      <div className={styles.userInfo}>
        <h2 className={styles.userName}>{user.name}</h2>
        <p className={styles.userEmail}>{user.email}</p>
      </div>
      <div className={styles.userAddress}>
        <p className={styles.addressStreet}>{user.address.street}</p>
        <p className={styles.addressCity}>{user.address.city}</p>
        <p className={styles.addressZipcode}>{user.address.zipcode}</p>
      </div>
    </div>
  );
};

export default UserData;
