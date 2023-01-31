import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsTypeH1 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import BestSeller from "./BestSeller";
import { chickenItem } from "./Navbar/Categories/dataCom";
import { getCart, getChickenData } from "./Redux/action";
import { SingleCard } from "./SingleCard";
import styles from "./SingleCard.module.css";
import SkeletonCard from "./Skelton";
const ChickenPage = () => {
  const dispatch = useDispatch();
  const { isLoading, ChickenData } = useSelector((store) => store.reducer);
  const search = useLocation().search;
  console.log(isLoading);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = new URLSearchParams(search).get("category");

  const storedReoladParam = searchParams.getAll("sub_category");
  //console.log(storeReoladParam);
  const storedReloadPage = searchParams.getAll("_page");
  //console.log(storedReloadPage);
  const [page, setPage] = useState(1);
  const [categ, setCateg] = useState(storedReoladParam || []);
  const [sort, setSort] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [prevQuery, setPrevQuery] = useState(query);
  const arr = new Array(12).fill(0);
  const handleFilterCheckbox = (e) => {
    // console.log(e.target.value);
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
    params._limit = 12;
    page && (params._page = page);

    setSearchParams(params);
  }, [categ, setSearchParams, page]);

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
    const filterParams = {
      params: {
        sub_category: searchParams.getAll("sub_category"),
        _page: searchParams.getAll("_page"),
        _limit: searchParams.getAll("_limit"),
      },
    };

    // console.log("inside useeffect", filterParams);
    //Sub_category: query, page: page,
    dispatch(getChickenData(filterParams, { sort, orderBy }));
    // dispatch(getCart());
    setPrevQuery(query);
  }, [dispatch, sort, orderBy]);
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
          {isLoading
            ? arr.map(() => (
                <ChakraProvider>
                  <SkeletonCard />
                </ChakraProvider>
              ))
            : ChickenData.map((el) => (
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
      {!isLoading && ChickenData.length === 0 && (
        <div>
          <ChakraProvider>
            <Box mb="100px">
              <Heading size="lg" fontSize="50px">
                Product Limit reached go back to previous page
              </Heading>
            </Box>
          </ChakraProvider>
        </div>
      )}
      <div>
        <ChakraProvider>
          <Flex justifyContent="center" gap="30px" marginTop="30px">
            <Button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              bg="#e53e3e"
              color="white"
            >
              Prev
            </Button>
            <Button color="white" bg="#e53e3e">
              {page}
            </Button>
            <Button
              bg="#e53e3e"
              color="white"
              disabled={ChickenData.length === 0}
              onClick={() => setPage(page + 1)}
            >
              Next
            </Button>
          </Flex>
        </ChakraProvider>
      </div>
    </div>
  );
};
export { ChickenPage };
