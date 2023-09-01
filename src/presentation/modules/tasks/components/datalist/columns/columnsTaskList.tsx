import {Avatar, createTableColumn, TableCellLayout, TableColumnDefinition} from "@fluentui/react-components";
import React from "react";
import {Item} from "@/presentation/modules/tasks/components/datalist/models";

export const columns: TableColumnDefinition<Item>[] = [
    createTableColumn<Item>({
        columnId: "file",
        renderHeaderCell: () => {
            return "File";
        },
        renderCell: (item) => {
            return (
                <TableCellLayout media={item.file.icon}>
                    {item.file.label}
                </TableCellLayout>
            );
        },
    }),
    createTableColumn<Item>({
        columnId: "author",
        renderHeaderCell: () => {
            return "Author";
        },
        renderCell: (item) => {
            return (
                <TableCellLayout
                    media={
                        <Avatar
                            aria-label={item.author.label}
                            name={item.author.label}
                            badge={{status: item.author.status}}
                        />
                    }
                >
                    {item.author.label}
                </TableCellLayout>
            );
        },
    }),
    createTableColumn<Item>({
        columnId: "lastUpdated",
        renderHeaderCell: () => {
            return "Last updated";
        },

        renderCell: (item) => {
            return item.lastUpdated.label;
        },
    }),
    createTableColumn<Item>({
        columnId: "lastUpdate",
        renderHeaderCell: () => {
            return "Last update";
        },
        renderCell: (item) => {
            return (
                <TableCellLayout media={item.lastUpdate.icon}>
                    {item.lastUpdate.label}
                </TableCellLayout>
            );
        },
    }),
];