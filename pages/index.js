import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
	<main className={inter.className}>
		<div className="h-auto" style={{ backgroundColor: '#000' }}>
			<header className="absolute inset-x-0 top-0 z-50 mx-48">
				<nav className="flex items-center justify-between p-6 lg:px-8 " aria-label="Global">
					<div className="flex lg:flex-1">
						<a href="#" className="-m-1.5 p-1.5">
						{/* <span className="sr-only">Your Company</span> */}
						<span className="text-white font-bold">Coffee<span className='txt-primary-coffee'>tuck</span></span>
						{/* <Image className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /> */}
						</a>
					</div>
					<div className="flex lg:hidden">
						<button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
						<span className="sr-only">Open main menu</span>
						<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
							<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
						</svg>
						</button>
					</div>
					<div className="hidden lg:flex lg:gap-x-12">
						<a href="#" className="text-sm font-bold leading-6 txt-primary-coffee">Home</a>
						<a href="#" className="text-sm font-normal leading-6 text-white">Menu</a>
						<a href="#" className="text-sm font-normal leading-6 text-white">Blog</a>
						<a href="#" className="text-sm font-normal leading-6 text-white">Pages</a>
						<a href="#" className="text-sm font-normal leading-6 text-white">About</a>
						<a href="#" className="text-sm font-normal leading-6 text-white">Shop</a>
						<a href="#" className="text-sm font-normal leading-6 text-white">Contact</a>
					</div>
					<div className="hidden lg:flex lg:flex-1 lg:justify-end">
						<a href="#" className="text-white hover:text-gray-900 dark:hover:text-white px-2">
							<svg className="w-5 h-5"  fill="none" stroke="currentColor" strokeWidth="{1.5}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
							</svg>
						</a>
						<a href="#" className="text-white hover:text-gray-900 dark:hover:text-white px-2">
							<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
							</svg>
						</a>
						<a href="#" className="text-white hover:text-gray-900 dark:hover:text-white px-2">
							<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
							</svg>
						</a>
					</div>
				</nav>
				{/* Mobile menu, show/hide based on menu open state. */}
				<div className="lg:hidden" role="dialog" aria-modal="true">
				{/* Background backdrop, show/hide based on slide-over state. */}
				<div className="fixed inset-0 z-50" />
					<div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
						<div className="flex items-center justify-between">
						<a href="#" className="-m-1.5 p-1.5">
							<span className="sr-only">Your Company</span>
							{/* <Image className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /> */}
						</a>
						<button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
							<span className="sr-only">Close menu</span>
							<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
						</div>
						<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
							<a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50">Home</a>
							<a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50">Menu</a>
							<a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50">Blog</a>
							<a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50">Pages</a>
							<a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50">About</a>
							<a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50">Shop</a>
							<a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50">Contact</a>
							</div>
							<div className="py-6">
							{/* <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a> */}
							</div>
						</div>
						</div>
					</div>
				</div>
			</header>

			<div className="lg:px-8 mx-48 md:pt-16" style={{ backgroundImage: "url('/assets/bg-head.png')" }}>
				<div className="grid grid-cols-2 gap-4">
					<div className="grid py-40">
						<span className="border-r border-primary-coffee w-48 font-sm text-sm p-2 border-l border-t border-b text-white">
							Welcome to coffee hut
							{/* &nbsp; <Image src="/assets/coffeehut.png" width={20} height={20}/> */}
						</span>
						<span className="txt-primary-coffee text-4xl font-bold py-4">
							Heal the world<br/> with coffee
						</span>
						<span className="text-white font-extralight text-sm py-4">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
							Varius sed pharetra dictum neque massa congue
						</span>
						<div className="flex py-4">
							<a href="#_"
								className="mr-4 inline-flex items-center justify-center w-2 px-8 py-3 mb-2 text-white
									border-primary-coffee border-solid border-l border-r border-t border-b bg-primary-coffee
									hover:bg-green-400 sm:w-auto sm:mb-0
									text-xs font-bold"
								data-primary="green-400"
								data-primary-reset="{}">
								Order Now
							</a>
							<a href="#_"
								className="inline-flex items-center justify-center w-2 px-8 py-3 mb-2 txt-primary-coffee
									border-primary-coffee border-solid border-l border-r border-t border-b
									sm:w-auto sm:mb-0
									text-xs font-bold"
								data-primary="green-400"
								data-primary-reset="{}">
								See menu
							</a>
						</div>

					</div>
					<div className="grid py-20 justify-end">
						<Image src="/assets/cupcoffee-head.png" width={400} height={400}/>
					</div>
				</div>
			</div>
		</div>

		{/* Section Best Coffee Maker */}
		<div className="lg:px-8 mx-48 md:pt-16">
			<div className="grid grid-cols-2 gap-4 relative">
				<div className="">
					<Image src='/assets/coffeecup.png' width={500} height={500}/>
				</div>
				<div className="p-6">
					<span className="dark font-normal" style={{ backgroundImage: 'url("/assets/ellipse.svg")', backgroundRepeat: 'no-repeat', height: '40px', display: 'inline-block' }}>About us</span>
					<h6 className="dark text-4xl font-bold my-2">We are the best quality Coffee maker</h6>
					<h6 className="txt-primary-dark my-4 text-sm">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
					</h6>
					<div className="my-8">
					<div>
						<input type="checkbox" className="check-regular" checked disabled />
						<label className="font-bold txt-primary-dark"> Experience Chefs</label><br/>
					</div>
					<div>
						<input type="checkbox" className="check-fill" checked disabled />
						<label className="font-bold txt-primary-dark"> Fresh & Organic Foods</label><br/>
					</div>
					<div>
						<input type="checkbox" className="check-regular" checked disabled />
						<label className="font-bold txt-primary-dark"> Different Coffee & Drinks</label><br/>
					</div>
					</div>
					<a href="#_"
						className="inline-flex items-center justify-center w-full px-12 py-3 mb-2 text-lg text-white bg-[#BC9A6C] rounded-md hover:bg-green-400 sm:w-auto sm:mb-0"
						data-primary="green-400"
						data-rounded="rounded-2xl"
						data-primary-reset="{}">
						Learn More
						<svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
					</a>
				</div>
			</div>
		</div>

		{/* Section Coffee Category */}
		<div className="lg:px-8 mx-48 md:pt-16 text-center">
			<div className="grid grid-cols-7 gap-4 py-8">
				<div className="col-start-3 col-span-3 ...">
					<h4 className="txt-dark text-3xl font-bold py-2">Coffee Category</h4>
					<h6 className="text-xs txt-primary-dark txt-primary-dark">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Varius sed pharetra dictum neque
					</h6>
				</div>
			</div>
			<div className="grid grid-cols-3 gap-4">
				<div className="justify-start">
					<div className="flex p-6">
						<div><Image src="/assets/icon/ic-coffeecup.svg" width={100} height={60}/></div>
						<div style={{ textAlign: 'left' }}>
							<h6 className="txt-primary-dark font-bold text-xl">Cappucino</h6>
							<h6 className="txt-primary-dark text-xs">Lorem Ipsum is not simply random text. It has roots in a piece of classica</h6>
						</div>
					</div>
					<div className="flex p-6">
						<div><Image src="/assets/icon/ic-coffeelatte.svg" width={100} height={60}/></div>
						<div style={{ textAlign: 'left' }}>
							<h6 className="txt-primary-dark font-bold text-xl">Cafe latte</h6>
							<h6 className="txt-primary-dark text-xs">Lorem Ipsum is not simply random text. It has roots in a piece of classica</h6>
						</div>
					</div>
					<div className="flex p-6">
						<div><Image src="/assets/icon/ic-coffeedark.svg" width={100} height={60}/></div>
						<div style={{ textAlign: 'left' }}>
							<h6 className="txt-primary-dark font-bold text-xl">Dark coffee</h6>
							<h6 className="txt-primary-dark text-xs">Lorem Ipsum is not simply random text. It has roots in a piece of classica</h6>
						</div>
					</div>
				</div>
				<div className="row-span-3 flex justify-center">
					<Image className='absolute' src="/assets/mccafe.png" width={200} height={200} />
					<div className="grid grid-cols-2 gap-4">
						<div className="...">
							<Image src="/assets/flower-l.png" width={150} height={150} style={{ marginTop: '100px', marginRight: '-20px' }}/>
						</div>
						<div className="...">
							<Image src="/assets/flower-r.png" width={150} height={150} style={{ marginTop: '100px', marginLeft: '-10px' }}/>
						</div>
					</div>
				</div>
				<div className="...">
					<div className="flex p-6">
						<div style={{ textAlign: 'left' }}>
							<h6 className="txt-primary-dark font-bold text-xl">Turkish coffee</h6>
							<h6 className="txt-primary-dark text-xs">Lorem Ipsum is not simply random text. It has roots in a piece of classica</h6>
						</div>
						<div><Image src="/assets/icon/ic-coffeeturkish.svg" width={100} height={60}/></div>
					</div>
					<div className="flex p-6">
						<div style={{ textAlign: 'left' }}>
							<h6 className="txt-primary-dark font-bold text-xl">Pancakes</h6>
							<h6 className="txt-primary-dark text-xs">Lorem Ipsum is not simply random text. It has roots in a piece of classica</h6>
						</div>
						<div><Image src="/assets/icon/ic-coffeepancake.svg" width={100} height={60}/></div>
					</div>
					<div className="flex p-6">
						<div style={{ textAlign: 'left' }}>
							<h6 className="txt-primary-dark font-bold text-xl">Coffee Bag</h6>
							<h6 className="txt-primary-dark text-xs">Lorem Ipsum is not simply random text. It has roots in a piece of classica</h6>
						</div>
						<div><Image src="/assets/icon/ic-coffeebag.svg" width={100} height={60}/></div>
					</div>
				</div>
			</div>
		</div>

		{/* Section Best Quality Food */}
		<div className="lg:px-8 mx-48 md:pt-16">
			<div className="grid grid-cols-2 gap-4 relative">
				<div className="">
					<Image src='/assets/best-quality.png' width={600} height={600}/>
				</div>
				<div className="p-6">
					<span className="dark font-normal" style={{ backgroundImage: 'url("/assets/ellipse.svg")', backgroundRepeat: 'no-repeat', height: '40px', display: 'inline-block' }}>Why Choose us</span>
					<h6 className="dark text-4xl font-bold my-2">Best quality food and coffee maker</h6>
					<h6 className="txt-primary-dark my-4 text-sm">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
					</h6>
					<div className="my-8">
						<div className="flex my-3">
							<Image src="/assets/highqcoffee.svg" width={90}  height={40}/>
							<div className="px-4 md:w-3/4">
								<label className="font-bold txt-primary-dark text-xl"> High quality coffee</label><br/>
								<span className="txt-primary-dark text-sm"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh .</span><br/>
							</div>
						</div>
						<div className="flex my-3">
							<Image src="/assets/highqcoffee.svg" width={90}  height={40}/>
							<div className="px-4 md:w-3/4">
								<label className="font-bold txt-primary-dark text-xl"> Best chef & Team</label><br/>
								<span className="txt-primary-dark text-sm"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh .</span><br/>
							</div>
						</div>
						<div className="flex my-3">
							<Image src="/assets/highqcoffee.svg" width={90}  height={40}/>
							<div className="px-4 md:w-3/4">
								<label className="font-bold txt-primary-dark text-xl"> Promo and deal</label><br/>
								<span className="txt-primary-dark text-sm"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh .</span><br/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* Section Our Favorite Menu */}
		<div className="lg:px-8 mx-48 md:pt-16 text-center">
			<div className="grid grid-cols-7 gap-4 py-8">
				<div className="col-start-3 col-span-3 ...">
					<h4 className="txt-dark text-3xl font-bold py-2">Our Favorites Menu</h4>
					<h6 className="text-xs txt-primary-dark txt-primary-dark">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Varius sed pharetra dictum neque
					</h6>
				</div>
			</div>
			<div className="grid grid-cols-4 gap-4">
				<div className="bg-slate-400 p-6 bg-secondary-coffee">
					<div className="grid grid-rows-5 grid-flow-col gap-4">
						<div className="bg-white h-20 flex px-4">
							<Image src="/assets/side-americano.svg" className="py-2 " width={30} height={5}/>
							<h6 className="font-semibold txt-primary-dark py-7 px-4">Americano</h6>
						</div>
						<div className="bg-primary-coffee h-20 flex px-4">
							<Image src="/assets/side-espresso.svg" className="py-2 " width={30} height={5}/>
							<h6 className="font-semibold text-white py-7 px-4">Espresso</h6>
						</div>
						<div className="bg-white h-20 flex px-4">
							<Image src="/assets/side-americano.svg" className="py-2 " width={30} height={5}/>
							<h6 className="font-semibold txt-primary-dark py-7 px-4">Arabica</h6>
						</div>
						<div className="bg-white h-20 flex px-4">
							<Image src="/assets/side-americano.svg" className="py-2 " width={30} height={5}/>
							<h6 className="font-semibold txt-primary-dark py-7 px-4">Coffee Stimy</h6>
						</div>
						<div className="bg-white h-20 flex px-4">
							<Image src="/assets/side-americano.svg" className="py-2 " width={30} height={5}/>
							<h6 className="font-semibold txt-primary-dark py-7 px-4">Organic Pack</h6>
						</div>
					</div>
				</div>
				<div className="col-span-3 ...">
					<div className="grid grid-cols-3 gap-4">
						<div className="">
							<div>
								<div className="max-w-sm  overflow-hidden shadow-md">
									<Image className="w-full" src="/assets/coffebeans-1.png" alt="Sunset in the mountains" width={100} height={100} />
									<div className="grid grid-cols-2 gap-4 p-4">
										<div className="justify-items-start text-start">
											<h6 className="txt-dark font-bold text-sm pb-2">Coffee Beans </h6>
											<h6 className="text-xs">43.78$</h6>
										</div>
										<div className="flex justify-end">
											<svg className="w-3 h-3 txt-primary-coffee" fill="currentColor" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
												<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
											</svg>
											<svg className="w-3 h-3 txt-primary-coffee" fill="currentColor" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
												<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
											</svg>
											<svg className="w-3 h-3 txt-primary-coffee" fill="currentColor" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
												<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
											</svg>
											<svg className="w-3 h-3 txt-primary-coffee" fill="currentColor" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
												<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
											</svg>
											<svg className="w-3 h-3 txt-primary-coffee" fill="currentColor" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
												<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
											</svg>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="">
							<div className="max-w-sm  overflow-hidden shadow-md">
								<Image className="w-full" src="/assets/coffebeans-2.png" alt="Sunset in the mountains" width={100} height={100}  />
								<div className="grid grid-cols-2 gap-4 p-4">
									<div className="justify-items-start text-start">
										<h6 className="txt-dark font-bold text-sm pb-2">Coffee Beans</h6>
										<h6 className="text-xs">43.78</h6>
									</div>
									<div className="flex justify-end">
										<svg className="w-3 h-3 txt-primary-coffee" fill="currentColor" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
										</svg>
										<svg className="w-3 h-3 txt-primary-coffee" fill="currentColor" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
										</svg>
										<svg className="w-3 h-3 txt-primary-coffee" fill="currentColor" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
										</svg>
										<svg className="w-3 h-3 txt-primary-coffee" fill="currentColor" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
										</svg>
										<svg className="w-3 h-3 txt-primary-coffee" fill="currentColor" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
										</svg>
									</div>
								</div>
							</div>
						</div>
						<div className="">
							<div className="max-w-sm  overflow-hidden shadow-md">
								<Image className="w-full" src="/assets/coffeebeans-3.png" alt="Sunset in the mountains" width={100} height={100} />
								<div className="grid grid-cols-2 gap-4 p-4">
									<div className="justify-items-start text-start">
										<h6 className="txt-dark font-bold text-sm pb-2">Coffee Beans</h6>
										<h6 className="text-xs">43.78</h6>
									</div>
									<div className="flex justify-end">
										<svg className="w-3 h-3 txt-primary-coffee" fill="currentColor" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
										</svg>
										<svg className="w-3 h-3 txt-primary-coffee" fill="currentColor" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
										</svg>
										<svg className="w-3 h-3 txt-primary-coffee" fill="currentColor" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
										</svg>
										<svg className="w-3 h-3 txt-primary-coffee" fill="currentColor" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
										</svg>
										<svg className="w-3 h-3 txt-primary-coffee" fill="currentColor" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
										</svg>
									</div>
								</div>
							</div>
						</div>
						<div className="">
							<div className="max-w-sm  overflow-hidden shadow-md">
								<Image className="w-full" src="/assets/coffeebeans-4.png" alt="Sunset in the mountains" width={100} height={100} />
								<div className="grid grid-cols-2 gap-4 p-4">
									<div className="justify-items-start text-start">
										<h6 className="txt-dark font-bold text-sm pb-2">Coffee Beans</h6>
										<h6 className="text-xs">43.78</h6>
									</div>
									<div className="flex justify-end">
										<svg className="w-3 h-3 txt-primary-coffee" fill="currentColor" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
										</svg>
										<svg className="w-3 h-3 txt-primary-coffee" fill="currentColor" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
										</svg>
										<svg className="w-3 h-3 txt-primary-coffee" fill="currentColor" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
										</svg>
										<svg className="w-3 h-3 txt-primary-coffee" fill="currentColor" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
										</svg>
										<svg className="w-3 h-3 txt-primary-coffee" fill="currentColor" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
										</svg>
									</div>
								</div>
							</div>
						</div>
						<div className="">
							<div className="max-w-sm  overflow-hidden shadow-md">
								<Image className="w-full" src="/assets/coffeebeans-5.png" alt="Sunset in the mountains" width={100} height={100} />
								<div className="grid grid-cols-2 gap-4 p-4">
									<div className="justify-items-start text-start">
										<h6 className="txt-dark font-bold text-sm pb-2">Coffee Beans</h6>
										<h6 className="text-xs">43.78</h6>
									</div>
									<div className="flex justify-end">
										<svg className="w-3 h-3 txt-primary-coffee" fill="currentColor" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
										</svg>
										<svg className="w-3 h-3 txt-primary-coffee" fill="currentColor" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
										</svg>
										<svg className="w-3 h-3 txt-primary-coffee" fill="currentColor" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
										</svg>
										<svg className="w-3 h-3 txt-primary-coffee" fill="currentColor" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
										</svg>
										<svg className="w-3 h-3 txt-primary-coffee" fill="currentColor" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
										</svg>
									</div>
								</div>
							</div>
						</div>
						<div className="">
							<div className="max-w-sm  overflow-hidden shadow-md">
								<Image className="w-full" src="/assets/coffeebeans-6.png" alt="Sunset in the mountains" width={100} height={100} />
								<div className="grid grid-cols-2 gap-4 p-4">
									<div className="justify-items-start text-start">
										<h6 className="txt-dark font-bold text-sm pb-2">Coffee Beans</h6>
										<h6 className="text-xs">43.78</h6>
									</div>
									<div className="flex justify-end">
										<svg className="w-3 h-3 txt-primary-coffee" fill="currentColor" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
										</svg>
										<svg className="w-3 h-3 txt-primary-coffee" fill="currentColor" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
										</svg>
										<svg className="w-3 h-3 txt-primary-coffee" fill="currentColor" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
										</svg>
										<svg className="w-3 h-3 txt-primary-coffee" fill="currentColor" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
										</svg>
										<svg className="w-3 h-3 txt-primary-coffee" fill="currentColor" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* Section Meet our chef */}
		<div className="lg:px-8 mx-48 md:pt-16 text-center">
			<div className="grid grid-cols-7 gap-4 py-8">
				<div className="col-start-3 col-span-3 ...">
					<h4 className="txt-dark text-3xl font-bold py-2">Meet our chef</h4>
					<h6 className="text-xs txt-primary-dark txt-primary-dark">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Varius sed pharetra dictum neque
					</h6>
				</div>
			</div>

			<div className="grid grid-cols-4 gap-4">
				<div className="px-2">
					<Image className="w-full" src="/assets/chef-1.png" alt="Sunset in the mountains" width={300} height={400}/>
					<h6 className="txt-dark text-sm font-bold pt-4">Bulbul Hassan</h6>
					<span className="txt-dark text-xs">Chef</span>
				</div>
				<div className="px-2">
					<Image className="w-full" src="/assets/chef-2.png" alt="Sunset in the mountains" width={300} height={400} />
					<h6 className="txt-dark text-sm font-bold pt-4">Jorina Begum</h6>
					<span className="txt-dark text-xs">Founder</span>
				</div>
				<div className="px-2">
					<Image className="w-full" src="/assets/chef-3.png" alt="Sunset in the mountains" width={300} height={400} />
					<h6 className="txt-dark text-sm font-bold pt-4">M. Mohammad Nur</h6>
					<span className="txt-dark text-xs">Specialist</span>
				</div>
				<div className="px-2">
					<Image className="w-full" src="/assets/chef-4.png" alt="Sunset in the mountains" width={300} height={400} />
					<h6 className="txt-dark text-sm font-bold pt-4">Munna Kathy</h6>
					<span className="txt-dark text-xs">Owner</span>
				</div>
			</div>
		</div>

		{/* Section latest news & blog*/}
		<div className="lg:px-8 mx-48 md:py-16 text-center">
			<div className="grid grid-cols-7 gap-4 py-8">
				<div className="col-start-3 col-span-3 ...">
					<h4 className="txt-dark text-3xl font-bold py-2">Latest News & Blog</h4>
					<h6 className="text-xs txt-primary-dark txt-primary-dark">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Varius sed pharetra dictum neque
					</h6>
				</div>
			</div>
			<div className="grid grid-cols-3 gap-4">
				<div className="px-2">
					<Image className="w-full" src="/assets/coffeeblog.png" alt="Sunset in the mountains" width={300} height={400}/>
					<div className="grid grid-cols-2 gap-4 px-4 py-2">
						<div className="flex">
							<Image src="/assets/icon/ic-calendar.svg" width={18} height={5}/>
							<h6 className="text-xs py-1 px-1">10 Feb, 2022</h6>
						</div>
						<div className="flex">
							<Image src="/assets/icon/ic-user.svg" width={18} height={5}/>
							<h6 className="text-xs py-1 px-1">By Ataur</h6>
						</div>
					</div>
					<div className="grid text-left px-4">
						<h6 className="text-md txt-dark font-bold pr-5 py-2">Simple coffee Receipt for Next Spring!</h6>
						<span className="text-xs txt-primary-dark py-2 text-justify">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.</span>
						<div className="w1/2 py-2">
							<a href="#_"
								className="inline-flex items-center justify-center w-1/2 px-3 py-2 mb-2 txt-primary-coffee border-primary-coffee border-solid border-l border-r border-t border-b bg-[#fff] rounded-md hover:bg-green-400 sm:w-auto sm:mb-0
									text-xs"
								data-primary="green-400"
								data-primary-reset="{}">
								Read More
								<svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
							</a>
						</div>
					</div>
				</div>
				<div className="px-2">
					<Image className="w-full" src="/assets/coffeeblog.png" alt="Sunset in the mountains" width={300} height={400} />
					<div className="grid grid-cols-2 gap-4 px-4 py-2">
						<div className="flex">
							<Image src="/assets/icon/ic-calendar.svg" width={18} height={5}/>
							<h6 className="text-xs py-1 px-1">10 Feb, 2022</h6>
						</div>
						<div className="flex">
							<Image src="/assets/icon/ic-user.svg" width={18} height={5}/>
							<h6 className="text-xs py-1 px-1">By Ataur</h6>
						</div>
					</div>
					<div className="grid text-left px-4">
						<h6 className="text-md txt-dark font-bold pr-5 py-2">Simple coffee Receipt for Next Spring!</h6>
						<span className="text-xs txt-primary-dark py-2 text-justify">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.</span>
						<div className="w1/2 py-2">
							<a href="#_"
								className="inline-flex items-center justify-center w-1/2 px-3 py-2 mb-2 txt-primary-coffee border-primary-coffee border-solid border-l border-r border-t border-b bg-[#fff] rounded-md hover:bg-green-400 sm:w-auto sm:mb-0
									text-xs"
								data-primary="green-400"
								data-primary-reset="{}">
								Read More
								<svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
							</a>
						</div>
					</div>
				</div>
				<div className="px-2">
					<Image className="w-full" src="/assets/coffeeblog.png" alt="Sunset in the mountains" width={300} height={400} />
					<div className="grid grid-cols-2 gap-4 px-4 py-2">
						<div className="flex">
							<Image src="/assets/icon/ic-calendar.svg" width={18} height={5}/>
							<h6 className="text-xs py-1 px-1">10 Feb, 2022</h6>
						</div>
						<div className="flex">
							<Image src="/assets/icon/ic-user.svg" width={18} height={5}/>
							<h6 className="text-xs py-1 px-1">By Ataur</h6>
						</div>
					</div>
					<div className="grid text-left px-4">
						<h6 className="text-md txt-dark font-bold pr-5 py-2">Simple coffee Receipt for Next Spring!</h6>
						<span className="text-xs txt-primary-dark py-2 text-justify">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.</span>
						<div className="w1/2 py-2">
							<a href="#_"
								className="inline-flex items-center justify-center w-1/2 px-3 py-2 mb-2 txt-primary-coffee border-primary-coffee border-solid border-l border-r border-t border-b bg-[#fff] rounded-md hover:bg-green-400 sm:w-auto sm:mb-0
									text-xs"
								data-primary="green-400"
								data-primary-reset="{}">
								Read More
								<svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* Partners & Client */}
		<div className="lg:px-8 mx-48 md:py-16 text-center">
			<div className="grid grid-cols-7 gap-4 py-8">
				<div className="col-start-3 col-span-3 ...">
					<h6 className="font-miniver txt-primary-coffee">Partners & Clients</h6>
					<h4 className="txt-dark text-3xl font-bold py-2">We work with the best people</h4>
				</div>
			</div>
			<div className="grid grid-flow-col auto-cols-max px-8 py-8">
				<div className="px-8 align-middle">
					<Image src="/assets/partners/partner-1.svg"  width={150} height={100}/>
				</div>
				<div className="px-8">
					<Image src="/assets/partners/partner-2.svg"  width={100}  height={100} />
				</div>
				<div className="px-8">
					<Image src="/assets/partners/partner-3.svg"  width={90}  height={100} />
				</div>
				<div className="px-8">
					<Image src="/assets/partners/partner-4.svg"  width={80}  height={100} />
				</div>
				<div className="px-8">
					<Image src="/assets/partners/partner-5.svg"  width={100} height={100}  />
				</div>
				<div className="px-8">
					<Image src="/assets/partners/partner-6.svg"  width={70}  height={100} />
				</div>
			</div>
		</div>

		{/* Footer */}
		<div className="h-full" style={{ backgroundImage: 'url("/assets/bg-footer.png")', boxShadow: ' inset 2000px 0 0 0 rgba(0, 0, 0, 0.5)' }}>
			<div className="lg:px-8 mx-48 md:py-16 text-center">
				<div className="grid grid-cols-3 gap-4">
					<div>
						<h6 className='text-justify text-white font-bold text-lg py-4'>
							Food<span className="txt-primary-coffee">tuck</span>
						</h6>
						<h6 className='text-justify text-white font-extralight text-sm'>
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
						</h6>
					</div>
					<div className="py-4 px-12">
						<h6 className="text-justify text-white font-bold text-sm">
							Explore
						</h6>
						<div className="grid grid-rows-3 grid-flow-col gap-4 text-justify py-8">
							<div>
								<h6 className="text-white text-xs font-extralight"> Home</h6>
							</div>
							<div>
								<h6 className="text-white text-xs font-extralight"> About Us</h6>
							</div>
							<div>
								<h6 className="text-white text-xs font-extralight"> Contact Us</h6>
							</div>
							<div>
								<h6 className="text-white text-xs font-extralight"> Blog</h6>
							</div>
							<div>
								<h6 className="text-white text-xs font-extralight"> Team</h6>
							</div>
							<div>
								<h6 className="text-white text-xs font-extralight"> Our Menu</h6>
							</div>
						</div>
					</div>
					<div className="py-4 px-12">
						<h6 className="text-justify text-white font-bold text-sm">
							Contact Us
						</h6>
						<div className="flex text-justify pt-8">
							<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
								<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
							</svg>
							<h6 className="text-white text-sm font-extralight px-2">Jakarta, 3rd Floor. Office 45</h6>
						</div>
						<div className="flex text-justify pt-4">
							<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
							</svg>
							<h6 className="text-white text-sm font-extralight px-2">0095-96659986</h6>
						</div>
						<div className="flex text-justify pt-4">
							<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
							</svg>
							<h6 className="text-white text-sm font-extralight px-2">M.Alyaquot@4house.co</h6>
						</div>
						<div className="flex text-justify pt-4">
							<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
							<h6 className="text-white text-sm font-extralight px-2">Sun - Sat / 10:00 AM - 8.00 PM</h6>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
  )
}
