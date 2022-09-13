import Link from 'next/link'
import styles from '../../styles/Guides.module.css'
import Image from 'next/image'

const reviews = [
  { 
    id: 1, 
    title: "Assassin's Creed", 
    character: "Altaïr Ibn-La'Ahad", 
    firstContent: "Assassin's Creed could easily have been one of the best games of 2007. It is, without question, impressive on several fronts. But developer Ubisoft Montreal took some missteps along the way and squandered the immense potential of its pseudo-stealth action title. A bad story, repetitive gameplay elements, and poor AI lead to the downfall of one of the more promising games in recent memory. Assassin's Creed could have been one of the great games of this generation. Instead, it turned into just another action title.",
    secondContent: "You play as Altair, a member of the Hashshashin (or Assassins), a real-life group that performed politically-motivated murders between the 11th and 13th centuries. Set in the Middle East during the third crusade, Assassin's Creed is steeped in historical fact. Each of the three main cities was well-researched and beautifully recreated. The nine men Altair is charged with dispatching did, in fact, all die or disappear around the time the game takes place. The attention paid to creating an accurate representation of Jerusalem, Acre, and Damascus is commendable. Were it not for the anomalies that flitter around characters, you would have little reason to ever question that this is indeed what these cities and people looked like centuries ago.",
    thirdContent: "Each of the three major cities is broken into three sections: poor, middle-class, and rich. That's nine sections for nine assassinations. As standard videogame operating procedures dictate, a new section of a city is opened when you receive orders for a new assassination target. When you have all sections of a city unlocked, you can appreciate the best aspect of Assassin's Creed: vertical exploration. The lengthy load times for levels (upwards of five minutes at some points) is forgivable considering that once in game you can run from one end of Jerusalem to the other and from depths of the darkest alley to the tip-top of the highest building.",
    firstImage: "/assassins-creed-2.jpg",
    secondImage: "/assassins-creed-1.jpg"
},
{ 
    id: 2, 
    title: "Assassin's Creed II", 
    character: "Ezio Auditore da Firenze", 
    firstContent: "Assassin's Creed II is the follow-up to Ubisoft's 2007 hit that attracted a mass audience if not unanimous critical acclaim. The sequel is an expansive and bloody romp through Renaissance Italy that plays up every popular aspect of the first installment while righting many of its flaws. Assassin's Creed II has evolved from an ill-defined action game into a fully featured open world experience. Everything from the new monetary system to the ability to buy armor and weapons makes it a richer, and ultimately more satisfying game than its predecessor.",
    secondContent: "The plot of Assassin's Creed pulls together a bit of The Matrix, a lot of historical fiction, and throws in elements of the madcap conspiracy theories found in a Dan Brown novel. The series also has the benefit of being crafted by some of the most talented hands in game development. With only a handful of exceptions, the environments, animations, and art are beautifully portrayed. In addition to its good looks, the sequel's gameplay builds so much upon the foundations of the first game, that in retrospect, the first Assassin's Creed looks like little more than a technical demonstration.",
    thirdContent: "Both fans and detractors of Assassin's Creed will be pleased to know that the sequel fully addresses and ties up many of the loose ends from the last game. It picks up exactly where we left off, with the kidnapped bartender Desmond locked in his cell at Abstergo. This corporation is the modern-day face of the Templars and they're after Desmond's valuable genetic memories. The magic of modern technology allows Desmond to relive the exploits of his Assassin ancestors. His genealogy puts him at the center of a war between the Templars and Assassins.",
    firstImage: "/assassins-creed2-1.jpg",
    secondImage: "/assassins-creed2-2.jpg"
},
{ 
    id: 3, 
    title: "Assassin's Creed: Brotherhood", 
    character: "Ezio Auditore da Firenze", 
    firstContent: "Ubisoft Montreal has stressed that Brotherhood has a number of innovations and evolutions designed to keep the experience fresh, and we can certainly tell you that there's easily as much content here as in Assassin's Creed II, but will it be enough to really help this title distinguish itself from last year's stellar outing? Let's find out.",
    secondContent: "After confronting Rodrigo Borgia and having his mind blown far beneath the Vatican at the end of Assassin's Creed II (and no, that's not a euphemism), the story picks up with Ezio ready for some well-earned R&R. It's not to be. Cesare Borgia – Rodrigo Borgia's son – is ticked off, and mounts a full scale attack on the assassins. The villa in Monteriggioni is destroyed and Ezio loses everything. Yes, after 20+ hours working towards all that bad-ass armour and weaponry, it's lost in a moment and players must begin again. Such is the fickle nature of videogames.",
    thirdContent: "In any case, Ezio travels to Rome determined to take his revenge against Cesare. The city is divided into 12 districts, each of which is overseen by a Borgia tower, representing the Borgia's control of the area. As long as the tower stands, soldiers are out in force, shops remain closed and the people oppressed. Assassinate the tower's Captain and burn it to the ground, however, and the area will open up for business. Ezio is then able to renovate blacksmiths, banks, stables and more, and these all add to his income, in much the same way renovating Monteriggioni did in the last game. The more shops that are open, the more items will be available and perks Ezio will get. For instance, the more tailors you have, the more pouches for carrying knives and other items will be available, whereas the more banks are open the more money Ezio can store before his account is full. Each defeated tower also opens up an assassin apprentice slot, but more on that later.",
    firstImage: "/assassins-creed-brotherhood-1.jpg",
    secondImage: "/assassins-creed-brotherhood-2.jpg"
},
{ 
    id: 4, 
    title: "Assassin's Creed: Revelations", 
    character: "Ezio Auditore da Firenze/Altaïr Ibn-La'Ahad", 
    firstContent: "Assassin's Creed Revelations marks the end of two eras as it explores the final adventures of Ezio Auditore and Altair Ibn-La'Ahad. Ubisoft's ambitious conclusion to a four game narrative manages to be the best chapter in the Assassin's Creed franchise despite suffering from some familiar problems. Witnessing Ezio and Altair come to grips with the lives they've lived is a remarkable sight, easily worth one more trip to a world we've experienced for several years.",
    secondContent: "On a basic level, Revelations functions much like the Assassin's Creed games that came before. You're still accepting various missions that task you with chasing, stalking, meeting or killing certain targets. The curse of the franchise has always been that it seems to fill your time with missions that are completely irrelevant to the larger story. Ubisoft more or less avoids that trap this time, mostly because its plot has so many layers. Still, expect a handful of quests that feel a bit too superfluous or are poorly constructed. The game's introduction suffers particularly from some very awkward parameters, setting an odd tone for its opening hours.",
    thirdContent: "The most thrilling moments of the game come when Ezio discovers clues about the keys to Altair's library. It's here where the series' infamous dungeon sequences come into play. Much like the Lairs of Romulus or Assassin's Tombs, these epic excavations take you on wild rides that would feel perfectly at home in Uncharted. At times a journey through damp caves and at other times epic chases alongside rivers, each of these segments are simply fantastic, and are the highlights of the entire game.",
    firstImage: "/assassins-creed-revelations-1.jpg",
    secondImage: "/assassins-creed-revelations-2.jpg"
},
{ 
    id: 5, 
    title: "Assassin's Creed III", 
    character: "Connor (Ratohnhake:ton)", 
    firstContent: "Where the storyline missions usually follow a pattern of gathering information, stalking and eventually killing a high-profile target (with the odd naval mission or large-scale battle thrown in for variety), outside of that you're free to do whatever you want: hunt for trinkets, clamber over the rooftops of New York in search of almanac pages, or pick fights with the Redcoats on behalf of the populace. There is a vast amount of content in this game, from liberating Boston and New York to building up a homestead on the frontier to sailing the high seas to just enjoying the outdoors and hunting wildlife. But perhaps because Assassin's Creed III is so huge, it can be pretty inconsistent. It attempts an astonishing amount, and doesn’t always succeed.",
    secondContent: "Assassin's Creed III follows hot-tempered Native American assassin Connor for almost his entire life, starting as a tree-climbing kid and growing from troubled young man to vengeful adult – but without wanting to spoil anything, he's not the only character you'll play. Connor's path often intersects with key moments in the American Revolution, putting him in the middle of the Battle of Bunker Hill for one spectacular mission. He finds himself fighting on the side of the Patriots for most of the game, but because he has enemies on both sides, his motivations for doing so has little to do with their battle for independence from the British crown.",
    thirdContent: "Connor isn't as straightforwardly charming as Assassin's Creed II's Ezio, and although writing is excellent for the most part, you never warm to Assassin’s Creed III’s heroes nor grow to resent its villains in quite the same way. It’s impossible to discuss exactly why this is without spoiling something of the game’s plot - which you definitely don’t want, as there are some great moments here. There will doubtless be a lot of discussion around this after the game makes its way into players’ hands, but what it really comes down to is that Connor often feels more like an errand boy than a freedom fighter; within the missions, Assassin’s Creed III can feel very scripted and dictatorial, fettering you with rigid objectives and punishing you harshly when you step outside their boundaries – chase sequences are particularly infuriating on this front. The game is often at its best outside of the story, when it leaves you to enjoy and inhabit its world.",
    firstImage: "/assassins-creed3-1.jpg",
    secondImage: "/assassins-creed3-2.jpg"
},
{ 
    id: 6, 
    title: "Assassin's Creed IV: Black Flag", 
    character: "Edward Kenway", 
    firstContent: "Assassin’s Creed IV: Black Flag is a smart, sprawling sequel that wisely places an emphasis on freedom and fun while trimming most of the fat that bogged down Assassin’s Creed III’s ambitious but uneven adventure. Ubisoft’s take on the Golden Age of Piracy begins in 1715, and is presented with a much-appreciated lighter tone that isn’t afraid to make fun of itself in the name of an entertaining journey.",
    secondContent: "Sailing across the massive expanse of The Caribbean, exploring gorgeous and unique islands, and getting yourself into all sorts of swashbuckling trouble provide some of the most rewarding and memorable stretches of gameplay I’ve experienced all year. Even after putting in well over 50 hours with the Xbox 360, Xbox One, Wii U, PC, PlayStation 3, and PlayStation 4 versions, I’m still discovering new islands to explore and tombs to raid.",
    thirdContent: "The freedom to tell your own stories also exists in the multiplayer mode, which, once again, refines the unique cat-and-mouse gameplay originally introduced in Assassin’s Creed: Brotherhood. Having to blend into your surroundings and try to trick other players into thinking you're an A.I.-controlled NPC provides ample moments of tense and entertaining mayhem. Just like previous versions, it’s a welcome alternative to the standard deathmatch that's become the norm in most multiplayer games, but it’s not substantial enough to be the main reason to keep coming back to Black Flag.",
    firstImage: "/assassins-creed4-1.jpg",
    secondImage: "/assassins-creed4-2.jpg"
},
{ 
    id: 7, 
    title: "Assassin's Creed: Rogue", 
    character: "Shay Cormac", 
    firstContent: "History has always played a pivotal role in the Assassin’s Creed series. It serves as both inspiration and backdrop – a resource for dramatic events, supporting characters, and villains. Rogue is slightly different, though; it’s more concerned with examining the history of the series itself than exploring real-life events. The result is one of the most striking and intriguing stories seen in an Assassin's Creed game, but forgettable missions, an empty world, and lack of effort to put a new spin on how this long-running series plays and controls continually undermine its dramatic intentions.",
    secondContent: "Rogue’s greatest strength is its central character – Shay Patrick Cormac – and his journey from dutiful Assassin to vengeful Templar. Most of the trailers surrounding Rogue have portrayed Shay as a cold-blooded killer, but that’s in no way accurate; his story is nuanced, and the narrative is patiently unfolded. You play the first third or so of Rogue as an Assassin, which lets you forge relationships with those you will later hunt. There’s a good chunk of the 14-hour campaign where Shay doesn’t have any clear allegiances, and even then, he never really descends into brutal killer territory. There’s always a sympathetic motivation to be found; it’s all much more nuanced and ambiguous than I was expecting, and it makes for the most engaging story in an Assassin’s Creed game since the days of Ezio Auditore da Firenze.",
    thirdContent: "Rogue also attempts to transfer the crisis of faith Shay experiences to us, and for me it worked. Familiar faces and locations from each of the past Assassin's Creed games are thrown up and put in some sort of order, but the perspective of those events we know is either changed or challenged. Shay isn’t a villain; he’s an individual, who questions orders and suspects inherited truths, and for the first time in the series we are encouraged to do the same. Rogue is great because it does away with the idea of black-and-white villains at all.",
    firstImage: "/assassins-creed-rogue-1.jpg",
    secondImage: "/assassins-creed-rogue-2.jpg"
},
{ 
    id: 8, 
    title: "Assassin's Creed: Unity", 
    character: "Arno Dorian", 
    firstContent: "Assassin’s Creed Unity is a game of impossible peaks and disappointing valleys. Its highs of movement, customization options, and just the city of Paris itself pierce the sky like the spire of Notre Dame. On a purely technical level, Unity is a marvel to walk through and admire. But at the same time, a lot of my journey through the French Revolution felt as cold and heartless as the darkest depths of the catacombs. I was never given a real reason to care about new Assassin Arno, or the events that transpired. Instead, I had to find my own fun throughout my 30 hours in Unity, which was generally easy to do in its large sandbox assassination scenarios. However, it’s a bit disappointing to see how few of the long-standing problems with the series have been solved by the upgrade to the new generation of gaming hardware.",
    secondContent: "Despite being technologically impressive and adding a lot to the atmosphere of Paris as a living and thriving city, I found myself oftentimes swearing at the digital hoards that populated the streets when I simply wanted to make my way from one place to another. As the story progressed, I found that the masses of Parisians mostly got in the way, and spotting repeating character models was a crude reminder I was playing a video game.",
    thirdContent: "The disgruntled masses make it even more of a necessity to scurry along rooftops instead of the streets, and thankfully, this mode of transportation does not disappoint. Most of the time, traversal in Unity feels better than ever thanks to fantastic animations, buildings with plenty of climbable paths, and a new downward parkour system that adds certain finesse to the act of shimming down a wall, resolving one of my big gripes with previous AC games. (Unless there was a haystack handy, I usually just lept off and hoped that I had enough health to survive.)",
    firstImage: "/assassins-creed-unity-1.jpg",
    secondImage: "/assassins-creed-unity-2.jpg"
},
{ 
    id: 9, 
    title: "Assassin's Creed: Syndicate", 
    character: "Jacob & Eve Frye", 
    firstContent: "Syndicate smartly negotiates this internal conflict by dramatising it in the form of its twin playable characters, Evie and Jacob Frye. The former is a devout Assassin, intent on stopping the Templars by tracking down the remaining pieces of Eden. Her brother Jacob, however, is a pragmatist – a social reformer who rails against the Assassin’s burdensome legacy and wishes to help his city in more immediate ways, seemingly embodying my desire to move on from the tangled mysticism. They’re both extremely likeable, well-drawn protagonists, and the interaction between the two is laced with a lively sibling rivalry that brings levity to otherwise-earnest cutscenes. But their contrasting worldviews have the greatest positive impact on Syndicate’s structure, which is both engaging and meaningful.",
    secondContent: "You can freely switch between Jacob and Evie at most points, with side missions and open-world activities open equally to both. Campaign missions, however, are different, with Jacob taking the lead in the majority of the core assassinations. This is frustrating, especially since Evie is pitched as the more stealthy of the pair. But I soon realised that Syndicate is just not that interested in exploring forgotten tombs in search of dusty relics; it wants to liberate the great city of London from its terrible oppressors. And to be blunt, Syndicate’s a much better experience for identifying more closely with the goals of Jacob.",
    thirdContent: "Despite being sidelined so often, Evie comes across as the more nuanced character, struggling with her sense of duty, where Jacob is a more straightforward bloke with clear goals. By the end of the 20-hour campaign, I felt like I’d probably spent more time with Evie due to prefering her in side missions, and I certainly knew her better. She sees the bigger picture, with her missions tackling problems Jacob can’t even comprehend. Evie also stars in my favourite assassination mission – a nighttime infiltration of the Tower of London.",
    firstImage: "/assassins-creed-syndicate-1.jpg",
    secondImage: "/assassins-creed-syndicate-2.jpg"
},
{ 
    id: 10, 
    title: "Assassin's Creed: Origins", 
    character: "Bayek of Siwa", 
    firstContent: "Assassin’s Creed Origins is a dark, multifaceted, deep dive into one of the series’ most alluring settings yet: ancient Egypt. As Bayek of Siwa, who is simultaneously compassionate, bold, and driven by revenge, you’re strung through a twisted story of pharaohs and corrupt leaders, of love gained and lost, and the plights of the lower class in a time when they were routinely worked to death and nobody batted an eye. It’s a tense journey that challenges your concepts of right and wrong, making you consider the morality of those you kill in the process – and, in a dramatic shift for the series, it’s all part of a full-on roleplaying game.",
    secondContent: "While the main story is delightfully mystical and elaborate on its own, Origins also has some of the strongest actual mission design I’ve encountered in the entire 10-game series – and maybe in any open-world RPG. From collecting clues to solve mysteries, to chariot racing and gladiatorial arena fighting, to chasing down leads and assassinating high-level enemies hidden in fortresses, to Black Flag-style ship-to-ship combat, I was pleasantly surprised by how each of them felt like a self-contained short, well-paced story. Another highlight is the series of hidden temples, which – without spoiling anything – tie into Assassin’s Creed’s overarching sci-fi story, among other things. They are distinct from every other tomb you’ll find in ancient Egypt, and even include some throwbacks to the fan-favorite, timing-based platforming puzzles introduced way back in Assassin’s Creed 2. I rarely felt like I was doing too much of any one thing.",
    thirdContent: "While unlocking new abilities and story missions generally happens at a smooth pace, there is quite a lot of ‘grinding’ to be done in Origins. This happened to me when the recommended level for a new main quest mission appeared as several levels above where I was when I first unlocked it – a difference that can render enemies all but unkillable. That’s usually no big deal, since Origins is flush with side activities that can help you make up the difference, but on two separate occasions, I couldn’t find any side quests at my level. That meant I had to go for much lower-level quests for small rewards, which stretched out the process uncomfortably. If you do urgently want to get to the next story event – as I did at one point towards the very end of the story – this stymied progress can be a little frustrating.",
    firstImage: "/assassins-creed-origins-1.jpg",
    secondImage: "/assassins-creed-origins-2.jpg"
},
{ 
    id: 11, 
    title: "Assassin's Creed: Odyssey", 
    character: "Kasandra / Alexios", 
    firstContent: "Assassin’s Creed Odyssey begins more than 2,400 years ago at the onset of the Peloponnesian war: a decades-long struggle between Athens and Sparta for dominion over the ancient Greek world. It’s a fitting period to explore that’s rife with social and political intrigue, full-scale warfare on land and sea, and a tangible air of myth and legend. And after an astonishing 60-plus hours of galloping, sailing, and slicing through that historical-fiction sandbox, it’s easy to see why it was worth fighting so hard over.",
    secondContent: "For the first time in an Assassin’s Creed game we get a choice of whether to play exclusively as a man or a woman: siblings Alexios and Kassandra. True, as far as the story’s concerned they’re effectively the same character, but even though they’re superficial there are some meaningful differences. Namely, Kassandra’s voice acting is generally more consistently well done than that of her brother.",
    thirdContent: "For that matter, accents and voice delivery throughout Odyssey are hit or miss, usually falling somewhere between good and outright scenery-chewing, especially when it comes to no-name NPCs who sound like someone who’d watched My Big Fat Greek Wedding once before being asked to do an impersonation. But the facial animation of the marquee characters is superb, and you can sense the subtle disgust or confusion on the face of Alexios or Kassandra without them having to say a word.",
    firstImage: "/assassins-creed-odyssey-1.jpg",
    secondImage: "/assassins-creed-odyssey-2.jpg"
},
{ 
    id: 12, 
    title: "Assassin's Creed: Valhalla", 
    character: "Eivor", 
    firstContent: "Like Assassin’s Creed Odyssey and Origins before it, Assassin’s Creed Valhalla continues the series trajectory into a full-fledged open-world RPG. Though Ubisoft has dug up some of its stealth-action roots to make that style more appealing, Valhalla’s focus is on the absolutely massive recreation of Dark Ages England, brought to life with stunning beauty and a level of detail I’ve rarely seen. It’s been an impressive showcase for the Xbox Series X (and presumably the PlayStation 5, but Ubisoft only gave us access to the Xbox version ahead of launch), playing in 4K and a near-constant 60 frames per second. You have to put up with some new progression system ideas that don’t quite deliver, and an abundance of bugs, but there’s a staggering number of things to do, explore, and discover in and around Valhalla’s more atmospheric storytelling.",
    secondContent: "Assassin’s Creed Valhalla’s story follows Eivor, a male or female Norse Viking who grows up with a chip on their shoulder and vengeance in their heart after some particularly dastardly events in the opening cinematic. From those starting moments, the table is set and soon you and your brother Sigurd are off on a grand adventure to England, a land ripe with wealth and glory, and already well-integrated with Danes and Norse from years of Viking invasion and conquest. That sets the stage for your arrival in England as you settle the land and forge alliances to protect and expand your fledgling homestead against the chaos and political dust storm of warring factions across England’s four kingdoms: Mercia, East Anglia, Northumbria, and Wessex.",
    thirdContent: "The last time Assassin’s Creed tried letting us choose to play as a male or female protagonist the results were hit or miss, especially on the male side. Here, however, the performances of both the male and female versions of Eivor are admirable, though some accents drift a bit. (At one point I could’ve sworn female Eivor made a stop in Boston from the way she crushed the word “harbor,” but quickly enough it was back to Norse normal.) These brief moments are absolutely the exception to the otherwise steady and earnest delivery throughout, which is also true of most of the main characters. Outside the main cast, though some random NPCs can be a little… much. But special mention goes out to Sigurd, who channels fiery intensity and flirts with crazy in his performances, and that performance is accentuated by fascinating facial expressions that often lean uncomfortably close to the latter.",
    firstImage: "/assassins-creed-valhalla-1.jpg",
    secondImage: "/assassins-creed-valhalla-2.jpg"
},
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
    <div className={styles.guide}>
            <h1 className={styles.title}>{review.title}</h1>
            <h3 className={styles.character}>{review.character}</h3>
            <p className={styles.content}>{review.firstContent}</p>
            <Image src={review.firstImage} height={380} width={550} className={styles.image} />
            <p className={styles.content}>{review.secondContent}</p>
            <Image src={review.secondImage} height={380} width={550} className={styles.image} />
            <p className={styles.content}>{review.thirdContent}</p>
            <br />
            <Link href={`/`}><a class={styles.link}>Home</a></Link>
        </div>
  )
}

export default Review