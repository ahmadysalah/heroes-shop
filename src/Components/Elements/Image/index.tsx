import { Image } from "./style";

interface IProps {
  src: string;
  alt: string;
}
// Logo takes two props title and
const Index = ({ src, alt }: IProps) => {
  return (
      <Image src={src} alt={alt} />
    // <Logo to="/">
    //   <Main>{main}</Main>
    //   <Sup>{sub}</Sup>
    // </Logo>
  );
};

export default Index;
