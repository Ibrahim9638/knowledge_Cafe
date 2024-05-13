import profile from '../../assets/images/profile.png';


const Header = () => {
    return (
        <div className='md:flex justify-between p-3 border-b-2 items-center max-w-7xl mx-auto'>
            <div>
                <h2 className="text-4xl">Knowledge Cafe</h2>
            </div>
            <div>
                <img src={profile} alt="" />
            </div>
            
        </div>
    );
};

export default Header;