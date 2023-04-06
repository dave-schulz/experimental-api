import '@/styles/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="pt-20">{children}</section>;
}
