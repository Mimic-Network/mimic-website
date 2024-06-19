import { type ClassValue, clsx } from "clsx";
import { addRequestMeta } from "next/dist/server/request-meta";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface UserDetail {
  name: string;
  phone_number: string;
  email: string;
  features: Array<string>;
}
interface ContactDetail {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const addDetailsToWaitList = async (body: UserDetail) => {
  try {
    const BASE_URL =
      "https://script.google.com/macros/s/AKfycbx_oRiOQ_QE2UeCO-VOD3i8pvGYZeW094ngqNutSNFO00HRBBbYGHKcCgF8vrxN6-XaPQ/exec";

    const request = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
      body: JSON.stringify(body),
    });
    if (!request.ok) {
      return;
    }
    return;
  } catch (e) {
    return;
  }
};
export const addDetailsToContact = async (body: ContactDetail) => {
  try {
    const BASE_URL =
      "https://script.google.com/macros/s/AKfycbytmFqstHbIXPM3R3TY_d1Rix3qdn-AX7SZFsACLKw3i3fY4FC5mP_lmLWnPKPkRxrv/exec";

    const request = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
      body: JSON.stringify(body),
    });
    if (!request.ok) {
      return;
    }
    return;
  } catch (e) {
    return;
  }
};
