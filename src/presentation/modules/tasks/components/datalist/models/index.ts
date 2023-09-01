import {PresenceBadgeStatus} from "@fluentui/react-components";

export type FileCell = {
    label: string;
    icon: JSX.Element;
};

export type LastUpdatedCell = {
    label: string;
    timestamp: number;
};

export type LastUpdateCell = {
    label: string;
    icon: JSX.Element;
};

export type AuthorCell = {
    label: string;
    status: PresenceBadgeStatus;
};

export type Item = {
    file: FileCell;
    author: AuthorCell;
    lastUpdated: LastUpdatedCell;
    lastUpdate: LastUpdateCell;
};
