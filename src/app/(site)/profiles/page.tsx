import Image from "next/image";
import Link from "next/link";
import { getProfiles } from "root/sanity/sanity.query";

export default async function Profiles() {
  const profiles = await getProfiles();

  return (
    <main className="max-w-7xl mx-auto lg:px-16 min min-h-screen mt-2">
      <section className="mb-16 min-h-full gap-x-2 gap-y-6">
        {profiles.map(({ profileImage, _id, username, shortBio }) => (
          <Link
            key={_id}
            href={`/profiles/${_id}`}
            className="flex max-w-2xl border-b border-zinc-600 my-2 items-center px-2"
          >
            <Image
              className="rounded-2xl object-cover h-40 w-32  bg-top bg-[#1d1d20] mb-2"
              src={profileImage.image}
              alt={profileImage.alt}
              height={150}
              width={150}
              quality={100}
            ></Image>
            <div className="font-medium tracking-tight px-4">
              <h2 className="text-xl">{username}</h2>
              <p className="text-black text-opacity-60 text-sm">{shortBio}</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
