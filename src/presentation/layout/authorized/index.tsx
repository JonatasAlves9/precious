import React from "react";
import {Wrapper} from "@/presentation/layout/Wrapper";
import {Topbar} from "@/presentation/layout/authorized/Topbar";

interface IProps {
    children: JSX.Element;
}

export const AuthorizedLayout = ({children}: IProps) => {
    return (
        <>
            <Topbar/>
            <Wrapper>
                {children}
            </Wrapper>
        </>
    )
}