import type { NextPage } from "next";
import * as React from "react";
import { TermsAndConditions } from "@src/components/atom";

const Page: NextPage = () => {
  return (
    <main>
      <title>
        MIMIC - Terms and Conditions
      </title>
      <TermsAndConditions />
    </main>
  );
};
export default Page;
