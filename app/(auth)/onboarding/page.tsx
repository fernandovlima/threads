import { AccountProfile } from "@/components/forms/AccountProfile";
import { currentUser } from "@clerk/nextjs";
import { fetchUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

export default async function OnboardingPage() {
  const user = await currentUser();
  if (!user) return null;

  const userInformation = await fetchUser(user.id);
  //if already onboarded, redirect to home
  if (userInformation?.onboarded) redirect("/");

  const userData = {
    id: user?.id,
    objectId: userInformation?._id || "",
    username: userInformation?.username || user?.username,
    name: userInformation?.name || user?.firstName,
    bio: userInformation?.bio || "",
    image: userInformation?.image || user?.imageUrl,
  };

  return (
    <main
      className={"mx-auto flex max-w-3xl flex-col justify-start px-10 py-20"}
    >
      <h1 className={"head-text"}>Onboarding</h1>
      <p className={"mt-3 text-base-regular text-slate-200"}>
        Complete your profile to get started with Threads.
      </p>

      <section className={"mt-10 bg-slate-800 p-6 rounded"}>
        <AccountProfile user={userData} btnText={"Continue"} />
      </section>
    </main>
  );
}
