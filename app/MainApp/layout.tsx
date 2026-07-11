import { NavBar } from "@/components/ui/NavBar";

const MainAppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <NavBar />
      {children}
    </main>
  );
};

export default MainAppLayout;
