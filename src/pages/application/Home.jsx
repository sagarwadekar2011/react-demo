import { Outlet } from "react-router-dom";
import TheHeader from "../../components/UI/TheHeader";
// import TheFooter from "../../components/UI/TheFooter";

function Home() {
  return (
    <div className="container-fluid">
      <TheHeader></TheHeader>
      <section>
        <Outlet></Outlet>
      </section>
      {/* <TheFooter></TheFooter> */}
    </div>
  );
}

export default Home;
