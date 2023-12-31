import RecipeList from "@/components/RecipeList";
import Image from "next/image";
import { getRecipes, getSingleProfile } from "root/sanity/sanity.query";
import { ProfileType, RecipeType } from "root/types";

type Props = {
  params: {
    profile: string;
  };
};

export default async function singleProfile({ params }: Props) {
  const recipes = await getRecipes();

  const id = params.profile;
  const { username, profileImage, shortBio, email }: ProfileType =
    await getSingleProfile(id);

  const filterRecipes = (array: RecipeType[]) => {
    return array.filter((el) =>
      el.profile.username.toLowerCase().includes(username.toLowerCase())
    );
  };

  const filtered = filterRecipes(recipes);

  return (
    <main>
      <div className="flex justify-around items-center m-4">
        <Image
          className="rounded-full object-cover h-32 w-32  bg-top z-10 border-black border-4 bg-black"
          src={profileImage.image}
          alt={profileImage.alt}
          height={150}
          width={150}
          quality={100}
        ></Image>
        <div className="z-0 flex items-center -ml-14 flex-1">
          <div className="bg-accent-2 h-auto pl-16 py-2 rounded-r-3xl text-sm flex-1">
            <h2 className="text-2xl mb-1">{username}</h2>
            <p className="mb-1">{shortBio}</p>
            <p>{email}</p>
          </div>
        </div>
      </div>
      <h1 className="text-center mb-4">
        Recipes made by <b>{username}</b>
      </h1>
      <div>
        <RecipeList recipes={filtered} hideUser />
      </div>
    </main>
  );
}
