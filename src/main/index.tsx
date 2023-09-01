import React from 'react';
import {createRoot} from 'react-dom/client';

import {OnBoarding} from "@/presentation/modules/onBoarding";
import {FluentProvider, webLightTheme} from "@fluentui/react-components";
import {NonAuthorizedLayout} from "@/presentation/layout/non-authorized";
import './globals.scss'
import {AuthorizedLayout} from "@/presentation/layout/authorized";

const container = document.getElementById('main');
if (container) {
    createRoot(container).render(
        <FluentProvider theme={webLightTheme}>
            <AuthorizedLayout>
                <OnBoarding/>
            </AuthorizedLayout>
        </FluentProvider>
    );
}
