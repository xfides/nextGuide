export default async function Invoices() {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return <p>Invoices</p>;
}
