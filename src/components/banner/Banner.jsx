
const Banner = () => {
    return (
        <div className="hero min-h-[400px] container mx-auto mt-6 rounded-xl" style={{ backgroundImage: 'url(https://media.istockphoto.com/id/1430724181/photo/computer-code-with-function-error-text-displayed-on-pixelated-screen-with-colorful-words-on.jpg?s=612x612&w=0&k=20&c=JfP6iYSoMKeA1KSveksgPASKy7qaned2Anjz-4ClQDE=)' }}>
            <div className="hero-overlay bg-opacity-30 rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg">
                    <h1 className="mb-5 text-3xl md:text-4xl font-bold text-yellow-500"> Javascript, node.js, React.js, and More, Gather Here!</h1>
                    <p className="mb-5 text-amber-500">Connect with fellow programmers to discuss Java, Python, C++, and more. Explore trends, share insights, and enhance coding skills!</p>
                    <a href="#blogs"> <button className="btn btn-warning">Get Booking</button></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;