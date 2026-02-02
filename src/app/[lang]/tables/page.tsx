import {TablesGrid} from "@/components/tables/TablesGrid";
import {TABLES} from "@/components/tables/tablesData";
import {MainPageWrapper} from "@/components/common/MainPageWrapper";

export default function TablesPage() {
    return (
        <MainPageWrapper>
            <TablesGrid items={TABLES}/>
        </MainPageWrapper>
    );
}
