import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { DataTable } from "./data-table"

export function Panel() {
  return (
    <div className="resizable-container h-1/2 scroll-auto">
        <Tabs defaultValue="summary scroll-auto">
        <TabsList className="flex bg-inherit justify-between bg-slate-100 ">
            <TabsTrigger value="summary">Summary</TabsTrigger>
            <TabsTrigger value="checks">Checks</TabsTrigger>
            <TabsTrigger value="tasks">Tasks</TabsTrigger>
            <TabsTrigger value="patches">Patches</TabsTrigger>
            <TabsTrigger value="software">Software</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
            <TabsTrigger value="assets">Assets</TabsTrigger>
        </TabsList>
        <TabsContent value="summary">
            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur voluptatem consequuntur, est ab ullam voluptate, optio ipsa accusamus sed saepe ex, at quos atque in maiores repellendus quaerat eius asperiores.</h1>
        </TabsContent>
        <TabsContent value="checks">
            <DataTable columns={[]} data={[]} withToolbar={false}/>
        </TabsContent>
        <TabsContent value="tasks">
            <DataTable columns={[]} data={[]} withToolbar={false}/>
        </TabsContent>
        <TabsContent value="patches">
            <DataTable columns={[]} data={[]} withToolbar={false}/>
        </TabsContent>
        <TabsContent value="software">
            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur voluptatem consequuntur, est ab ullam voluptate, optio ipsa accusamus sed saepe ex, at quos atque in maiores repellendus quaerat eius asperiores.</h1>
        </TabsContent>
        <TabsContent value="history">
            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur voluptatem consequuntur, est ab ullam voluptate, optio ipsa accusamus sed saepe ex, at quos atque in maiores repellendus quaerat eius asperiores.</h1>
        </TabsContent>
        <TabsContent value="notes">
            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur voluptatem consequuntur, est ab ullam voluptate, optio ipsa accusamus sed saepe ex, at quos atque in maiores repellendus quaerat eius asperiores.</h1>
        </TabsContent>
        <TabsContent value="assets">
            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur voluptatem consequuntur, est ab ullam voluptate, optio ipsa accusamus sed saepe ex, at quos atque in maiores repellendus quaerat eius asperiores.</h1>
        </TabsContent>
        </Tabs>
    </div>
  )
}
