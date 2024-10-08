import moment from 'moment';

const Header = () => {
  
    const currentDate = moment().format("dddd, MMMM D, YYYY")

    return (
      <div className='text-center mt-14'>
        <h1 className="font-cloister font-normal text-6xl">The Dragon News</h1>
        <p className="text-lg text-gray-400 mt-5 mb-[10px]">Journalism Without Fear or Favour</p>
        <p className="text-xl">
          <span className="text-black">{currentDate.split(',')[0]}</span>, <span className="text-gray-500">{currentDate.substring(currentDate.indexOf(',') + 1)}</span> 
        </p>
      </div>
    );
};

export default Header;

//  The substring() method in JavaScript extracts a portion of a string, starting from a specified position.