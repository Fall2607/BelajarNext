export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <header className="border-b border-green-700">Ini punya admin</header>
      {children}
    </main>
  );
}
