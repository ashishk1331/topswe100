import Table from "../components/Table";
import Header from "../components/Header";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-between md:p-24 p-6">
      <Header />
      <Table />
    </main>
  );
}
