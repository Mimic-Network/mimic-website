import { CTA, Features } from '@src/components/atom';
import type { NextPage } from 'next';
import * as React from 'react';

const Page: NextPage = () => {
  return (
    <main className="pt-28 bg-primary-900/5">
      <Features hideBg />
      <CTA />
    </main>
  );
};
export default Page;
