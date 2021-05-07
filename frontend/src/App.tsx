import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function App() {
  return (
    <div className="container">
      <>
        <NavBar />
        <h1 className="text-primary py-3">Dashborad de Vendas</h1>
        <div className="row px-3">
          <div className=" col=-sm-6">
            <h5 className="text-center text-secondary">Taxa de sucesso</h5>
            <BarChart />
          </div>
          <div className=" col=-sm-6">
            <h5 className="text-center text-secondary">Todas vendas</h5>
            <BarChart />
          </div>
        </div>
        <div className="py-3">
          <h2 className="text-primary">Todas as vendas</h2>
        </div>
        <DataTable />
        <Footer />
      </>
    </div>
  );
}

export default App;
