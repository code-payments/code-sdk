type Color = 'reset' | 'cyan' | 'white' | 'gray';

const colors = {
    reset: '\x1b[0m',
    cyan: '\x1b[36m',
    white: '\x1b[1m\x1b[37m',
    gray: '\x1b[90m'
} satisfies { [key in Color]: string };

function colorize(text: string, color: Color): string {
    return `${colors[color] || colors.reset}${text}${colors.reset}`;
}

// More specific functions based on the given color
function cyan(text: string): string {
    return colorize(text, 'cyan');
}

function whiteBold(text: string): string {
    return colorize(text, 'white');
}

function gray(text: string): string {
    return colorize(text, 'gray');
}

export {
    cyan,
    whiteBold,
    gray
}