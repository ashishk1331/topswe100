import Table from "../components/Table";
import Header from "../components/Header";

export default function Home() {
  return (
    <main className="relative overflow-hidden w-full mx-auto flex flex-col items-center justify-between md:p-24 p-6">
      <Header />
      <Table />
    </main>
  );
}
