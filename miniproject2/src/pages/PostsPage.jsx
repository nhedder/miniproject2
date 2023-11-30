import {
  Outlet,
  useParams,
  useSearchParams,
  Link,
  useNavigate,
} from "react-router-dom";
import { useData } from "../hooks/useData";
import CustomCard from "../components/CustomCard";
import BasicGrid from "../components/BasicGrid";
import { TextField, Button, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useContext } from "react";
import { SearchContext } from "../context/SearchContext";
// save as pages/PostsPage.jsx
export default function PostsPage() {
  const [textField, setTextField] = useState("");
  const { setQuery } = useContext(SearchContext);
  const setTheQuery = () => {
    setQuery(textField);
    if (textField === "") {
      window.location.reload();
    }
  };
  return (
    <div className="Posts">
      <h1>Cocktails</h1>
      <TextField
        InputLabelProps={{
          style: { color: "#FF10F0", borderColor: "#FF10F0" },
        }}
        label="search"
        variant="filled"
        type="text"
        value={textField}
        onChange={(e) => setTextField(e.target.value)}
      />
      <Button id="searchButton" onClick={() => setTheQuery()}>
        <SearchIcon sx={{ mr: 2, color: "#FF10F0" }} />
      </Button>
      <Outlet />
    </div>
  );
}

export function PostList(props) {
  const [searchParams, setSearchParams] = useSearchParams(); // import this hook
  const { query } = useContext(SearchContext);
  const limit = searchParams.get("limit") ? searchParams.get("limit") : 5;
  const postsData = query===''? useData(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita",
    []
    
  ):
 useData(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${query}`,
    []
    
  );
console.log(query)
  // the ? means only call map if postsData is not null
  const postList = postsData.drinks?.map((post, index) => (
    <Grid item key={index} xs={6} md={4} lg={3}>
      <CustomCard
        title={post.strDrink}
        id={post.idDrink}
        img={post.strDrinkThumb}
        recipe={post.strInstructions}
        ingredients={[
          post.strIngredient1,
          post.strIngredient2,
          post.strIngredient3,
          post.strIngredient4,
          post.strIngredient5,
        ]}
      />
      <Link to={"/cocktails/" + post.idDrink}>
        Post #{post.idDrink}: {post.strDrink}
      </Link>
    </Grid>
  ))
  return (
    <>
      <Grid container spacing={2} my={2}>
        {" "}
        {postList}{" "}
      </Grid>
    </>
  );
}
// add to PostsPage.jsx
export function Post() {
  const navigate = useNavigate();
  const { id } = useParams(); // custom hook to access dynamic params
  const post = useData(
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id,
    []
  );
  const handleNextPost = () => {
    navigate("/posts/" + (parseInt(id) + 1));
  };
  const handlePreviousPost = () => {
    navigate("/posts/" + (parseInt(id) - 1));
  };

  return (
    <div className="Post">
      {parseInt(id) > 1 && (
        <button onClick={handlePreviousPost}>Previous Post</button>
      )}

      <button onClick={handleNextPost}>Next Post</button>

      {post.drinks ? (
        <>
          <h3>
            Post #{post.drinks[0].idDrink}: {post.drinks[0].strDrink}
          </h3>
          <p>{post.body}</p>
        </>
      ) : (
        "Loading ..."
      )}
    </div>
  );
}
// ++ Add a Next Post button to the Post component
