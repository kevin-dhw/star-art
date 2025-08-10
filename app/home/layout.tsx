// import { Avatar } from "@mui/material";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col h-screen">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 bg-slate-600">
        <div className=" flex-1 flex h-[63px]">
          <div className=" flex items-center mx-[14px]">
            {/* <Avatar alt="Remy Sharp" src="@/public/back.png" /> */}
            <div className=" items-center text-[20px]/[63px] ml-[14px] text-white font-bold">
              星空美术培训机构
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 text-white">
          <div className=" flex-1"></div>
          你好, 张三!
          <div>退出</div>
          <div className=" w-[14px]"></div>
        </div>
      </nav>
      <div className=" flex-1">{children}</div>
    </main>
  );
}
