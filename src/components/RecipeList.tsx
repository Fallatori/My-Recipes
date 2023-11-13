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
    <main className="max-w-7xl mx-auto lg:px-16 px-2 min min-h-screen">
      <section className="grid grid-cols-2 mb-16 min-h-full gap-x-2 gap-y-6">
        {recipes &&
          recipes.map((data) => (
            <Link
              key={data._id}
              href={`/recipes/${data.slug}`}
              className="lg:max-w-2xl max-w-2xl"
            >
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
              <div className="px-2">
                <h2 className="text-sm font-medium tracking-tight leading-tight min-w-full mb-1">
                  {data.headline}
                </h2>
                {!hideUser && (
                  <div className="text-xs px-1 flex flex-row gap-1 items-center justify-between">
                    <div className="flex gap-2 items-center">
                      <Image
                        className="rounded-full h-5 w-5"
                        src={data.profile.profileImage.image}
                        width={20}
                        height={20}
                        alt={data.profile.profileImage.alt}
                      ></Image>
                      <p className="text-gray-500">{data.profile.username}</p>
                    </div>
                    <p>{getFormatedDate(data._updatedAt)}</p>
                  </div>
                )}
              </div>
            </Link>
          ))}
      </section>
    </main>
  );
}
