import Header from "../components/Header";

const Home = () => {
    return (
        <>
            <Header />
            <main className="pt-20 px-4">
                <h1 className="text-3xl font-bold">Welcome to My Application</h1>
                <p className="mt-4">This is the home page. You can navigate using the links above.</p>
            </main>
        </>
    );
}

export default Home;