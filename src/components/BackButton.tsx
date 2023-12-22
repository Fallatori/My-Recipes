"use client";

import { useRouter } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";

export const BackButton = () => {
  const router = useRouter();
  return (
    <button type="button" onClick={() => router.back()}>
      <BiArrowBack className="h-12 w-12" />
    </button>
  );
};
