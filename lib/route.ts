import Login from "@/app/(auth)/Login/page";

export const Route = {
<<<<<<< Updated upstream
    HOME: "/MainApp/HomePage",
    Landing: "/LandingPage",
    MainApp: "/MainApp",
    Login: "/Login",
}
=======
  HOME: "/MainApp/HomePage",
  Landing: "/LandingPage",
  MainApp: "/MainApp",
  Login: "/Login",
  Learn: "/MainApp/LearnPage",
  MathSolver: "/MainApp/MathSolverPage",
  Badges: "/MainApp/BadgePage",
  Lesson: (topic: string) => `/MainApp/Lessons/${topic}`,
  Quiz: (topic: string) => `/MainApp/Quiz/${topic}`,
};
>>>>>>> Stashed changes
