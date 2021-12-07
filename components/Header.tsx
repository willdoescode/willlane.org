import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import Metadata from './Metadata';
import Navbar from './Navbar';

const Header: NextPage<Record<string, string>> = ({description}) => {
  const router = useRouter();

  return (
    <>
      <Metadata 
        title={`William Lane - ${router.asPath}`} 
        description={description} 
        image_url="" 
      />
      <Navbar />
    </>
  );
}

export default Header;
