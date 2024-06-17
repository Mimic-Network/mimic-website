import { CTA, FAQ } from "@src/components/atom";
import type { NextPage } from "next";
import * as React from "react";

const Page: NextPage = () => {
  return (
    <main className="pt-48 flex flex-col space-y-12">
      <FAQ />
      <CTA />
    </main>
  );
};
export default Page;
