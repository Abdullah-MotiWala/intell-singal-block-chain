const Tokenomics = () => {
    return ( 
        <div className='mt-10 min-h-screen bg-cover w-full flex justify-center' style={{backgroundImage: "url('/img/b3.jpg')"}}>
        <div className='flex flex-col md:flex-row w-full max-w-6xl md:items-stretch items-center px-4 py-8'>
          <div className='flex md:w-1/2 w-4/5 px-6 flex-col items-center  gap-8'>
            <h2 className='text-3xl lg:text-5xl md:text-5xl sm:text-5xl font-semi-bold text-white'>Tokenomics</h2>
            <div className='flex flex-col items-center '>
              <h3 className='lg:text-3xl md:text-3xl sm:text-2xl text-2xl font-semibold text-white'>Token Name</h3>
              <p className='text-xl lg:text-2xl md:text-2xl  text-white'>Intelligent Signals</p>
            </div>
            <div className='flex flex-col items-center'>
              <h3 className='lg:text-3xl md:text-3xl sm:text-2xl text-2xl font-semibold text-white'>Token Symbol</h3>
              <p className='text-xl lg:text-2xl md:text-2xl text-white'>Insig</p>
            </div>
            <div className='flex flex-col items-center'>
              <h3 className='lg:text-3xl md:text-3xl sm:text-2xl text-2xl font-semibold text-white'>Total Supply</h3>
              <p className='text-xl lg:text-2xl md:text-2xl text-white'>300M</p>
            </div>
            <div className='flex flex-col items-center'>
              <h3 className='lg:text-3xl md:text-3xl sm:text-2xl text-2xl font-semibold text-white'>Decimal</h3>
              <p className='text-xl lg:text-2xl md:text-2xl text-white'>Intelligent Signals</p>
            </div>
            <div className='flex flex-col items-center'>
              <h3 className='lg:text-3xl md:text-3xl sm:text-2xl text-2xl font-semibold text-white'>Blockchain</h3>
              <p className='text-xl lg:text-2xl md:text-2xl text-white'>BEP20</p>
            </div>
          </div>
          <div className='flex lg:w-1/2 md:w-1/2 w-full px-6 mt-3 md:-mt-0  flex-col items-center  gap-8'>
            <h2 className='text-3xl lg:text-5xl md:text-5xl sm:text-5xl   font-semi-bold text-white'>Token Distribution</h2>
            <div className=''><img className="w-64 h-auto" src="/img/circle.png" alt='a'  /></div>
            <div className='flex flex-col items-center'>
              <h3 className='text-3xl font-semibold text-white'>Token Utility</h3>
              <p className='text-lg lg:text-2xl md:text-2xl text-white'>INSIG tokens are required to pay for Intelligent Signals subscriptions on its proprietary trading platform.
                INSIG tokens also will be used for staking </p>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default Tokenomics;