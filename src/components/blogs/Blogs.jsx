import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({ handleBookmark, handleMarkAsRead }) => {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`knowledge.json`)
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])
  return (
    <div id="blogs" className=" md:w-2/3">
      <h2 className="text-3xl ml-10 font-bold my-10">blogs...</h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        {
          blogs.map((blog) => <Blog
            key={blog.id}
            blog={blog}
            handleBookmark={handleBookmark}
            handleMarkAsRead={handleMarkAsRead}
          ></Blog>)
        }
      </div>
    </div>
  );
};

Blogs.propTypes = {
  handleBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func
}

export default Blogs;
