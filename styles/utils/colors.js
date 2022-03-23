export const colors = {
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
    tertiary: 'var(--color-tertiary)',
    cream: 'var(--color-cream)',
    darkBlue: 'var(--color-dark-blue)'
}

export const textColors = {
    light: 'var(--color-cream)',
    medium: 'var(--color-grey)',
    dark: 'var(--color-secondary)',
    offWhite: 'var(--color-tertiary)'
}

// Helpers 
export const getCreamColor = ({
    theme: {
        colors: { cream }
    }
}) => cream

export const getDarkBlue = ({
    theme: {
        colors: { darkBlue }
    }
}) => darkBlue

export const getDarkTextColor = ({
    theme: {
        textColors: { dark }
    }
}) => dark

export const getPrimaryColor = ({
    theme: {
        colors: { primary }
    }
}) => primary

export const getTertiaryColor = ({
    theme: {
        colors: { tertiary}
    }
}) => tertiary