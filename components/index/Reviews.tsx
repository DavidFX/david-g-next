export default function Reviews() {
    const reviews = [
        {
            id: 1,
            text: "David has shown a very professional and caring attitude. He delivered the website with all the requested features and always communicated regarding things that weren't clear. Very happy with the result overall! Would hire him again if I had the chance.",
            stars: 5,
            name: "Matvey Dergunov",
        },
    ];

    return (
        <section aria-label="Reviews" className="container mt-[128px]">
            <div className="font-medium text-left font-space">
                <h3 className="text-primary">MY REVIEWS -</h3>
                <h2 className="text-[32px]">Reviews From My Clients</h2>
            </div>
            <div className="mt-[64px] flex">
                {reviews.map((review) => (
                    <div key={review.id} className="review">
                        <p className="max-w-xs italic">{review.text}</p>
                        <div className="flex gap-2">
                            {Array.from({ length: review.stars }).map(
                                (_, index) => (
                                    <img key={index} src="./star.svg" alt="" />
                                )
                            )}
                        </div>
                        <p className="text-[20px]">{review.name}</p>)
                    </div>
                ))}
            </div>
        </section>
    );
}
