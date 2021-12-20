import "./App.css";
import ImageContainer from "./components/ImageContainer";
import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { fetchImagesThunk } from "../src/redux/actions/images";
import { message, notification, Spin } from "antd";

function App() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImagesThunk());
  }, [dispatch, store.numPage]);

  return (
    <div className="app">
      {store.images.loading && <Spin size="large" />}
      {store.images.error && <Spin size="large" />}

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
