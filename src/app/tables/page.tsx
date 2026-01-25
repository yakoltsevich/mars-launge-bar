import { TablesGrid } from "@/components/tables/TablesGrid";
import { TABLES } from "@/components/tables/tablesData";

export default function TablesPage() {
    return (
        <main>
            <TablesGrid items={TABLES} />
        </main>
    );
}
