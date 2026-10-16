import Everything from "./Components/Everything for website/Everything";
import Navbar from "./Components/Navbar/Navbar";
import Pickplan from "./Components/Pick your plan/Pickplan";
import Support from "./Components/Support/Support";
import Whoarewe from "./Components/Who are we/Whoarewe";

export default function App() {
  return (
    <main>
      <Navbar />
      <Everything />
      <Pickplan />
      <Whoarewe />
      <Support />
    </main>
  );
}
