import logo from './logo.svg';
import './App.css';
import ImageContainer from './components/ImageContainer';
import axios from 'axios';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from "react-redux";
import { getImages,fetchImages } from "../src/redux/actions/images";
import { message, notification, Spin } from 'antd';

function App() {
  const dispatch = useDispatch();
  // const [images, setImages] = useState([])
  const images_redux = useSelector(state => state.images);  // movies from redux stae
  const numpage = useSelector(state => state.numpage);  // movies from redux stae
  // const images_thunk = useSelector((state)=>state)
  // const [numpage, setnumpage] = useState(1)
  async function getimagesAPI() {
    try {

      const res = await axios.get(`https://picsum.photos/v2/list?page=${numpage}&limit=15`)
      const { data } = res;
      // setImages(images.concat(data))
      // dispatch(getImages(images_redux.concat(data)));

      const success = () => {
        message.success(`data page ${numpage} loaded successfully`);
      };

      success()

    } catch (error) {

      console.log('nothing');

      const openNotificationWithIcon = () => {
        notification['error']({
          message: 'Error',
          description:
            error.message
        });
      };

      openNotificationWithIcon()

    }

  }
  
  useEffect(() => {
    // getimagesAPI()
    dispatch(fetchImages())
  }, [numpage])

  return (
    <div className='app' >
      
      {images_redux.items.length != 0
        ? <InfiniteScroll dataLength={images_redux.items.length} next={() => dispatch({type:'INCREMENT_NUMPAGE',payload:numpage}) } hasMore={true} >
          <div className='app__images' >
            {images_redux.items.map((image, index) => (
              <ImageContainer data-testid="imagetest" key={index} image={image} />
            ))}
          </div>
        </InfiniteScroll>
        :
        <Spin size="large" />}
    </div>
  );
}

export default App;
