import Head from "next/head"

function Home() {
	return (
		<>
			<Head>
				<title>Index</title>
                <link rel="favicon icon" href="/icon.jpeg"></link>
			</Head>
			<div>
				<h1>Home</h1>
				<a href="./api/story">API</a>
			</div>
		</>
	)
}

export default Home
