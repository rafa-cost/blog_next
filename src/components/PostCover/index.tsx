import { Container } from './styled';

export type PostCoverProps = {
  coverUrl: string;
  alt: string;
};
                                                                           //ver a questão se da para diminuir a imagem do post
export const PostCover = ({ coverUrl, alt }: PostCoverProps) => {
  return <Container src={coverUrl} alt={alt} />;
};
