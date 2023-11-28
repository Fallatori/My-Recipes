import Image from "next/image";
import Link from "next/link";
import { RecipeType } from "root/types";

interface Props {
  recipes: RecipeType[];
  hideUser?: boolean;
}

export default function RecipeList({ recipes, hideUser }: Props) {
  const getFormatedDate = (rawDate?: string) => {
    if (!rawDate) return "";
    return new Date(rawDate).toLocaleDateString("nb-NO");
  };

  return (
    <main className="max-w-7xl mx-auto  px-2 min min-h-screen md:px-4">
      <section className="grid grid-cols-2 mb-16 min-h-full gap-x-2 gap-y-6 md:grid-cols-3">
        {recipes &&
          recipes.map((data) => (
            <div key={data._id} className="lg:max-w-2xl max-w-2xl">
              <Link href={`/recipes/${data.slug}`}>
                {data.mainImage && (
                  <Image
                    className="rounded-2xl object-cover h-60 w-full  bg-top bg-[#1d1d20] mb-2"
                    src={data.mainImage.image}
                    width={150}
                    height={150}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={100}
                    alt={data.mainImage.alt}
                  />
                )}

                <h2 className="text-sm font-medium tracking-tight leading-tight min-w-full mb-1 md:text-lg md:font-bold">
                  {data.headline}
                </h2>
              </Link>
              {!hideUser && (
                <Link
                  href={`/profiles/${data.profile._id}`}
                  className="text-xs px-1 flex flex-row gap-1 items-center justify-between md:text-base text-accent-1"
                >
                  <div className="flex gap-2 items-center">
                    <Image
                      className="rounded-full h-5 w-5"
                      src={data.profile.profileImage.image}
                      width={20}
                      height={20}
                      alt={data.profile.profileImage.alt}
                    ></Image>
                    <p className="">{data.profile.username}</p>
                  </div>
                  <p className="">{getFormatedDate(data._updatedAt)}</p>
                </Link>
              )}
            </div>
          ))}
      </section>
    </main>
  );
}
