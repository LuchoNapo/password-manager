import { columns } from "./columns";
import { DataTable } from "./data-table";
import { DataTableItemsProps } from "./DataTableItems.type";

export default function DataTableItems({elements}: DataTableItemsProps) {
  return (
    <div className="py-10">
        <DataTable columns={columns} data={elements} />
    </div>
  )
}
