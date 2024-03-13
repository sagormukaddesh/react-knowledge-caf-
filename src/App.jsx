import { useState } from "react";
import "./App.css";
import Blogs from "./components/blogs/Blogs";
import Bookmarks from "./components/bookmarks/Bookmarks";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Banner from "./components/banner/Banner";

function App() {
  const [bookmarks, setBookmark] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmark(newBookmarks);
  }

  const handleMarkAsRead = (time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

  }

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <div className="md:flex container mx-auto">
        <Blogs 
          handleBookmark={handleBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks
          bookmarks={bookmarks}
          readingTime={readingTime}
        ></Bookmarks>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
