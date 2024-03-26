import React from "react";
import styles from "../../../styles/home/clientsRow.module.css";
import ClientLogo from "./ClientLogo";

function ClientsRow() {
  const logos = [
    {
      src: "/images/company-logos/client-1.png",
      alt: "client-1",
    },
    {
      src: "/images/company-logos/client-2.png",
      alt: "client-2",
    },
    {
      src: "/images/company-logos/client-3.png",
      alt: "client-3",
    },
    {
      src: "/images/company-logos/client-4.png",
      alt: "client-4",
    },
    {
      src: "/images/company-logos/client-5.png",
      alt: "client-5",
    },
    {
      src: "/images/company-logos/client-6.png",
      alt: "client-6",
    },
  ];
  
  //   const arr = [
  //     <ClientLogo src="/images/company-logos/client-1.png" alt="client-1" />,
  //     <ClientLogo src="/images/company-logos/client-2.png" alt="client-2" />,
  //     <ClientLogo src="/images/company-logos/client-3.png" alt="client-3" />,
  //     <ClientLogo src="/images/company-logos/client-4.png" alt="client-4" />,
  //     <ClientLogo src="/images/company-logos/client-5.png" alt="client-5" />,
  //     <ClientLogo src="/images/company-logos/client-6.png" alt="client-6" />,
  //   ];

  const arr = logos.map(function (value, index, array) {
    return <ClientLogo src={value.src} alt={value.alt} />;
  });

  return <div className={styles.clientsRowContainer}>{arr}</div>;
}

export default ClientsRow;
