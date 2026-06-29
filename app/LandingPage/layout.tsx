import { DashboardNavBar } from "@/components/ui/DashboardNavBar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <DashboardNavBar />
            {children}
        </main>
    );
}

export default LandingLayout;