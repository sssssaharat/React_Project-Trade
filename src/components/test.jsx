;<div className='flex w-screen h-screen  flex-col items-center justify-center relative bg-black '>
  {/* Tag header */}
  <header className='absolute inset-x-0 top-0 z-50'>
    <nav className='flex items-center justify-center p-6' aria-label='Global'>
      <div className='flex'>
        <BiCandles color='white' className='h-10 w-auto' />
      </div>
    </nav>
  </header>

  <div className='relative isolate px-2 pt-14 lg:px-8 xs:mt-20'>
    <div className='items-center justify-beetween gap-x-12 gap-y-12 sm:gap-y-16 sm:grid-cols-2 xl:py-20 md:py-20 sm:py-20 py-12'>
      {/* Text inspire  */}
      <div className='text-center'>
        <h1 className='mx-6 text-9xl font-bold tracking-tight'>
          <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>
            Trust in Bias
          </LinearGradient>
        </h1>
        <p className='mx-20 mt-6 text-lg leading-8 text-zinc-300'>
          Knowledge is worthless when you can't control your emotions but
          consciousness can be deadly when practiced well.
        </p>

        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <a
            href='#'
            className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-100 ring-1 ring-gray-400 hover:ring-gray-900/20 font-semibold '
          >
            Learn more <span aria-hidden='true'>👇</span>
          </a>
        </div>
      </div>
      {/* Img headerBG  */}
      <div className='object-cover h-fit w-96 mt-10 grid mx-9 md:grid-cols-2 gap-x-80 '>
        <Spline scene='https://prod.spline.design/T9HhHQBe8U9akgZ2/scene.splinecode' />
      </div>
    </div>
  </div>
</div>




;<div className='object-cover grid items-center justify-center mx-9'>
  <div className='relative'>
    <img className=' rounded-3xl ' src='src/assets/headerbg.PNG' alt='' />
    <div className='absolute z-2'>
      <Spline scene='https://prod.spline.design/WIRQPsERnZuzPMjn/scene.splinecode' />
    </div>
  </div>
</div>


;<div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
  <h2 className='text-3xl text-center font-bold tracking-tight text-slate-50'>
    Our Trending Courses 📚
  </h2>
  <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
    {products.map(product => (
      <div key={product.id} className='group relative'>
        <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
          <img
            src={product.logo}
            className='h-full w-full object-cover object-center lg:h-full lg:w-full'
          />
        </div>
        <div className='mt-4 flex justify-between'>
          <div>
            <h3 className='text-sm text-gray-700'>
              <a href={product.href}>
                <span aria-hidden='true' className='absolute inset-0' />
                {product.name}
              </a>
            </h3>
            <p className='mt-1 text-sm text-gray-500'>{product.sub}</p>
          </div>
          <p className='text-sm font-medium text-gray-900'>
            {product.aptitude}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
