import {
  DashboardOutlined,
} from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";


const dashBoardNavTree = [
  {
    key: "dashboards",
    path: `${APP_PREFIX_PATH}/dashboards`,
    title: "sidenav.dashboard",
    icon: DashboardOutlined,
    breadcrumb: false,
    isGroupTitle: true,
    //submenu:menu_items,
    submenu: [
      {
        "key": "dashboards-default",
        "path": "/dashboards/default",
        "title": "Dashboard",
        "icon": "DashboardOutlined",
        "breadcrumb": false,
        "submenu": []
      },
      {
        "key": "dashboards-task1",
        "path": "/dashboards/task_1",
        "title": "Task 1",
        "icon": "DashboardOutlined",
        "breadcrumb": false,
        "submenu": []
      },
      {
        "key": "dashboards-task2",
        "path": "/dashboards/task_2",
        "title": "Task 2",
        "icon": "DashboardOutlined",
        "breadcrumb": false,
        "submenu": []
      },
      {
        "key": "dashboards-task3",
        "path": "/dashboards/task_3",
        "title": "Task 3",
        "icon": "DashboardOutlined",
        "breadcrumb": false,
        "submenu": []
      },
      {
        "key": "dashboards-task4",
        "path": "/dashboards/task4",
        "title": "Task 4",
        "icon": "DashboardOutlined",
        "breadcrumb": false,
        "submenu": []
      },
      {
        "key": "dashboards-task5",
        "path": "/dashboards/task_5",
        "title": "Task 5",
        "icon": "DashboardOutlined",
        "breadcrumb": false,
        "submenu": []
      },
      {
        "key": "dashboards-task6",
        "path": "/dashboards/task_6",
        "title": "Task 6",
        "icon": "DashboardOutlined",
        "breadcrumb": false,
        "submenu": []
      },
    ]
  },
];

const navigationConfig = [...dashBoardNavTree];

export default navigationConfig;
