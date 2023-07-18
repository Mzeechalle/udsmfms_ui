import {
    TeamOutlined,
    IdcardOutlined,
    GroupOutlined,
    ForkOutlined,
    StarOutlined,
    SolutionOutlined,
    UserSwitchOutlined,
    ContainerOutlined,
    FileOutlined,
    SnippetsOutlined,
    FileTextOutlined,
    ProfileOutlined,
    OneToOneOutlined
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
        "item": "Student",
        "route": "/student"
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
        "icon": <FileOutlined />,
        "item": "My Postponements",
        "route": "/mypostponements"
    },

    {
        "key": 4,
        "icon": <FileTextOutlined />,
        "item": "My Resume of Studies",
        "route": "/myresumestudies"
    },

    {
        "key": 5,
        "icon": <ProfileOutlined />,
        "item": "My Special Tests",
        "route": "/myspecialtests"
    },

    {
        "key": 7,
        "icon": <OneToOneOutlined />,
        "item": "My Special Exams",
        "route": "/myspecialexams"
    }


];

const MANAGEMENTITEMS = [

    ...STAFFITEMS,
    {
        "key": 4,
        "icon": <SnippetsOutlined />,
        "item": "Received Leaves",
        "route": "/requests"
    },

    {
        "key": 5,
        "icon": <FileOutlined />,
        "item": "Received Postponements",
        "route": "/postponements"
    },

    {
        "key": 6,
        "icon": <FileTextOutlined />,
        "item": "Received Resume of Studies",
        "route": "/resumestudies"
    },

    {
        "key": 7,
        "icon": <ProfileOutlined />,
        "item": "Received Special Tests",
        "route": "/specialtests"
    },

    {
        "key": 8,
        "icon": <OneToOneOutlined />,
        "item": "Received Special Exams",
        "route": "/specialexams"
    }
];

const MOI_TEMS = [

    ...STAFFITEMS,
    {
        "key": 4,
        "icon": <ProfileOutlined />,
        "item": "Received Special Tests",
        "route": "/specialtests"
    },

    {
        "key": 5,
        "icon": <OneToOneOutlined />,
        "item": "Received Special Exams",
        "route": "/specialexams"
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
    MOI_TEMS,
    UNKNOWNITEMS
};