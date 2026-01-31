import React from "react";
import Wrapper from "./Wrapper";
import {useNewsContext} from '../context/NewsContext'
const Category = () => {
  const {setNews, fetchData} = useNewsContext()
  const categories = [
    "General",
    "Business",
    "Entertainment",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];
  const handleClick = async (event) => {
    const cat = event.target.value;
    const data = await fetchData(`/everything?q=${cat}`);
    if (data && data.articles) {
      setNews(data.articles);
    }
  }
  return (
    <Wrapper>
      <div className="w-fit max-w-full gap-2 m-auto flex overflow-x-auto scrollbar-none px-5 py-7">

      {categories.map((category, idx) => {
        return (
          <button
            type="button"
            onClick={handleClick}
            value={category}
            className="btn btn-active btn-primary"
            key={category}
          >
            {category}
          </button>
        );
      })}
      </div>
    </Wrapper>
  );
};

export default Category;
