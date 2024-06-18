import type { NextPage } from 'next';
import * as React from 'react';
import { PrivacyPolicy } from '@src/components/atom';

const Page: NextPage = () => {
  return (
    <main>
      <title>
        MIMIC - Privacy Policy
      </title>
      <PrivacyPolicy />
    </main>
  );
};
export default Page;
