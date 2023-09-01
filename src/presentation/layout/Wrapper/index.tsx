import React from "react";
import {Container} from "@/presentation/layout/Wrapper/styles";

interface IProps {
    children: JSX.Element;
}

export const Wrapper = ({children}: IProps) => {
    return (
        <Container>
            {children}
        </Container>
    )
}