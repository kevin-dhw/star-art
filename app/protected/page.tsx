import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import RightContent from "@/components/protected/right";
import LeftContent from "@/components/protected/left";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/auth/login");
  }

  return (
    <div className=" flex gap-2 bg-white h-full">
      <div>
        <LeftContent></LeftContent>
      </div>
      <div className=" flex-1">
        <RightContent></RightContent>
      </div>
    </div>
  );
}
