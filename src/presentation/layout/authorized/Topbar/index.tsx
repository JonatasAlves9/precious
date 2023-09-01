import React, {useId} from "react";
import {ViewCenter, ViewSides, Wrapper} from "@/presentation/layout/authorized/Topbar/styles";
import {Input, tokens} from "@fluentui/react-components";
import {Search16Filled} from "@fluentui/react-icons";

export const Topbar = () => {
    const beforeId = useId("before-label");

    return (
        <Wrapper style={{
            backgroundColor: tokens.colorPaletteBlueBackground2
        }}>
            <ViewSides></ViewSides>
            <ViewCenter>
                <Input contentBefore={<Search16Filled/>} appearance={'filled-darker'} placeholder={'Search'} style={{
                    width: '100%'
                }} id={beforeId}/>
            </ViewCenter>
            <ViewSides></ViewSides>

        </Wrapper>
    )
}