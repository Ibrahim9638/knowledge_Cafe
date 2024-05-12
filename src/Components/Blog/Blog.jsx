import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {title, cover, author_img, author,posted_date,reading_time} = blog;
    return (
        <div>
            <img className='w-full my-8' src={cover} alt="" />
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
                <div className='text-slate-500'>{reading_time} min read</div>
            </div>
            <h1 className='font-bold text-4xl'>{title}</h1>
        </div>
    );
};

Blog.propType = {
    blog: PropTypes.object.isRequired
}

export default Blog;