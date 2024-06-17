import { call, put, takeEvery } from 'redux-saga/effects';
import {
  FETCH_PRODUCTS_REQUEST,
  fetchProductsSuccess,
  fetchProductsFailure,
} from "../redux/productActions"
import ProductImage_1 from "../../src/assets/excellent material/product-1.png";
import ProductImage_2 from "../../src/assets/excellent material/product-2.png";
 import ProductImage_3 from "../../src/assets/excellent material/product-3.png";

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

function* fetchProducts() {
  try {
    yield call(() => new Promise((resolve) => setTimeout(resolve, 1000)));

    yield put(fetchProductsSuccess(mockProducts));
  } catch (error) {
    yield put(fetchProductsFailure(error.message));
  }
}

function* productSaga() {
  yield takeEvery(FETCH_PRODUCTS_REQUEST, fetchProducts);
}

export default productSaga;
