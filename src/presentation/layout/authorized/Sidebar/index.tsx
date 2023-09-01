import React from "react";
import {Wrapper} from "@/presentation/layout/authorized/Sidebar/styles";
import {Tab, TabList, Text, tokens} from "@fluentui/react-components";
import {
    TextBulletListSquare32Regular,
    Notebook32Regular
} from "@fluentui/react-icons";

export const Sidebar = () => {


    const renderTabs = () => {
        return (
            <>
                <Tab value="tab1">
                    <div style={{
                        flexDirection: "column",
                        display: 'flex',
                        padding: 5
                    }}>
                        <TextBulletListSquare32Regular color={tokens.colorNeutralForeground2BrandSelected}/>
                        <Text style={{
                            color: tokens.colorNeutralForeground2BrandSelected
                        }}>Tasks</Text>
                    </div>
                </Tab>
                <Tab value="tab2">
                    <div style={{
                        flexDirection: "column",
                        display: 'flex',
                        padding: 5

                    }}>
                        <Notebook32Regular color={tokens.colorNeutralForeground3}/>
                        <Text style={{
                            color: tokens.colorNeutralForeground3
                        }}>Notes</Text>
                    </div>
                </Tab>
            </>
        );
    };
    return (<Wrapper>
        <TabList defaultSelectedValue="tab2" vertical>
            {renderTabs()}
        </TabList>
    </Wrapper>);
}