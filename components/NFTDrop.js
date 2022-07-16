import tw from "tailwind-styled-components";
import { useNFTDrop, ThirdwebNftMedia, useNFTs } from "@thirdweb-dev/react";

const View = () => {
  const nftDrop = useNFTDrop("0xf9AA4dccaC356f7eBB5F07A3b4Ece60F8119a219");
  const {data: nfts} = useNFTs(nftDrop)


return (
    <Container>
      <TitleContainer>
        <Title>
          {nft.metadata.name}
        </Title>
      </TitleContainer>
      <DescriptionContainer>
        {nft.metadata.description}
      </DescriptionContainer>
    </Container>
  )
}

export default nftDrop
  
  
const Container = tw.div`
 flex
 flex-col
 items-center
`

const TitleContainer = tw.div`
 text-white
 flex
`

const DescriptionContainer = tw.div`
 flex
 max-w-screen-lg
 justify-center
 text-center
 text-lg
 font-bold
`

const Title = tw.h2`
 uppercase
 text-3xl
 italic
 font-bold
 mt-3
`