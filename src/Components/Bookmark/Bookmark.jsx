

const Bookmark = ({bookmark}) => {
    const {title}= bookmark;
    return (
        <div className="bg-slate-200 p-4 m-4 rounded">
            <h2 className="text-2xl">{title}</h2>
        </div>
    );
};

export default Bookmark;