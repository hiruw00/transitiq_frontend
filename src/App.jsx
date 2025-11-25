import AppRoutes from "./routes/AppRoutes";
import Login from "./pages/login";

function App() {
  return <AppRoutes />;
}
<Routes>
  <Route path="/login" element={<Login />} />
</Routes>

export default App;
