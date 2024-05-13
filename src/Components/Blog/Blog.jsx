import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog,handleAddToBookmark, handleReadTime}) => {
    const {title, cover, author_img, author,posted_date,reading_time, hashtags} = blog;
    return (
        <div>
            <img className='w-full my-8 rounded' src={cover} alt="" />
            <div className='flex justify-between mb-6'>
                <div className='flex items-center'>
                    <div>
                        <img className='w-14' src={author_img} alt="" />
                    </div>
                    <div className='ml-4'>
                        <h2 className='font-extrabold'>{author}</h2>
                        <span className='text-slate-500'>{posted_date}</span>
                    </div>
                </div>
                <div className='flex items-center'>
                    <p className='text-slate-500'>{reading_time} min read</p>
                <button onClick={()=>handleAddToBookmark(blog)}
                className='text-2xl text-red-600'><CiBookmark /></button>
                </div>
            </div>
            <h1 className='font-bold text-3xl mb-5'>{title}</h1>
            <p>
                {
                    hashtags.map((hash, idx)=> <span className='text-slate-500' key={idx}> <a href=""># {hash} </a> </span>)
                }
            </p>
            <button onClick={()=>handleReadTime(reading_time)} className='text-purple-700 underline mt-3'>Mark as Read</button>
            
        </div>
    );
};

Blog.propType = {
    blog: PropTypes.object.isRequired
}

export default Blog;