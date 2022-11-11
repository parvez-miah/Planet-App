import { colors } from "../../../Theme/colors";
import { typography } from "../../../Theme/typography";

const BASE = {
    fontFamily: typography.primary,
    fontSize: 19,
    color: colors.white,
}

const BASE_BOLD = {

    FontFamily: typography.secondary,
    fontSize: 19,
    color: colors.white,

}

const BOLD = {
    FontFamily: typography.bold,
    fontSize: 19,
    color: colors.white,
}
export const presets = {
    default: BASE,
    bold: BOLD,
    h1: {
        ...BOLD,
        fontSize: 32,
    },
    h2: {
        ...BOLD,
        fontSize: 28,
    },
    h3: {
        ...BASE_BOLD,
        fontSize: 25,
    },
    h4: {
        ...BASE_BOLD,
        fontSize: 22,
    },
    small: {
        ...BASE,
        fontSize: 13,
    }
}