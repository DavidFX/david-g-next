export default function Reviews() {
    return (
        <section aria-label="Reviews" className="container mt-[128px]">
            <div className="font-medium text-left font-space">
                <h3 className="text-primary">MY REVIEWS -</h3>
                <h2 className="text-[32px]">Reviews From My Clients</h2>
            </div>
            <div className="mt-[64px] flex">
                {/* First review */}
                <div className="review">
                    <p className="max-w-xs italic">
                        David has shown a very professional and caring attitude.
                        He delivered the website with all the requested features
                        and always communicated regarding things that
                        weren&apos;t clear. Very happy with the result overall!
                        Would hire him again if I had the chance.
                    </p>
                    <div className="flex gap-2">
                        <img src="./star.svg" alt="" />
                        <img src="./star.svg" alt="" />
                        <img src="./star.svg" alt="" />
                        <img src="./star.svg" alt="" />
                        <img src="./star.svg" alt="" />
                    </div>
                    <p className="text-[20px]">Matvey Dergunov</p>
                </div>
            </div>
        </section>
    );
}
