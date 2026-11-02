// Generates Material 3 colour tokens from a seed colour and injects them as
// --md-sys-color-* CSS variables (light + dark), which @material/web reads.
import {
  argbFromHex,
  hexFromArgb,
  Hct,
  DynamicColor,
  MaterialDynamicColors,
  SchemeTonalSpot,
} from '@material/material-color-utilities';

const SEED = '#5C6670'; // neutral slate — minimalistic, no saturated hues

const kebab = (s) => s.replace(/[A-Z]/g, (c) => '-' + c.toLowerCase());

function tokens(isDark) {
  const scheme = new SchemeTonalSpot(Hct.fromInt(argbFromHex(SEED)), isDark, 0);
  return Object.entries(MaterialDynamicColors)
    .filter(([, v]) => v instanceof DynamicColor)
    .map(([k, v]) => `--md-sys-color-${kebab(k)}:${hexFromArgb(v.getArgb(scheme))};`)
    .join('');
}

// Clean, minimalistic surface stack
const overrides = `
  --md-sys-color-surface: #fafafa;
  --md-sys-color-on-surface: #1a1a1a;
  --md-sys-color-on-surface-variant: #555555;
  --md-sys-color-surface-container-lowest: #ffffff;
  --md-sys-color-surface-container-low: #f5f5f5;
  --md-sys-color-surface-container: #f0f0f0;
  --md-sys-color-surface-container-high: #eaeaea;
  --md-sys-color-surface-container-highest: #e4e4e4;
  --md-sys-color-outline-variant: #d4d4d4;
  --md-sys-color-primary-container: #f0f0f0;
  --md-sys-color-on-primary-container: #1a1a1a;
  --md-sys-color-secondary-container: #e8e8e8;
  --md-sys-color-on-secondary-container: #2a2a2a;
  --md-sys-color-tertiary-container: #f5f3f0;
  --md-sys-color-on-tertiary-container: #2a2a2a;
`;

export function applyTheme() {
  const css = `:root{${tokens(false)}${overrides}color-scheme:light}`;
  const el = document.createElement('style');
  el.textContent = css;
  document.head.appendChild(el);
}
