import React from "react";
import {Sidebar} from "@/presentation/modules/tasks/components/sidebar";
import {
    Content,
    DateHeaderContent,
    HeaderContent,
    TextHeaderContent,
    ViewTexts,
    Wrapper
} from "@/presentation/modules/tasks/styles";
import {DataList} from "@/presentation/modules/tasks/components/datalist";

export const Tasks = () => {


    return (
        <Wrapper>
            <Sidebar/>
            <Content>
                <HeaderContent>
                    <ViewTexts>
                        <TextHeaderContent>Hoje</TextHeaderContent>
                        <DateHeaderContent>Sex Set 1</DateHeaderContent>
                    </ViewTexts>
                </HeaderContent>
                <DataList/>
            </Content>
        </Wrapper>
    );
}