export function RightSideBar() {
  return (
    <section
      className={
        "sticky right-0 top-0 z-20 flex h-screen w-fit flex-col justify-between gap-12 overflow-auto border-l border-l-slate-700 bg-dark-2 px-10 pb-6 pt-28 max-xl:hidden"
      }
    >
      <div className={"flex flex-col flex-1 justify-start"}>
        <h3>Suggested Communities</h3>
      </div>

      <div className={"flex flex-col flex-1 justify-start"}>
        <h3>Suggested Users</h3>
      </div>
    </section>
  );
}
