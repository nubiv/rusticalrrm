import { DataTable } from "@/components/data-table";
import { Separator } from "@/components/ui/separator";

export default function Page() {
    return <>
    <DataTable columns={[]} data={[]}/>
    <Separator className=" my-4"/>
    {/* <DataTable columns={[]} data={[]}/> */}
    </>
}