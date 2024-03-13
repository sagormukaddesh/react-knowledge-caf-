import PropTypes from 'prop-types'
const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-green-400 p-4 m-4 rounded-xl'>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.array.isRequired
}
export default Bookmark;