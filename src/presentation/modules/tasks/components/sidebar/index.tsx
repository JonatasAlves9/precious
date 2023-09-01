import React from "react";
import {Header} from "@/presentation/modules/tasks/components/sidebar/header";
import {Wrapper} from "@/presentation/modules/tasks/components/sidebar/styles";
import {ListTree} from "@/presentation/modules/tasks/components/tree";

export const Sidebar = () => {
    return (
        <Wrapper >
            <Header/>
            <ListTree/>
        </Wrapper>
    )
}