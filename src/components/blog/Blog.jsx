import PropTypes from 'prop-types';
import { IoBookmarksOutline } from "react-icons/io5";
const Blog = ({ blog, handleBookmark, handleMarkAsRead }) => {
    const { cover, title, author, author_img, reading_time, posted_date, hashtags } = blog;
    return (
        <div className="card mx-6 shadow-xl bg-amber-100">
            <figure><img src={cover} alt="Shoes" /></figure>

            <div className="mx-4 my-6 space-y-3">
                <div className='flex justify-between mb-4 items-center'>
                    <div className='flex items-center gap-2'>
                        <div className="avatar">
                            <div className="w-12 rounded-full">
                                <img src={author_img} />
                            </div>
                        </div>
                        <div>
                            <h3 className='font-bold'>{author} </h3>
                            <p>Fev 14 (<span>4 days ago</span>)</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p><span className='font-bold'> {reading_time} </span>min Read </p>
                        <button onClick={()=> handleBookmark(blog)} className='hover:text-blue-700'><IoBookmarksOutline></IoBookmarksOutline> </button>
                    </div>
                </div>
                <h2 className="card-title">{title}</h2>
                <p><span className='font-bold'>Post Data:</span> {posted_date} </p>
                <p>
                    {
                        hashtags.map((has, idx) => <span key={idx} ><a className='mx-1' href=""> #{has} </a> </span>)
                    }
                </p>
                <div className="card-actions ">
                    <button onClick={()=> handleMarkAsRead(reading_time)}
                    className="btn btn-secondary border-0 btn-sm">Mark Ass Read</button>
                </div>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func,
    handleMarkAsRead:PropTypes.func

}
export default Blog;