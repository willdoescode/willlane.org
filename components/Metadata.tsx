import type { NextPage } from 'next';
import Head from 'next/head';

interface MetadataProps {
  title: string;
  description: string;
  image_url: string;
}

const Metadata: NextPage<MetadataProps> = ({
  title,
  description,
  image_url
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:site_name" content="William Lane" />
      <meta property="og:url" content="https://www.willlane.org" />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta name="twitter:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image_url} />
    </Head>
  );
}

export default Metadata;
