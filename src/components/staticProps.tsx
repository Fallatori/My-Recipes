"use client";

import { getRecipes } from "root/sanity/sanity.query";

export async function getStaticProps() {
  const recipe = await getRecipes();
  return {
    props: {
      recipe: recipe,
    },
  };
}
