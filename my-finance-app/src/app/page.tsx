import { Header } from "./components/Header/Header";
import { Table } from "./components/Table/Table";
import "./page.module.scss";

export default function Home() {
  return (
    <main className="main">
        <Header/>     
        <Table/>
    </main>
  );
}
