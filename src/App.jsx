import Everything from "./Components/Everything for website/Everything";
import Navbar from "./Components/Navbar/Navbar";
import Pickplan from "./Components/Pick your plan/Pickplan";

export default function App() {
  return (
    <main>
      <Navbar />
      <Everything />
      <Pickplan />
    </main>
  );
}
