import { Image } from "./style";

interface IProps {
  src: string;
  alt: string;
}
// Logo takes two props title and
const Index = ({ src, alt }: IProps) => {
  return <Image src={src} alt={alt} />;
};

export default Index;
