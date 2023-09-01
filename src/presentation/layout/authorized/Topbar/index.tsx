import React, {useId} from "react";
import {ViewCenter, ViewSideRight, ViewSides, Wrapper} from "@/presentation/layout/authorized/Topbar/styles";
import {Avatar, Input, tokens} from "@fluentui/react-components";
import {
    Search16Filled, MoreHorizontal16Regular
} from "@fluentui/react-icons";

export const Topbar = () => {
    return (
        <Wrapper style={{
            backgroundColor: tokens.colorPaletteBlueBackground2
        }}>
            <ViewSides></ViewSides>
            <ViewCenter>
                <Input contentBefore={<Search16Filled/>} appearance={'filled-darker'} placeholder={'Search'} style={{
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