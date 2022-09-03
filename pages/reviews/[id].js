export default function Review() {
    return (
        <div>...</div>
    )
}

export async function getStaticPaths() {
    const reviews = await fetch('/.netlify/functions/reviews')
    const paths = reviews.map(review => {
        return {
            params: {
                id: review.title
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}