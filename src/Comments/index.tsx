import { DiscussionEmbed } from 'disqus-react';
import { Container } from './styled';
import { SITE_URL } from '@/config/app-config';

export type CommentsProps = {
  slug: string;
  title: string;
};

export const Comments = ({ slug, title }: CommentsProps) => {
  return (
    <Container>
      <DiscussionEmbed
        shortname="nextblog-8"
        config={{
          url: `http://localhost:1337/api/post/${slug}`,
          identifier: slug,
          title: title,
          language: 'pt-BR',
        }}
      />
    </Container>
  );
};
