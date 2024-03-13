
import ProTypes from 'prop-types';
import Bookmark from '../bookmark/Bookmark';
const Bookmarks = ({ bookmarks, readingTime }) => {

    return (
        <div className=" md:w-1/3 mt-12">
            <h2 className="text-3xl font-bold ml-10 mb-8">Your Bookmarks... </h2>
            <div>
                <div>
                    <h3 className='text-xl text-end'> Reading Time: {readingTime} min Total </h3>
                </div>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark
                        key={idx}
                        bookmark={bookmark}
                    ></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: ProTypes.array.isRequired,
    readingTime: ProTypes.number

}
export default Bookmarks;