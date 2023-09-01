import React from "react";
import {Header} from "@/presentation/layout/non-authorized/Header";
import {Wrapper} from "presentation/layout/Wrapper";

interface IProps {
    children: JSX.Element;
}

export const NonAuthorizedLayout = ({children}: IProps) => {
    return (
        <>
            <Header/>
            <Wrapper>
                {children}
            </Wrapper>
        </>
    )
}