import { DataTable } from "@/components/data-table";
import { Panel } from "@/components/panel";
import { Separator } from "@/components/ui/separator";

export default function Page() {
    return <div className="flex flex-col h-[100vh]">
        <DataTable columns={[]} data={[]} withToolbar/>
        <Separator className="my-1"/>
        {/* <DataTable columns={[]} data={[]}/> */}
        <Panel />
    </div>
}