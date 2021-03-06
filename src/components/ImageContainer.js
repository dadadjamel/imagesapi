import "./imagecontainer.css";

const ImageContainer = ({ image }) => {
  return (
    <div className="imagecontainer">
      <h3>{image.author}</h3>
      <img
        className="imagecontainer__image"
        src={image.download_url}
        alt={image.author}
      />
    </div>
  );
};

export default ImageContainer;
