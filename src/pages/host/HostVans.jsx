export default function HostVans() {
  return (
    <div className='pl-14 pt-6 bg-orange-100 h-full'>
      <h1 className='text-3xl font-bold'>Your Listed Vans</h1>

      <div className='pt-6 pl-4 w-1/2 pb-20'>
        <div className='bg-white rounded-lg flex flex-row p-6 mb-12'>
          <img
            src='https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png'
            alt='modest explorer'
            width={110}
            className='rounded-lg'
          />
          <div className='pl-4 flex justify-center flex-col'>
            <h2 className='text-xl font-bold mb-1'>Modest Explorer</h2>
            <p>$60/day</p>
          </div>
        </div>

        <div className='bg-white rounded-lg flex flex-row p-6 mb-12'>
          <img
            src='https://assets.scrimba.com/advanced-react/react-router/beach-bum.png'
            alt='modest explorer'
            width={110}
            className='rounded-lg'
          />
          <div className='pl-4 flex justify-center flex-col'>
            <h2 className='text-xl font-bold mb-1'>Beach Bum</h2>
            <p>$80/day</p>
          </div>
        </div>

        <div className='bg-white rounded-lg flex flex-row p-6'>
          <img
            src='https://assets.scrimba.com/advanced-react/react-router/green-wonder.png'
            alt='modest explorer'
            width={110}
            className='rounded-lg'
          />
          <div className='pl-4 flex justify-center flex-col'>
            <h2 className='text-xl font-bold mb-1'>Green Wonder</h2>
            <p>$70/day</p>
          </div>
        </div>
      </div>
    </div>
  );
}
