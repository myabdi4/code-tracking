import "./Blog.css";
import image from "../../../assets/hero_banner.jpg";
import { Link } from "react-router-dom";

const Blog = ({ index, title, description, src, url }) => {
  return (
    <>
      {src && description && (
        <div className="blog">
          <div className="card" style={{ width: "23rem", height: "30rem" }}>
            <img
              src={src ? src : { image }}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{title.slice(0, 70)}</h5>
              <p className="card-text">
                {description ? description.slice(0, 150) : "..."}
              </p>
              <Link to={`/blog/blogcontent/${index}}`} className="btn">
                Read More
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
