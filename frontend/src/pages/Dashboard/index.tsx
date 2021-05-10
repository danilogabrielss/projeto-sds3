import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";
import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import 'bootstrap/dist/css/bootstrap.css';

function DashBoard() {
    return (
        <>
            <div>
                <NavBar />
                <div className="container" >
                    <h1 className="text-primary">Dasboard de Vendas</h1>

                    <div className="row px-3">
                        <div className="col-sm-6">

                            <h5 className="text-center text-secondary">Taxa de vendas (%)</h5>
                            <BarChart />

                        </div>
                        <div className="col-sm-6">

                            <h5 className="text-center text-secondary">Todas as Vendas</h5>
                            <DonutChart />
                        </div>
                    </div>
                    <div className="py-3">
                        <h2 className="text-primary">Todas Vendas</h2>
                    </div>

                    <DataTable />

                </div>
                <Footer />
            </div>
        </>
    );
}

export default DashBoard;