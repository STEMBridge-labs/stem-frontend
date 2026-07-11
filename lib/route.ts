// Central navigation map for the app so pages can be linked consistently.
export const Route = {
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
