import	React				from	'react';
import	useScroll			from	'hooks/useScroll';
import	Comp				from	'components/icons/comp';

function	Header({currentPage, onClick}) {
	return (
		<header className={'fixed top-0 inset-x-0 h-40 w-full with-top-gradient z-20'}>
			<nav className={'max-w-6xl w-full mx-auto py-6 md:py-10 items-center justify-between flex flex-row'}>
				<div className={'flex flex-row items-center justify-center cursor-pointer'} onClick={() => onClick(0)}>
					<svg width={'40'} height={'40'} viewBox={'0 0 40 40'} fill={'none'} xmlns={'http://www.w3.org/2000/svg'}>
						<path d={'M0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20Z'} fill={'#0657F9'}/>
						<path d={'M19.1719 28.4321V11.7921H20.9837V28.4321H19.1719Z'} fill={'white'}/>
						<path d={'M28.3977 17.3362L22.8022 18.8202L21.5544 13.0122L23.2182 12.6362L23.8741 15.3882C23.8741 15.3882 25.386 12.9082 23.3702 10.3402C22.1823 9.02016 21.6184 8.96416 20.2865 8.75616C19.1146 8.58816 16.3909 8.98416 15.579 12.1642C15.235 14.2122 15.623 15.7282 18.2627 17.7122L18.1147 19.9202C18.1147 19.9202 15.167 17.8442 14.4071 16.3882C13.8191 15.2362 12.8112 12.9602 14.6311 9.79216C15.611 8.20816 17.5428 6.68816 20.9464 6.84816C22.6583 6.92016 26.8378 9.01216 26.1899 13.9002C26.0779 14.8162 25.602 16.0362 25.602 16.0362L27.8977 15.5242L28.3977 17.3362Z'} fill={'white'}/>
						<path d={'M25.2033 30.3562C24.1794 31.9122 22.2076 33.3802 18.8119 33.1322C17.1001 33.0162 12.9805 30.8122 13.7564 25.9442C13.8924 25.0322 14.4003 23.8282 14.4003 23.8282L12.0926 24.2762L11.6406 22.4562L17.2761 21.1202L18.3719 26.9602L16.6961 27.2922L16.1122 24.5202C16.1122 24.5202 14.5363 26.9562 16.4801 29.5802C17.632 30.9322 18.192 31.0002 19.5238 31.2442C20.6877 31.4442 23.4234 31.1162 24.3194 27.9602C24.7153 25.9242 24.3673 24.3962 21.7836 22.3402L21.9916 20.1362C21.9916 20.1362 24.8833 22.2882 25.6032 23.7642C26.1552 24.9362 27.1031 27.2402 25.2033 30.3562Z'} fill={'white'}/>
					</svg>
				</div>
				<div className={'flex flex-row space-x-10'}>
					<p
						onClick={() => onClick(currentPage <= 1 ? 1 : 0)}
						className={`${currentPage <= 1 ? 'text-bluepillblue-regular border-b border-bluepillblue' : 'text-ygray-50 hover:text-ygray-100 transition-colors'} cursor-pointer transition-colors`}>
						{'About'}
					</p>
					<p
						onClick={() => onClick(1)}
						className={`${currentPage === 2 ? 'text-bluepillblue-regular border-b border-bluepillblue' : 'text-ygray-50 hover:text-ygray-100 transition-colors'} cursor-pointer transition-colors`}>
						{'How Vaults work'}
					</p>
					<p
						onClick={() => onClick(2)}
						className={`${currentPage === 3 ? 'text-bluepillblue-regular border-b border-bluepillblue' : 'text-ygray-50 hover:text-ygray-100 transition-colors'} cursor-pointer transition-colors`}>
						{'Partners'}
					</p>
					<p
						onClick={() => onClick(3)}
						className={`${currentPage === 4 ? 'text-bluepillblue-regular border-b border-bluepillblue' : 'text-ygray-50 hover:text-ygray-100 transition-colors'} cursor-pointer transition-colors`}>
						{'Contributors'}
					</p>
					<p
						onClick={() => onClick(4)}
						className={`${currentPage === 5 ? 'text-bluepillblue-regular border-b border-bluepillblue' : 'text-ygray-50 hover:text-ygray-100 transition-colors'} cursor-pointer transition-colors`}>
						{'Index'}
					</p>
				</div>
				<div className={'flex flex-row items-center justify-end'}>
					<a href={'https://yearn.finance'} target={'_blank'} className={'text-bluepillblue-regular font-bold cursor-pointer'} rel={'noreferrer'}>{'Go to Vaults'}</a>
				</div>
			</nav>
		</header>
	);
}

