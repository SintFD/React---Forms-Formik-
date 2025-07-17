import FollowingForm from "./forms/FollowingForm";
import MainForm from "./forms/MainForm";

function App() {
  return (
    <>
      <header className="flex justify-between p-7">
        <h2>LOGO</h2>
        <nav>
          <ul className="flex gap-4 ">
            <li>
              <a>Company</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>FinTech Solutions</a>
            </li>
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>Contact us</a>
            </li>
          </ul>
        </nav>
        <div></div>
      </header>
      <main className="grid grid-cols-2">
        <MainForm />
        <FollowingForm />
      </main>
    </>
  );
}

export default App;
