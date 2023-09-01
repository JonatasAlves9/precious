import * as React from "react";
import {Tree, TreeItem, TreeItemLayout} from "@fluentui/react-components";

export const ListTree = () => {
    return (
        <Tree aria-label="Default" defaultOpenItems={[
            "favorites",
            "projects",
        ]}>
            <TreeItem itemType="branch" value="favorites">
                <TreeItemLayout>Favoritos</TreeItemLayout>
                <Tree>
                    <TreeItem itemType="leaf">
                        <TreeItemLayout>Trabalho</TreeItemLayout>
                    </TreeItem>
                    <TreeItem itemType="leaf">
                        <TreeItemLayout>Metas 2023</TreeItemLayout>
                    </TreeItem>
                    <TreeItem itemType="leaf">
                        <TreeItemLayout>Pessoal</TreeItemLayout>
                    </TreeItem>
                </Tree>
            </TreeItem>
            <TreeItem itemType="branch" value="projects">
                <TreeItemLayout>Projetos</TreeItemLayout>
                <Tree>
                    <TreeItem itemType="branch">
                        <TreeItemLayout>level 2, item 1</TreeItemLayout>
                        <Tree>
                            <TreeItem itemType="leaf">
                                <TreeItemLayout>level 3, item 1</TreeItemLayout>
                            </TreeItem>
                        </Tree>
                    </TreeItem>
                </Tree>
            </TreeItem>

        </Tree>
    );
};