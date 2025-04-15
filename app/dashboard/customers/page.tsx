import CustomerTable from "@/app/ui/customers/table";
import { Suspense } from "react";

export default function Page() {
    return <>
        <h1 className="mb-8 text-xl md:text-2xl">Customers</h1>
        <Suspense>
            <CustomerTable customers={[]} />;
        </Suspense>
    </>
}