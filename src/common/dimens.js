import { StatusBar } from "react-native";
import utils from "common/utils";
export const NAVIGATION_BAR_PADDING_H = 8;
export const NAVIGATION_BUTTON_ICON_SIZE = 24;
export const NAVIGATION_BUTTON_ICON_MARGIN_RIGHT = 8;
export const PADDING_H = 15;
export const PADDING_V = 20;
export const MARGIN_V = 15;
export const MARGIN_H = 15;
export const BOTTOM_TAB_HEIGHT = 57;

export const STATUS_BAR_HEIGHT = Platform.select({
    ios: utils.isBunnyEarDevice() ? 44 : 20,
    android: StatusBar.currentHeight,
    default: 0
})

export const BOTTOM_BAR_HEIGHT = Platform.select({
    ios: utils.isBunnyEarDevice() ? 44 : 0,
    android: 0,
    default: 0
})
export const SAFE_AREA_BOTTOM_HEIGHT = BOTTOM_TAB_HEIGHT + BOTTOM_BAR_HEIGHT

