import robotIcon from "../../assets/images/RobotIcon.png";
import alertIcon from "../../assets/images/AlertIcon.png";
import taskIcon from "../../assets/images/TaskIcon.png";
import efficiencyIcon from "../../assets/images/EfficiencyIcon.png";

export const assertProps = {
    boxId: "asset-count",
    icon: robotIcon,
    iconImgId: "robot-icon",
    iconImgAlt: "RobotIcon",
    pillType: "Asset Count",
    pillValue: "64",
    pillValueId: "assert-pill-value"
}

export const alertProps = {
    boxId: "alert-count",
    icon: alertIcon,
    iconImgId: "alert-icon",
    iconImgAlt: "AlertIcon",
    pillType: "Critical Alerts",
    pillValue: "11",
    pillValueId: "alert-pill-value"
}

export const taskProps = {
    boxId: "task-count",
    icon: taskIcon,
    iconImgId: "task-icon",
    iconImgAlt: "TaskIcon",
    pillType: "Tasks Done",
    pillValue: "1,492",
    pillValueId: "task-pill-value"
}

export const efficiencyProps = {
    boxId: "efficiency",
    icon: efficiencyIcon,
    iconImgId: "efficiency-icon",
    iconImgAlt: "EfficiencyIcon",
    pillType: "Efficiency",
    pillValue: "92%",
    pillValueId: "efficiency-pill-value"
}