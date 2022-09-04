import Link from 'next/link'
import styles from '../styles/Guides.module.css'

const reviews = [
  { id: 1, title: "Assassin's Creed", character: "Altaïr Ibn-La'Ahad", content: "The original Assassin that spawned the franchise and no doubt one of the greatest and strongest assassins to carry the hidden blade was Altair. Altair shaped the course of history for centuries to come and is one of the few to stand against both the Brotherhood and the Templars." },
  { id: 2, title: "Assassin's Creed II", character: "Ezio Auditore de Firenze", content: "Ezio Auditore served as the protagonist of Assassin's Creed 2 but would also appear in the next two installments of the franchise: Assassin's Creed Brotherhood and Assassin's Creed Revelations. Ezio is perhaps the most dedicated and noteworthy assassin to date, having shaped the path for what the Brotherhood of Assassins eventually became" },
  { id: 3, title: "Assassin's Creed: Brotherhood", character: "Ezio Auditore de Firenze", content: "Ezio Auditore served as the protagonist of Assassin's Creed 2 but would also appear in the next two installments of the franchise: Assassin's Creed Brotherhood and Assassin's Creed Revelations. Ezio is perhaps the most dedicated and noteworthy assassin to date, having shaped the path for what the Brotherhood of Assassins eventually became" },
  { id: 4, title: "Assassin's Creed: Revelations", character: "Ezio Auditore de Firenze", content: "Ezio Auditore served as the protagonist of Assassin's Creed 2 but would also appear in the next two installments of the franchise: Assassin's Creed Brotherhood and Assassin's Creed Revelations. Ezio is perhaps the most dedicated and noteworthy assassin to date, having shaped the path for what the Brotherhood of Assassins eventually became" },
  { id: 5, title: "Assassin's Creed III", character: "Connor", content: "Assassin's Creed 3 introduced the illegitimate son of Haytham Kenway, Ratonhnhaké:ton, more commonly known as “Connor” in the Assassins Creed franchise. Connor donned the hood of an Assassin after the burning of his village, seeking to remove the invaders of his people's land." },
  { id: 6, title: "Assassin's Creed IV: Black Flag", character: "Edward Kenway", content: "Edward Kenway served as the main protagonist of Assassin's Creed: Black Flag; he was a ruthless and cunning pirate during the War of Spanish Succession. Kenway found himself a member of the West Indies Brotherhood of Assassins by happenstance when he impersonated a Templar and learned of their secret plot regarding an ancient artifact." },
  { id: 7, title: "Assassin's Creed Rogue", character: "Shay Cormac", content: "Shay Cormac is the black sheep of the Assassin Order. Once belonging to the colonial branch of the Brotherhood of Assassins, he turned against them and became their most famous enemy. A tragic series of events would leave Shay a changed man after witnessing an entire cities' destruction by his hand." },
  { id: 8, title: "Assassin's Creed Unity", character: "Arno Dorian", content: "Arno served as the main protagonist of Assassin's Creed Unity; he is a member of the French order of Assassins and was a prominent force during the French Revolution. Arno was orphaned after his father was murdered by Shay Cormac; growing up, he became rash and quick to immature temper." },
  { id: 9, title: "Assassin's Creed Syndicate", character: "Jacob & Evie Frye", content: "The twin assassins from Assassin's Creed: Syndicate share this spot. While both were great assassins in their own right, together, they were near unstoppable. Growing up on the hard streets of Crawley, Evie and Jacob Frye grew up violent and strong. Their prowess, ambition, and intelligence made them perfect members of Britain's Order of Assassins." },
  { id: 10, title: "Assassin's Creed Origins", character: "Bayek of Siwa", content: "Bayek of Siwa is one of the founding members of the Hidden Ones, second to Aya, his wife. Together, the pair set off on a path of blood and vengeance after the death of their son at the hands of the Order of the Ancients." },
  { id: 11, title: "Assassin's Creed Odyssey", character: "Kasandra/Alexios", content: "During the Peloponnesian War, Kassandra/Alexios (based on player choice) would find themselves immersed in a secret battle between a small band of warriors and a secret cult that sought to control all of Greece. Kassandra/Alexios are descendants of Leonidas, the great Spartan king but grew up orphaned after their sibling was sacrificed for the good of the Spartan people." },
  { id: 12, title: "Assassin's Creed Valhalla", character: "Eivor", content: "Eivor (who can played as either male or female) was a high-born noble who lost his/his parents during a raid by the wolf clan. Eivor was adopted by a Norwegian king by the name of Styrbjorn Sigvaldisson. Eivor was raised alongside the king's son and molded into a mighty warrior. Eivor would not immediately become entrenched in the way of the Brotherhood of Assassins until meeting with Basim and Hytham" },
]

export async function getStaticPaths() {
  const paths = reviews.map(review => {
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
  return {
    props: {
      review: reviews[id - 1]
    }
  }
}

function Review({ review }) {
  return (
    <div className={styles.card}>
      <h2>{review.title}</h2>
      <h4>{review.character}</h4>
      <p>{review.content}</p>
      <Link href={'/guides'}><a>Go back</a></Link>
    </div>
  )
}

export default Review