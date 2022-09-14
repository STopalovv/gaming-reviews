import Link from 'next/link'
import styles from '../../styles/Guides.module.css'
import Image from 'next/image'

export async function getStaticPaths() {
  const response = await fetch('/guides')
  const data = await response.json()
  const paths = data.map(review => {
    return {
      params: {
        id: review.id.toString()
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const id = context.params.id
  const response = await fetch("/guides" + id)
  const data = await response.json()
  return {
    props: {
      review: data
    }
  }
}

function Review({ review }) {
  return (
    <div className={styles.guides}>
            <h1 className={styles.title}>{review.title}</h1>
            <h3 className={styles.character}>{review.character}</h3>
            <p className={styles.content}>{review.firstContent}</p>
            <Image src={review.firstImage} height={380} width={550} className={styles.image} />
            <p className={styles.content}>{review.secondContent}</p>
            <Image src={review.secondImage} height={380} width={550} className={styles.image} />
            <p className={styles.content}>{review.thirdContent}</p>
            <br />
            <Link href={`/guides`}><a class={styles.link}>Home</a></Link>
        </div>
  )
}

export default Review