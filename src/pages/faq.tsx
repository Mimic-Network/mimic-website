import { CTA, FAQ } from "@src/components/atom";
import type { NextPage } from "next";
import * as React from "react";

const Page: NextPage = () => {
  return (
    <main className="md:pt-48 pt-32 flex flex-col space-y-12">
      <title>
        MIMIC - FAQ
      </title>
      <FAQ />
      <CTA />
    </main>
  );
};
export default Page;
