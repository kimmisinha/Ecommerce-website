import { call, put, takeEvery } from 'redux-saga/effects';
import {
  FETCH_PRODUCTS_REQUEST,
  fetchProductsSuccess,
  fetchProductsFailure,
} from "../redux/productActions";
import {
  FETCH_POST_REQUEST,
  fetchPostsSuccess,
  fetchPostFailure,
} from "../redux/postActions";
import ProductImage_1 from "../../src/assets/excellent material/product-1.png";
import ProductImage_2 from "../../src/assets/excellent material/product-2.png";
import ProductImage_3 from "../../src/assets/excellent material/product-3.png";

import PostImage_1 from "../../src/assets/blog-section/post-1.jpg";
import PostImage_2 from "../../src/assets/blog-section/post-2.jpg";
import PostImage_3 from "../../src/assets/blog-section/post-3.jpg";

// Mock data
const mockProducts = [
  {
    id: 1,
    image: ProductImage_1,
    name: 'Club Chair',
    price: '$50',
  },
  {
    id: 2,
    image: ProductImage_2,
    name: 'Club Chair',
    price: '$80',
  },
  {
    id: 3,
    image: ProductImage_3,
    name: 'Egg Chair',
    price: '$120',
  },
];

const mockPosts = [
  {
    imgSrc: PostImage_1,
    title: "First Time Home Owner Ideas",
    author: "Kristin Watson",
    date: "Dec 19, 2021",
  },
  {
    imgSrc: PostImage_2,
    title: "How To Keep Your Furniture Clean",
    author: "Robert Fox",
    date: "Dec 15, 2021",
  },
  {
    imgSrc: PostImage_3,
    title: "Small Space Furniture Apartment Ideas",
    author: "Kristin Watson",
    date: "Dec 12, 2021",
  },
];

function* fetchProducts() {
  try {
    const products = yield call(() => new Promise((resolve) => setTimeout(() => resolve(mockProducts), 1000)));
    yield put(fetchProductsSuccess(products));
  } catch (error) {
    yield put(fetchProductsFailure(error.message));
  }
}

function* fetchPost() {
  try {
    const posts = yield call(() => new Promise((resolve) => setTimeout(() => resolve(mockPosts), 2000)));
    yield put(fetchPostsSuccess(posts));
  } catch (error) {
    yield put(fetchPostFailure(error.message));
  }
}

function* productSaga() {
  yield takeEvery(FETCH_PRODUCTS_REQUEST, fetchProducts);
  yield takeEvery(FETCH_POST_REQUEST, fetchPost);
}

export default productSaga;
