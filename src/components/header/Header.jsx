import profile from '../../images/profile.png'
const Header = () => {
  return (
    <div className='flex justify-between container items-center p-4 mx-auto border-amber-500 border-b-2'>
      <h1 className="text-3xl font-bold text-center ">Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;
