import Image from "next/image";
import Link from "next/link";
import { getProfiles } from "root/sanity/sanity.query";

export default async function Profiles() {
  const profiles = await getProfiles();

  return (
    <main className="max-w-7xl mx-auto lg:px-16 px-2 min min-h-screen">
      <section className="grid grid-cols-2 mb-16 min-h-full gap-x-2 gap-y-6">
        {profiles.map(({ profileImage, _id, username }) => (
          <Link
            key={_id}
            href={`/profile/${_id}`}
            className="lg:max-w-2xl max-w-2xl"
          >
            <Image
              className="rounded-2xl object-cover h-60 w-full  bg-top bg-[#1d1d20] mb-2"
              src={profileImage.image}
              alt={profileImage.alt}
              height={150}
              width={150}
            ></Image>
            <h2 className="text-base font-medium tracking-tight leading-tight text-center px-1 mb-1">
              {username}
            </h2>
          </Link>
        ))}
      </section>
    </main>
  );
}
