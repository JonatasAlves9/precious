import {
    DataGrid,
    DataGridBody,
    DataGridCell,
    DataGridHeader,
    DataGridHeaderCell,
    DataGridRow
} from "@fluentui/react-components";
import React from "react";
import {Item} from "@/presentation/modules/tasks/components/datalist/models";
import {columns} from "@/presentation/modules/tasks/components/datalist/columns/columnsTaskList";
import {items} from "@/presentation/modules/tasks/components/datalist/fakedata/fakeDataTasks";

export const DataList = () => {
    return (
        <DataGrid
            selectionMode="multiselect"
            items={items}
            columns={columns}
            focusMode="composite"
        >
            <DataGridHeader>
                <DataGridRow>
                    {({renderHeaderCell}) => (
                        <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>
                    )}
                </DataGridRow>
            </DataGridHeader>
            <DataGridBody<Item>>
                {({item, rowId}) => (
                    <DataGridRow<Item> key={rowId}>
                        {({renderCell}) => (
                            <DataGridCell>{renderCell(item)}</DataGridCell>
                        )}
                    </DataGridRow>
                )}
            </DataGridBody>
        </DataGrid>
    )
}

