import { Header } from "@/widgets/Header";

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <>
    <Header />

    <main className="container">{children}</main>
  </>
);
