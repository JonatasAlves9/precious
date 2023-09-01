import React from "react";
import {ViewCenter, ViewSideRight, ViewSides, Wrapper} from "@/presentation/layout/authorized/Topbar/styles";
import {Avatar, Input, tokens} from "@fluentui/react-components";
import {MoreHorizontal16Regular, Search16Filled} from "@fluentui/react-icons";
import {ChevronLeft16Regular, ChevronRight16Regular} from '@fluentui/react-icons'
export const Topbar = () => {
    return (
        <Wrapper style={{
            backgroundColor: tokens.colorBrandBackground2
        }}>
            <ViewSides></ViewSides>
            <ViewCenter>
                <ChevronLeft16Regular/>
                <ChevronRight16Regular/>
                <Input contentBefore={<Search16Filled/>} placeholder={'Search'} style={{
                    width: '100%'
                }} id={"before-label"}/>
            </ViewCenter>
            <ViewSideRight>
                <MoreHorizontal16Regular/>
                <Avatar style={{
                    marginRight: 20,
                }} image={{
                    src: 'https://github.com/JonatasAlves9.png'
                }}/>
            </ViewSideRight>
        </Wrapper>
    )
}