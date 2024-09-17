import Menu from "../menu/page";

export default function MyInfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Menu />
      <div>{children}</div>
    </div>
  );
}
