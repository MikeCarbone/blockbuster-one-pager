import Head from 'next/head'
import Link from 'next/link'

import {
  Box,
  Copy,
  Footer,
  Global,
  Header,
  Heading,
  Hero,
  Image,
  Wrapper,
  VertSpace
} from 'blockbuster-design-system'

const Section = props => (
  <>
    <VertSpace size={3} />
    {props.children}
    <VertSpace size={3} />
  </>
)

const AdSection = props => {
  if (props.imgRight) {
    return (
      <Section>
        <Box backgroundColor="var(--black)" display="flex" justifyContent="space-between" alignItems="center" flexWrap="no-wrap" flexDirection="var(--resp-flex-direction)">
          <Box backgroundColor="var(--black)" maxWidth="45%" margin="0 2rem 0 0" display="block" alignSelf="center" width="initial">
            <Heading size={2}>{props.title}</Heading>
            <Copy fontSize="var(--fontMed)" fontWeight="100" lineHeight="1.3">{props.copy}</Copy>
          </Box>
          <Image height="400px" width="40%" src={props.imgSrc} alt={props.imgAlt} objectFit="contain" />
        </Box>
      </Section>
    )
  } else {
    return (
      <Section>
        <Box backgroundColor="var(--black)" display="flex" justifyContent="space-between" alignItems="center" flexWrap="no-wrap" flexDirection="var(--resp-flex-direction)">
          <Image height="400px" width="40%" src={props.imgSrc} alt={props.imgAlt}  objectFit="contain"/>
          <Box backgroundColor="var(--black)" maxWidth="45%" margin="0 0 0 2rem" display="block" alignSelf="center" width="initial">
            <Heading size={2}>{props.title}</Heading>
            <Copy fontSize="var(--fontMed)" fontWeight="100" lineHeight="1.3">{props.copy}</Copy>
          </Box>
        </Box>
      </Section>
    )
  }
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Blockbuster Streaming -- Buy Now</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&family=Roboto:wght@100;300;400&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <Global />
        <Header
          buttonText="Log In"
          buttonLink="/page"
          linkWrapper={Link}
          logo="./images/logo.png"
          alt="Blockbuster"
        />
        <Hero
          imgSrc="https://occ-0-92-1723.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABclozqDKJM1ljO5Lcmravlkh2J_VvKsVdyTKuKg_iZxpGyjIDVu_RF4-02JaMba_mk6w4nuf4lrhInWpKH7_nakm1J3D.jpg?r=189"
          alt="Knives out movie screenshot."
          title="Blockbuster's back to the future."
          subtitle="All your favorite movies in one place."
          buttonText="Subscribe now"
          buttonLink="/page"
          linkWrapper={Link}
          height="700px"
        />
        <Box backgroundColor="var(--black)">
          <Wrapper padding="2rem 0">
            <AdSection
              imgRight
              title="Unlimited movies. Instant access."
              copy="Watch anywhere, any time. Sign up today and receive a bag of popcorn, on us."
              imgSrc="./images/phone2.png"
              imgAlt="Video on a phone"
            />
            <AdSection
              title="Watch anywhere and stay up to date, on the go"
              copy="Watch anywhere, any time. Sign up today and receive a bag of popcorn, on us."
              imgSrc="./images/knivesout1.jpg"
              imgAlt="Knives Out"
            />
            <AdSection
              imgRight
              title="Connect & stream directly to your TV"
              copy="Watch anywhere, any time. Sign up today and receive a bag of popcorn, on us."
              imgSrc="./images/tv1.png"
              imgAlt="Peaky Blinders playing on a TV"
            />
          </Wrapper>
        </Box>
      </main>
      <Footer linkWrapper={Link} />
      
      <style jsx>{``}</style>
    </>
  )
}
