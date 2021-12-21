import "./App.css";
import ImageContainer from "./components/ImageContainer";
import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { fetchImagesThunk } from "../src/redux/actions/images";
import { Input, Spin } from "antd";
import Notification from "./components/Notification";
import InputSearch from "./components/InputSearch";

function App() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImagesThunk());
  }, [dispatch, store.numPage]);

  const onSubmitSearch = (e, search) => {
    e.preventDefault()
    if (search!='') {
      dispatch({type:'SEARCH',payload:search})
    } else {
      dispatch(fetchImagesThunk());
    }
  }

  return (
    <div className="app">
      <h3>Welcome to Image API</h3>

      <InputSearch onSubmitSearch={onSubmitSearch} />

      {store.images.loading && <Spin size="large" />}
      {store.images.error && <Notification />}

      <InfiniteScroll
        dataLength={store.images.items.length}
        next={() =>
          dispatch({ type: "INCREMENT_NUMPAGE", payload: store.numPage })
        }
        hasMore={true}
      >
        <div className="app__images">
          {store.images.items.map((image, index) => (
            <ImageContainer key={index} image={image} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default App;
