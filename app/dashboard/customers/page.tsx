import CustomerTable from "@/app/ui/customers/table";

export default function Page() {
    return <>
        <h1 className="mb-8 text-xl md:text-2xl">Customers</h1>
        <CustomerTable customers={[]} />;
    </>
}