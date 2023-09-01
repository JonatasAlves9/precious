import React from 'react';
import {createRoot} from 'react-dom/client';
import {FluentProvider, tokens, webDarkTheme, webLightTheme} from "@fluentui/react-components";
import './globals.scss'
import {AuthorizedLayout} from "@/presentation/layout/authorized";
import {Tasks} from "@/presentation/modules/tasks";

const container = document.getElementById('main');
if (container) {
    createRoot(container).render(
        <FluentProvider theme={webLightTheme} style={{
            background: tokens.colorBrandBackground2
        }}>
            <AuthorizedLayout>
                {/*<OnBoarding/>*/}
                <Tasks/>
            </AuthorizedLayout>
        </FluentProvider>
    );
}
