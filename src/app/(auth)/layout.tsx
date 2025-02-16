export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="border h-screen flex items-center justify-center">
      {children}
    </div>
  );
}
