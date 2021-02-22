import React from 'react';
import Link from 'next/link';

const Index = () => (
  <div>
    Hello!
    <br />
    <Link href="/user">
      유저
    </Link>
  </div>
);

export default Index;
