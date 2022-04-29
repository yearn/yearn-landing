import	React							from	'react';
import	Head							from	'next/head';
import	{DefaultSeo}					from	'next-seo';

import	'style/Default.css';
import	'tailwindcss/tailwind.css';

function	AppWrapper(props) {
	const	{Component, pageProps, router} = props;
	const	WEBSITE_URI = process.env.WEBSITE_URI;

	return (
		<>
			<Head>
				<title>{'Yearn Finance'}</title>
				<link rel={'icon'} href={'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>4️⃣</text></svg>'} />
				<link rel={'stylesheet'} href={'https://use.typekit.net/oos7ggl.css'}/>
				<meta httpEquiv={'X-UA-Compatible'} content={'IE=edge'} />
				<meta name={'viewport'} content={'width=device-width, initial-scale=1'} />
				<meta name={'description'} content={'Yearn Finance'} />
				<meta name={'msapplication-TileColor'} content={'#62688F'} />
				<meta name={'theme-color'} content={'#ffffff'} />
				<meta charSet={'utf-8'} />

				<link rel={'preconnect'} href={'https://fonts.googleapis.com'} />
				<link rel={'preconnect'} href={'https://fonts.gstatic.com'} crossOrigin={'true'} />
				<link href={'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap'} rel={'stylesheet'} />
				<link rel={'stylesheet'} href={'https://unpkg.com/@egjs/flicking@4.0.0/dist/flicking.css'} />


				<meta name={'robots'} content={'index,nofollow'} />
				<meta name={'googlebot'} content={'index,nofollow'} />
				<meta charSet={'utf-8'} />
			</Head>
			<DefaultSeo
				title={'Yearn Finance'}
				defaultTitle={'Yearn Finance'}
				description={'Yearn Finance'}
				openGraph={{
					type: 'website',
					locale: 'en_US',
					url: WEBSITE_URI,
					site_name: 'Yearn Finance',
					title: 'Yearn Finance',
					description: 'Yearn Finance',
					images: [
						{
							url: `${WEBSITE_URI}og.png`,
							width: 1200,
							height: 675,
							alt: 'Yearn',
						}
					]
				}}
				twitter={{
					handle: '@iearnfinance',
					site: '@iearnfinance',
					cardType: 'summary_large_image',
				}} />
			<div id={'app'} className={'relative flex flex-col md:flex-row max-w-6xl mx-auto'} style={{minHeight: '100vh'}}>
				<Component
					key={router.route}
					element={props.element}
					router={props.router}
					{...pageProps} />
			</div>
		</>
	);
}

function	MyApp(props) {
	const	{Component, pageProps} = props;
	
	return (
		<AppWrapper
			Component={Component}
			pageProps={pageProps}
			element={props.element}
			router={props.router} />
	);
}


export default MyApp;
