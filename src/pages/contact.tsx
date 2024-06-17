import { Contact, CTA } from "@src/components/atom";
import type { NextPage } from "next";
import * as React from "react";

const Page: NextPage = () => {
  return (
    <main className="pt-32 flex flex-col space-y-16">
      <Contact />
      <CTA />
    </main>
  );
};
export default Page;
