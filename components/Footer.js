import tw from "tailwind-styled-components";

const Footer = () => {
  return (
    <Container>
      <FooterContainer>
      Sign up with <a href="https://www.premint.xyz/livethelifetv/" target="_blank" rel="noreferrer"> PreMint </a> to join the AllowList Crew. © 2022 Degen Vibes LLC.
      </FooterContainer>
    </Container>    
  )
}

export default Footer

const FooterContainer = tw.div`
 max-w-screen-lg
 w-full
`

const Container = tw.div`
 flex
 justify-center
 my-5
 text-center
`
