export function generatePalette(baseHex) {
    const palette = {};
    const mix = (c1, c2, w) => {
        const parse = (c) => parseInt(c.slice(1), 16);
        const r1 = (parse(c1) >> 16) & 255;
        const g1 = (parse(c1) >> 8) & 255;
        const b1 = parse(c1) & 255;
        const r2 = (parse(c2) >> 16) & 255;
        const g2 = (parse(c2) >> 8) & 255;
        const b2 = parse(c2) & 255;
        const r = Math.round(r1 + (r2 - r1) * w);
        const g = Math.round(g1 + (g2 - g1) * w);
        const b = Math.round(b1 + (b2 - b1) * w);
        return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)}`;
    };

    return {
        50: mix(baseHex, '#ffffff', 0.95),
        100: mix(baseHex, '#ffffff', 0.9),
        200: mix(baseHex, '#ffffff', 0.75),
        300: mix(baseHex, '#ffffff', 0.6),
        400: mix(baseHex, '#ffffff', 0.3),
        500: baseHex,
        600: mix(baseHex, '#000000', 0.1),
        700: mix(baseHex, '#000000', 0.3),
        800: mix(baseHex, '#000000', 0.5),
        900: mix(baseHex, '#000000', 0.7),
        950: mix(baseHex, '#000000', 0.85),
    };
}

export function getContrastColor(hexColor) {
    const r = parseInt(hexColor.substr(1, 2), 16);
    const g = parseInt(hexColor.substr(3, 2), 16);
    const b = parseInt(hexColor.substr(5, 2), 16);
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    // Increase threshold to prefer white text on medium-colored backgrounds
    return (yiq >= 160) ? '#0f172a' : '#ffffff';
}

export function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r} ${g} ${b}`; // Returns "R G B" format for Tailwind opacity support
}

export function applyTheme(primaryHex, accentHex) {
    const root = document.documentElement;

    const primaryPalette = generatePalette(primaryHex);
    const accentPalette = generatePalette(accentHex);

    const setPalette = (name, palette) => {
        Object.entries(palette).forEach(([shade, hex]) => {
            // Set Hex variable
            root.style.setProperty(`--color-${name}-${shade}`, hex);
            // Set RGB variable for opacity support (optional)
            root.style.setProperty(`--color-${name}-${shade}-rgb`, hexToRgb(hex));
        });
    };

    setPalette('primary', primaryPalette);
    setPalette('accent', accentPalette);

    // Set Contrast Colors
    root.style.setProperty('--color-on-primary', getContrastColor(primaryPalette[700]));
    root.style.setProperty('--color-on-accent', getContrastColor(accentPalette[700]));
}
