import { Box, Button, ChakraProvider, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsTypeH1 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import BestSeller from "./BestSeller";
import { chickenItem } from "./Navbar/Categories/dataCom";
import { getCart, getChickenData } from "./Redux/action";
import { SingleCard } from "./SingleCard";
import styles from "./SingleCard.module.css";

const ChickenPage = () => {
  const dispatch = useDispatch();
  const ChickenData = useSelector((store) => store.reducer.ChickenData);
  const quantity = useSelector((store) => store);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = useLocation().search;
  const query = new URLSearchParams(search).get("category");
  let [page, setPage] = useState(1);

  const storeReoladParam = searchParams.getAll("sub_category");

  const [categ, setCateg] = useState(storeReoladParam || []);
  const [sort, setSort] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [prevQuery, setPrevQuery] = useState(query);

  const handleFilterCheckbox = (e) => {
    console.log(e.target.value);
    const newCategoryList = [...categ];

    if (newCategoryList.includes(e.target.value)) {
      //remove it
      newCategoryList.splice(newCategoryList.indexOf(e.target.value), 1);
    } else {
      newCategoryList.push(e.target.value);
    }
    setCateg(newCategoryList);
  };

  useEffect(() => {
    let params = {};
    params.sub_category = categ;
    console.log(params);
    setSearchParams(params);
  }, [categ, setSearchParams]);

  let length;
  if (query === "") {
    length = 72;
  } else if (query === "Cleaned") {
    length = 2;
  } else if (query === "Boneless") {
    length = 5;
  } else if (query === "Curry Cut") {
    length = 4;
  }
  const hadleSort = (order) => {
    if (order === "Ascending") {
      setOrderBy("asc");
      setSort("Price");
    } else if (order === "Descending") {
      setOrderBy("desc");
      setSort("Price");
    } else if (order === "AtoZ") {
      setOrderBy("asc");
      setSort("Name");
    } else if (order === "ZtoA") {
      setOrderBy("desc");
      setSort("Name");
    } else {
      setSort("");
      setOrderBy("");
    }
  };
  useEffect(() => {
    if (prevQuery !== query) {
      setPage(1);
    }
    const filterParams = {
      params: {
        sub_category: searchParams.getAll("sub_category"),
      },
    };

    // console.log("inside useeffect", filterParams);
    //Sub_category: query, page: page,
    dispatch(getChickenData(filterParams, { sort, orderBy }));
    dispatch(getCart());
    setPrevQuery(query);
  }, [dispatch, sort, orderBy, location.search]);
  //console.log(orderBy);
  return (
    <div style={{ marginTop: "150px" }}>
      <div className={styles.SingleCard_radio_Box}>
        <hr />
        <Box className={styles.SingleCard_radio_Main}>
          <Box className={styles.SingleCard_radio}>
            <input
              type="checkbox"
              value="Boneless"
              checked={categ.includes("Boneless")}
              onChange={handleFilterCheckbox}
            />
            <label> Boneless</label>
          </Box>
          <Box className={styles.SingleCard_radio}>
            <input
              type="checkbox"
              value="Bone-IN"
              checked={categ.includes("Bone-IN")}
              onChange={handleFilterCheckbox}
            />
            <label> Bone-IN</label>
          </Box>
          <Box className={styles.SingleCard_radio}>
            <input
              type="checkbox"
              value="Cleaned"
              checked={categ.includes("Cleaned")}
              onChange={handleFilterCheckbox}
            />
            <label> Cleaned</label>
          </Box>
          <Box className={styles.SingleCard_radio}>
            <input
              type="checkbox"
              value="Curry Cut"
              checked={categ.includes("Curry Cut")}
              onChange={handleFilterCheckbox}
            />
            <label> Curry Cut</label>
          </Box>
          <Box className={styles.SingleCard_radio}>
            <input
              type="checkbox"
              value="Thinly Sliced"
              checked={categ.includes("Thinly Sliced")}
              onChange={handleFilterCheckbox}
            />
            <label> Thinly Sliced</label>
          </Box>
          <Box className={styles.SingleCard_radio}>
            <input
              type="checkbox"
              value="Fillet"
              checked={categ.includes("Fillet")}
              onChange={handleFilterCheckbox}
            />
            <label> Fillet</label>
          </Box>
          <Box className={styles.SingleCard_radio}>
            <input
              type="checkbox"
              value="STRIPS"
              checked={categ.includes("STRIPS")}
              onChange={handleFilterCheckbox}
            />
            <label> STRIPS</label>
          </Box>
        </Box>
        <hr />
        <div className={styles.SingleCard_Select_box}>
          <div className={styles.SingleCard_Select_Main}>
            <select
              onChange={(e) => hadleSort(e.target.value)}
              className={styles.SingleCard_Select}
            >
              <option value="">Price</option>
              <option value="Ascending">Ascending</option>
              <option value="Descending">Descending</option>
            </select>
          </div>
          <div className={styles.SingleCard_Select_Main}>
            <select
              onChange={(e) => hadleSort(e.target.value)}
              className={styles.SingleCard_Select}
            >
              <option value="">Name</option>
              <option value="AtoZ">A to Z</option>
              <option value="ZtoA">Z to A</option>
            </select>
          </div>
        </div>
        <div className={styles.SingleCard_Main}>
          {ChickenData.map((el) => (
            <ChakraProvider key={el.id}>
              <SingleCard
                key={el.id}
                id={el.id}
                Name={el.Name}
                image={el.Image}
                des_1={el.des_1}
                weights={el.Weight}
                Price={el.Price}
                quantity={el.quantity}
              />
            </ChakraProvider>
          ))}
        </div>
      </div>
      <div>
        <Flex justifyContent="center" gap="30px" marginTop="30px">
          <Button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            colorScheme=" rgb(219, 222, 16);"
            color="black"
          >
            Prev
          </Button>
          <Button colorScheme=" rgb(219, 222, 16);">{page}</Button>
          <Button
            colorScheme=" rgb(219, 222, 16);"
            color="black"
            disabled={page === Math.ceil(length / 20)}
            onClick={() => setPage(page + 1)}
          >
            Next
          </Button>
        </Flex>
      </div>
    </div>
  );
};
export { ChickenPage };
