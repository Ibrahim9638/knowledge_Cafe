import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks, readingTime}) => {
    
    return (
        <div className="md:w-1/3 ml-8 bg-slate-300">
            <h2>Reading Time as : {readingTime}</h2>
            <h2 className="text-3xl p-4 text-center font-semibold">Bookmarked Blog: {bookmarks.length}</h2>
        <div>
            {
                bookmarks.map(bookmark=> <Bookmark 
                    bookmark={bookmark}
                    key={bookmark.id}
                    ></Bookmark>)
            }
        </div>
            
        </div>
    );
};

export default Bookmarks;