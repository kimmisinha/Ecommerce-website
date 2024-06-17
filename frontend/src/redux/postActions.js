import ProductImage_1 from "../../src/assets/blog-section/post-1.jpg";
import ProductImage_2 from "../../src/assets/blog-section/post-2.jpg";
import ProductImage_3 from "../../src/assets/blog-section/post-3.jpg";
export const FETCH_POSTS = "FETCH_POSTS";

export const fetchPosts = () => {
  return {
    type: FETCH_POSTS,
    payload: [
      {
        imgSrc:ProductImage_1,
        title: "First Time Home Owner Ideas",
        author: "Kristin Watson",
        date: "Dec 19, 2021",
      },
      {
        imgSrc:ProductImage_2,
        title: "How To Keep Your Furniture Clean",
        author: "Robert Fox",
        date: "Dec 15, 2021",
      },
      {
        imgSrc:ProductImage_3,
        title: "Small Space Furniture Apartment Ideas",
        author: "Kristin Watson",
        date: "Dec 12, 2021",
      },
    ],
  };
};
