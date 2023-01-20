import {
    TeamOutlined,
    IdcardOutlined,
    GroupOutlined,
    ForkOutlined,
    StarOutlined,
    SolutionOutlined,
    UserSwitchOutlined,
    ContainerOutlined,
    SnippetsOutlined
  } from '@ant-design/icons';

const ADMINITEMS = [

    {
        "key": 2,
        "icon": <GroupOutlined />,
        "item": "Colleges",
        "route": "/colleges"
    },

    {
        "key": 3,
        "icon": <GroupOutlined />,
        "item": "Departments",
        "route": "/departments"
    },

    {
        "key": 4,
        "icon": <StarOutlined />,
        "item": "Positions",
        "route": "/positions"
    },

    {
        "key": 5,
        "icon": <ForkOutlined />,
        "item": "Roles",
        "route": "/roles"
    },

    {
        "key": 6,
        "icon": <UserSwitchOutlined />,
        "item": "Staff",
        "route": "/staff"
    },

    {
        "key": 7,
        "icon": <SolutionOutlined />,
        "item": "Students",
        "route": "/students"
    },

    {
        "key": 8,
        "icon": <TeamOutlined />,
        "item": "System Users",
        "route": "/systemusers"
    }

];

const STAFFITEMS = [

    {
        "key": 2,
        "icon": <IdcardOutlined />,
        "item": "Profile",
        "route": "/staffprofile"
    },

    {
        "key": 3,
        "icon": <ContainerOutlined />,
        "item": "My Leaves",
        "route": "/myleaves"
    }

];

const STUDENTITEMS = [

    {
        "key": 2,
        "icon": <IdcardOutlined />,
        "item": "Profile",
        "route": "/studentprofile"
    },

    {
        "key": 3,
        "icon": <ContainerOutlined />,
        "item": "My Requests",
        "route": "/myrequests"
    }

];

const MANAGEMENTITEMS = [

    ...STAFFITEMS,
    {
        "key": 4,
        "icon": <SnippetsOutlined />,
        "item": "Received Requests",
        "route": "/requests"
    }
];

const UNKNOWNITEMS = [
    {
        "key": 5,
        "icon": <SnippetsOutlined />,
        "item": "Nothing to display",
        "route": "/not_found"
    }
];

export {
    ADMINITEMS,
    STAFFITEMS,
    STUDENTITEMS,
    MANAGEMENTITEMS,
    UNKNOWNITEMS
};