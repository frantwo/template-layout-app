import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons'
  
export const menuItems = [
    {
      name: 'Eng.Ops.',
      link: '/eng-ops',
      icon: <UserOutlined />,
      children: [
        {
          name: 'PRs Measurement',
          link: '/eng-ops/prs-measurement',
        },
      ],
    },
      {
        name: 'Enterprise',
        link: '/enterprise',
        icon: <FileOutlined />, 
      },
      {
        name: 'Analytics',
        link: '/analytics',
        icon: <DesktopOutlined />, 
      },
      {
        name: 'Drill',
        link: '/drill',
        icon: <PieChartOutlined />,
        children: [
          {
            name: 'Dashboard',
            link: '/drill/dashboard',
          },
          {
            name: 'GitHub PRs',
            link: '/drill/github-prs',
          },
          {
            name: 'TechRadar',
            link: '/drill/tech-radar',
          },
        ],
      },
      {
        name: 'Tanker',
        link: '/tanker',
        icon: <TeamOutlined />, 
      },
    ];