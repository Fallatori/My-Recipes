import Image from "next/image";
import Link from "next/link";
import { getProfiles } from "root/sanity/sanity.query";

export default async function Profiles() {
  const profiles = await getProfiles();

  return (
    <main className="mx-auto min min-h-screen">
      <section className="mb-16 min-h-full">
        {profiles.map(({ profileImage, _id, username, shortBio }) => (
          <Link
            key={_id}
            href={`/profiles/${_id}`}
            className="flex border-b border-zinc-600 items-center py-4 px-2 w-full md:px-12 hover:bg-hov/10"
          >
            <Image
              className="rounded-2xl object-cover h-40 w-32  bg-top bg-[#1d1d20]"
              src={profileImage?.image}
              alt={profileImage?.alt}
              height={150}
              width={150}
              quality={100}
            ></Image>
            <div className="font-medium tracking-tight px-4">
              <h2 className="text-xl">{username}</h2>
              <p className="text-accent-1 text-sm">{shortBio}</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