function	Footer({onClick, className, nextPageText}) {
	return (
		<div className={'cursor-pointer max-w-6xl mx-auto mt-auto mb-6 md:mb-10'} onClick={onClick}>
			<p className={'text-center mb-5 underline'}>{nextPageText}</p>
			<svg onClick={onClick} width={'40'} height={'40'} className={`animate animate-bounce ${className}`} viewBox={'0 0 40 40'} fill={'none'} xmlns={'http://www.w3.org/2000/svg'}>
				<path fillRule={'evenodd'} clipRule={'evenodd'} d={'M29.5731 20.3093C30.0927 20.7639 30.1453 21.5536 29.6907 22.0731L20.9407 32.0731C20.7034 32.3444 20.3605 32.5 20 32.5C19.6395 32.5 19.2966 32.3444 19.0593 32.0731L10.3093 22.0731C9.85469 21.5536 9.90734 20.7639 10.4269 20.3093C10.9464 19.8547 11.7361 19.9073 12.1907 20.4269L20 29.3518L27.8093 20.4269C28.2639 19.9073 29.0536 19.8547 29.5731 20.3093Z'} fill={'#0657F9'}/>
				<path fillRule={'evenodd'} clipRule={'evenodd'} d={'M29.5731 11.9759C30.0927 12.4305 30.1453 13.2202 29.6907 13.7398L20.9407 23.7398C20.7034 24.011 20.3605 24.1666 20 24.1666C19.6395 24.1666 19.2966 24.011 19.0593 23.7398L10.3093 13.7398C9.85469 13.2202 9.90734 12.4305 10.4269 11.9759C10.9464 11.5213 11.7361 11.574 12.1907 12.0935L20 21.0184L27.8093 12.0935C28.2639 11.574 29.0536 11.5213 29.5731 11.9759Z'} fill={'#0657F9'}/>
			</svg>
		</div>
	);
}

function	Index({moveSectionDown}) {
	const	[display, set_display] = React.useState(false);

	React.useEffect(() => {
		if (typeof(window) !== 'undefined')
			set_display(true);
	}, [typeof(window) !== 'undefined']);

	return (
		<section className={'h-full max-w-6xl mx-auto flex flex-col w-full'}>
			<div className={'h-screen w-full flex flex-col justify-center items-center text-center'}>
				<h1 className={'font-bold text-4xl'}>{'Yearn, a weird place for our money'}</h1>

				<article className={'text-center my-5'}>
					<h2 className={'font-bold text-2xl'}>{'New financial frontiers are strange places to say the least.'}<br/>{'But at Yearn we believe in the power of weird.'}</h2>
					<p>{'Divergent minds create the strongest protocols and smartest yield strategies. Weird people don’t shy away from tough challenges, they rush towards them. So whether you’re crypto curious, a potential partner or future contributor, come join the weirder side of defi – it may be the sanest choice you ever make.\n'}</p>
				</article>

				<article className={'flex flex-row items-center space-x-4'}>
					<button onClick={moveSectionDown} className={'bg-bluepillblue-regular border border-bluepillblue-regular hover:bg-bluepillblue-hover transition-colors text-white font-bold py-2 px-4 rounded-lg w-53 text-sm'}>{'Go to app'}</button>
					<button onClick={moveSectionDown} className={'bg-none border border-bluepillblue-regular text-bluepillblue-regular hover:bg-bluepillblue-light transition-colors font-bold py-2 px-4 rounded-lg w-53 text-sm'}>{'How it works?'}</button>
				</article>
			</div>
			<Footer className={'text-bluepillblue'} nextPageText={'How Vaults work'} onClick={() => moveSectionDown()} />
		</section>
	);
}

