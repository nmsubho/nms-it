import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Home from "./components/Home/Home/Home";
import ServiceDetails from "./components/Services/ServiceDetails/ServiceDetails";
import Services from "./components/Services/Services";
import Header from "./components/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceId" element={<ServiceDetails />} />
        <Route path="/dashboard" element={<Dashboard />}>
          {/* <Route
            exact
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashboardHome />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/makeAdmin"
            element={
              <AdminRoute>
                <MakeAdmin />
              </AdminRoute>
            }
          />
          <Route
            path="/dashboard/addBooks"
            element={
              <AdminRoute>
                <AddBooks />
              </AdminRoute>
            }
          />
          <Route
            path="/dashboard/myBooks"
            element={
              <PrivateRoute>
                <MyBooks />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/writeReview"
            element={
              <PrivateRoute>
                <WriteReview />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/manageRequests"
            element={
              <AdminRoute>
                <ManageRequests />
              </AdminRoute>
            }
          /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
