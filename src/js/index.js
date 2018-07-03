import axios from "axios";

async function getResults(query) {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const key = "8cdf1793f844fc29f814093719d93807";
  try {
    const res = await axios(
      `${proxy}http://food2fork.com/api/search?key=${key}&q=${query}`
    );
    const recipes = res.data.recipes;
    console.log(recipes);
  } catch (error) {
    alert(error);
  }
}
getResults("oyster");

// 8cdf1793f844fc29f814093719d93807

// http://food2fork.com/api/search