function	How({moveSectionDown}) {
	return (
		<section className={'h-full max-w-6xl mx-auto flex flex-col w-full'}>
			<div className={'max-w-6xl w-full h-full mx-auto flex flex-row justify-center items-center'}>
				<div className={'mr-28'}>
					<div>
						<h2 className={'text-6xl text-ygray-100 font-black'}>{'How'}</h2>
						<h2 className={'text-6xl text-ygray-100 font-black'}>
							{'Yearn '}
							<span className={'text-bluepillblue'}>{'Vaults'}</span>
							{' Work'}
						</h2>
					</div>
					<div className={'my-8'}>
						<p className={'text-base text-ygray-50'}>{'Vaults are a passive-investing strategy, enabling people to put their capital to work via automation. Yearn strategists and systems identify the optimal opportunities for yield in the market.'}</p>
						<p className={'mt-8 text-base text-ygray-50'}>{'Users benefit from socializing gas costs and automation which shifts capital, auto-compounds, and rebalances to maximize yield. End users need not be experts in DeFi or the underlying protocols to utilize Yearn Vaults.'}</p>
					</div>
					<div className={'flex flex-row space-x-4'}>
						<button className={'text-base px-14 py-2 button-gradient rounded-lg text-white font-bold border border-bluepillblue'}>{'Get me to vaults'}</button>
						<button className={'text-base px-14 py-2 rounded-lg text-bluepillblue-regular font-bold border border-bluepillblue'}>{'Learn more'}</button>
					</div>
				</div>
				<div className={'w-full mr-10 mt-10'}>
					<Comp />
				</div>
			</div>
			<Footer className={'text-bluepillblue'} nextPageText={'Partners'} onClick={() => moveSectionDown()} />
		</section>
	);
}

function	Partners({moveSectionDown}) {
	return (
		<section className={'h-full max-w-6xl mx-auto flex flex-col w-full'}>
			<div className={'max-w-6xl w-full h-full mx-auto flex flex-row justify-center items-center'}>
				<div className={'mr-28'}>
					<div>
						<h2 className={'text-6xl text-ygray-100 font-black'}>{'Partners'}</h2>
					</div>
					<div className={'my-8'}>
						<p className={'text-base text-ygray-50'}>{'Vaults are a passive-investing strategy, enabling people to put their capital to work via automation. Yearn strategists and systems identify the optimal opportunities for yield in the market.'}</p>
						<p className={'mt-8 text-base text-ygray-50'}>{'Users benefit from socializing gas costs and automation which shifts capital, auto-compounds, and rebalances to maximize yield. End users need not be experts in DeFi or the underlying protocols to utilize Yearn Vaults.'}</p>
					</div>
					<div className={'flex flex-row space-x-4'}>
						<button className={'text-base px-14 py-2 button-gradient rounded-lg text-white font-bold border border-bluepillblue'}>{'Sign me in'}</button>
						<button className={'text-base px-14 py-2 rounded-lg text-bluepillblue-regular font-bold border border-bluepillblue'}>{'Learn more'}</button>
					</div>
				</div>
				<div className={'w-full mr-10 mt-10'}>
				</div>
			</div>
			<Footer className={'text-bluepillblue'} nextPageText={'Contributors'} onClick={() => moveSectionDown()} />
		</section>
	);
}

