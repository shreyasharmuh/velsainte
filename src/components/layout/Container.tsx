export default function Container({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-[1800px] mx-auto px-8 lg:px-12">
      {children}
    </div>
  );
}