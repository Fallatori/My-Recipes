"use client";

import { NextStudio } from "next-sanity/studio";
import config from "root/sanity.config";

export default function Studio() {
  return <NextStudio config={config} />;
}