function	Contributors(moveSectionDown) {
	return (
		<section className={'h-full max-w-6xl mx-auto flex flex-col w-full'}>
			<div className={'max-w-6xl w-full h-full mx-auto flex flex-row justify-center items-center'}>
				<div className={'mr-28'}>
					<div>
						<h2 className={'text-6xl text-ygray-100 font-black'}>{'Contributors'}</h2>
					</div>
					<div className={'my-8'}>
						<p className={'text-base text-ygray-50'}>{'Vaults are a passive-investing strategy, enabling people to put their capital to work via automation. Yearn strategists and systems identify the optimal opportunities for yield in the market.'}</p>
						<p className={'mt-8 text-base text-ygray-50'}>{'Users benefit from socializing gas costs and automation which shifts capital, auto-compounds, and rebalances to maximize yield. End users need not be experts in DeFi or the underlying protocols to utilize Yearn Vaults.'}</p>
					</div>
					<div className={'flex flex-row space-x-4'}>
						<button className={'text-base px-14 py-2 button-gradient rounded-lg text-white font-bold border border-bluepillblue'}>{'Sign me up'}</button>
						<button className={'text-base px-14 py-2 rounded-lg text-bluepillblue-regular font-bold border border-bluepillblue'}>{'Learn more'}</button>
					</div>
				</div>
				<div className={'w-full mr-10 mt-10'}>
				</div>
			</div>
			<Footer className={'text-bluepillblue'} nextPageText={'Index of sites'} onClick={() => moveSectionDown()} />
		</section>
	);
}


function	SiteIndex() {
	return (
		<section className={'h-full max-w-6xl mx-auto flex flex-col w-full'}>
			<div className={'max-w-6xl w-full h-full mx-auto flex flex-row justify-center items-center'}>
				<div className={'mr-28'}>
					<div>
						<h2 className={'text-6xl text-ygray-100 font-black'}>{'Index of sites'}</h2>
					</div>
					<div className={'my-8'}>
						<p className={'text-base text-ygray-50'}>{'Vaults are a passive-investing strategy, enabling people to put their capital to work via automation. Yearn strategists and systems identify the optimal opportunities for yield in the market.'}</p>
						<p className={'mt-8 text-base text-ygray-50'}>{'Users benefit from socializing gas costs and automation which shifts capital, auto-compounds, and rebalances to maximize yield. End users need not be experts in DeFi or the underlying protocols to utilize Yearn Vaults.'}</p>
					</div>
				</div>
			</div>
		</section>
	);
}

function Wrapper() {
	const	[slideSize, set_slideSize] = React.useState(0);
	const	[currentPage, set_currentPage] = React.useState(0);

	const	ref = React.useRef();
	const	slideRef = React.useRef();
	const	{y} = useScroll();

	React.useEffect(() => {
		const	sectionHeight = slideRef?.current?.getBoundingClientRect()?.height || 0;
		const	positionFromTop = ref?.current?.getBoundingClientRect()?.top || 0;
		set_currentPage(positionFromTop > 0 ? 0 : Math.round((Math.abs(positionFromTop / sectionHeight) + 1)));
		set_slideSize(sectionHeight);
	}, [y, slideRef, ref]);

	function	scrollTo(page) {
		window.scroll({top: (slideSize * page), behavior: 'smooth'});
	}

	return (
		<>
			<Header currentPage={currentPage} onClick={scrollTo} />
			<main ref={ref} className={'section-wrapper'}>
				<section ref={slideRef} className={'section flex w-full h-screen'}>
					<div className={'w-full h-full'}>
						<Index moveSectionDown={() => scrollTo(1)} />
					</div>
				</section>

				<section className={'section flex w-full h-screen'}>
					<div className={'w-full h-full'}>
						<How moveSectionDown={() => scrollTo(2)} />
					</div>
				</section>

				<section className={'section flex w-full h-screen'}>
					<div className={'w-full h-full'}>
						<Partners moveSectionDown={() => scrollTo(3)} />
					</div>
				</section>
				<section className={'section flex w-full h-screen'}>
					<div className={'w-full h-full'}>
						<Contributors moveSectionDown={() => scrollTo(4)} />
					</div>
				</section>
				<section className={'section flex w-full h-screen'}>
					<div className={'w-full h-full'}>
						<SiteIndex />
					</div>
				</section>
			</main>
		</>
	);
}

export default Wrapper;
