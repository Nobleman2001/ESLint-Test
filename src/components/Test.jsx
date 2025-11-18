import testImage from '../assets/test/test_image.avif';
const data = [
  {
    name: 'Nobleman',
    age: 25,
    designation: 'Developer',
  },
];
const Test = () => {
  return (
    <div>
      <img src={testImage} alt="" className="w-full " />

      {/* sIMPLE DATA */}
      <div className='p-20'> 
        {data.map((d, index) => (
          <div key={index} className='border p-10 space-y-2 '>
            <h2 className='text-2xl'>Name: {d.name}</h2>
            <h2 className='text-lg'>Age: {d.age}</h2>
            <h2 className='text-md'>Designation: {d.designation}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;
