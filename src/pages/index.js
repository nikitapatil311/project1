//import Image from "next/legacy/image";
//import { Inter } from "next/font/google";
//import Add from "../../components/Add";
//import AddButton from "../../components/AddButton";
//import { useSession } from "next-auth/react";
//import Footer from "../../components/Footer";
//const inter = Inter({ subsets: ["latin"] });
import axios from "axios";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Featured from "../../components/Featured";
import GroceryList from "../../components/GroceryList";
import { useState } from "react";
import SearchBar from "../../components/SearchBar";

export default function Home({ groceryList }) {
  const [close, setClose] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const filteredGroceryList = groceryList.filter(
    (grocery) =>
      grocery &&
      grocery.name &&
      grocery.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Grocery Shop</title>
        <meta name="description" content="Best Grocery Shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Featured />
      {/* <AddButton setClose={setClose} /> */}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <GroceryList groceryList={filteredGroceryList} />

      {/* {!close && <Add setClose={setClose} />} */}
    </div>
  );
}

export const getServerSideProps = async () => {
  const baseURL =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
  const res = await axios.get(`${baseURL}/api/products`);
  console.log("Response Data:", res.data);
  return {
    props: {
      groceryList: res.data,
    },
  };
};
