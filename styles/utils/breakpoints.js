const size = {
    sm: `375px`,
    md: `768px`,
    lg: `1440px`
}

const device = {
    sm: `only screen and (min-width: ${size.sm})`,
    md: `only screen and (min-width: ${size.md})`,
    lg: `only screen and (min-width: ${size.lg})`
}

export default {size, device}