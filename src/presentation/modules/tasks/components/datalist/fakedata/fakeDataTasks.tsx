import {
    DocumentPdfRegular,
    DocumentRegular,
    EditRegular,
    FolderRegular,
    OpenRegular,
    PeopleRegular,
    VideoRegular
} from "@fluentui/react-icons";
import {Item} from "@/presentation/modules/tasks/components/datalist/models";

export const items: Item[] = [
    {
        file: {label: "Meeting notes", icon: <DocumentRegular/>},
        author: {label: "Max Mustermann", status: "available"},
        lastUpdated: {label: "7h ago", timestamp: 1},
        lastUpdate: {
            label: "You edited this",
            icon: <EditRegular/>,
        },
    },
    {
        file: {label: "Thursday presentation", icon: <FolderRegular/>},
        author: {label: "Erika Mustermann", status: "busy"},
        lastUpdated: {label: "Yesterday at 1:45 PM", timestamp: 2},
        lastUpdate: {
            label: "You recently opened this",
            icon: <OpenRegular/>,
        },
    },
    {
        file: {label: "Training recording", icon: <VideoRegular/>},
        author: {label: "John Doe", status: "away"},
        lastUpdated: {label: "Yesterday at 1:45 PM", timestamp: 2},
        lastUpdate: {
            label: "You recently opened this",
            icon: <OpenRegular/>,
        },
    },
    {
        file: {label: "Purchase order", icon: <DocumentPdfRegular/>},
        author: {label: "Jane Doe", status: "offline"},
        lastUpdated: {label: "Tue at 9:30 AM", timestamp: 3},
        lastUpdate: {
            label: "You shared this in a Teams chat",
            icon: <PeopleRegular/>,
        },
    },
];