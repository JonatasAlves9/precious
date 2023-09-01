import React from "react";
import {Container, ViewEnd, ViewStart} from "./styles";
import {Button, Divider, Image, Link, Tab, TabList} from "@fluentui/react-components";

export const Header = () => {
    return (
        <Container>
            <ViewStart>
                <Image
                    height={70}
                    width={130}
                    src={'https://logosmarcas.net/wp-content/uploads/2020/09/Microsoft-Logo.png'}/>
                <Divider vertical style={{
                    margin: '0 30',
                }}/>
                <TabList defaultSelectedValue="tab1">
                    <Tab value="tab1">Conta</Tab>
                    <Tab value="tab2">Ajuda</Tab>
                </TabList>
            </ViewStart>
            <ViewEnd>
                <Button size={'small'} >Entrar</Button>
            </ViewEnd>
        </Container>
    )
}