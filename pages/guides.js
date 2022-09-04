import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import AuthContext from '../stores/authContext'
import styles from '../styles/Guides.module.css'

export default function Guides() {
  const { user, authReady } = useContext(AuthContext)
  const [reviews, setReviews] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (authReady) {
      fetch('/.netlify/functions/reviews', user && {
        headers: {
          Authorization: "Bearer " + user.token.access_token
        }
      })
        .then(res => {
          if (!res.ok) {
            throw Error('You must be logged in!')
          }
          return res.json()
        })
        .then(data => {
          setReviews(data)
          setError(null)
        })
        .catch(err => {
          setError(err.message)
          setReviews(null)
        })
    }
  }, [user, authReady])


  return (
    <div className={styles.guides}>
      {!authReady && <div>Loading...</div>}

      {error && (
        <div className={styles.error}>
          <p>{error}</p>
        </div>
      )}

      {reviews && reviews.map(review => (
            <div key={review.title} className={styles.card}>
              <h3>{review.title}</h3>
              <h4>Main character: {review.character}</h4>
              <p>{review.content}</p>
            </div>
      ))}
    </div>
  )
}