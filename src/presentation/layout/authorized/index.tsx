import React from "react";
import {Wrapper} from "@/presentation/layout/Wrapper";
import {Topbar} from "@/presentation/layout/authorized/Topbar";
import {Sidebar} from "@/presentation/layout/authorized/Sidebar";

interface IProps {
    children: JSX.Element;
}

export const AuthorizedLayout = ({children}: IProps) => {
    return (
        <div style={{
            display: "flex",
            minHeight: "100vh",
            flexDirection: "column",
        }}>
            <Topbar/>
            <div style={{
                flex: "1", // O conteúdo principal ocupa o espaço restante
                display: "flex",
            }}>
                <Sidebar/>
                <Wrapper>
                    {children}
                </Wrapper>
            </div>

        </div>
    )
}