export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <main className="flex min-h-svh flex-col justify-center items-center">
      {children}
    </main>
  );
}
