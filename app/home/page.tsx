// import { redirect } from "next/navigation";
import RightContent from "@/components/home/right";
import LeftContent from "@/components/home/left";

export default async function ProtectedPage() {
  // const { data, error } = await supabase.auth.getUser();
  // if (error || !data?.user) {
  //   redirect("/auth/login");
  // }

  return (
    <div className=" flex gap-2 bg-slate-300 h-full">
      <div>
        <LeftContent></LeftContent>
      </div>
      <div className=" flex-1">
        <RightContent></RightContent>
      </div>
    </div>
  );
}
