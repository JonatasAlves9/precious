import React from "react";
import {Sidebar} from "@/presentation/modules/tasks/components/sidebar";
import {Content, Wrapper} from "@/presentation/modules/tasks/styles";

export const Tasks = () => {
    return (
        <Wrapper>
            <Sidebar/>
            <Content/>
        </Wrapper>
    );
}