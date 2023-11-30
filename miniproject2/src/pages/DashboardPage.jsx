import { useNavigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import PostsPage from "./PostsPage";
import { Button } from "@mui/material";
export default function DashboardPage() {
  // built-in hook in React Router DOM, returns a function
  const navigate = useNavigate();

  return (
    <div className="DashboardPage componentBox">
    
      <h1>Dashboard</h1>
      <Outlet /> {/* see next slide */}
      {/* Will render either <DashboardMessages> when the URL is
"/dash/messages", <DashboardTasks> at "/dash/tasks",
or null if it is "/dash" */}
      <Button variant="outlined" onClick={() => navigate("/dash/tasks")}>
        Show Tasks
      </Button>
      <Button variant="outlined" onClick={() => navigate("/dash/messages")}>
        Show Messages
      </Button>
     
    
    
      <Button variant="outlined" onClick={() => navigate("/login")}>
        Log In
      </Button>
      <Button variant="outlined" onClick={() => navigate("/yuh")}>
        Bacon
      </Button>
      
    </div>
  );
}
// ++ Move the <Outlet/> below the buttons and observe the change
// Save as DashboardPage.jsx in a new folder called 'pages'
// See next slide for additional content for this file
// Add this code to DashboardPage.jsx : nested route path components
// rendered by matching nested routes in AppRoutes.jsx
// These components will appear in the <Outlet /> placeholder spot
// in the DashboardPage component if the route matches
export function DashboardMessages(props) {
  const { currentUser } = useUserContext();
  return (
    <div className="DashboardMessages">
      <p>Welcome to your dashboard, {currentUser.email}</p>
    </div>
  );
}
export function DashboardTasks(props) {
  const tasks = [
    { id: 1, name: "Learn React" },
    { id: 2, name: "Decide on capstone project" },
    { id: 3, name: "Learn databases" },
  ];
  return (
    <div className="DashboardTasks">
      <ul className="tasks">
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
}
