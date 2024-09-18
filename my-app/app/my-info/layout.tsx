import Menu from "../menu/page";

export default function MyInfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-1440 mx-auto">
      <Menu />
      <div>{children}</div>
    </div>
  );
}
