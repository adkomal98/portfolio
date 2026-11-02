import { createRoot } from 'react-dom/client';
import '@material/web/button/filled-button.js';
import '@material/web/button/filled-tonal-button.js';
import '@material/web/button/text-button.js';
import '@material/web/iconbutton/filled-tonal-icon-button.js';
import '@material/web/icon/icon.js';
import '@material/web/chips/chip-set.js';
import '@material/web/chips/assist-chip.js';
import '@material/web/divider/divider.js';
import '@material/web/ripple/ripple.js';
import '@material/web/focus/md-focus-ring.js';
import { applyTheme } from './theme.js';
import App from './App.jsx';
import './styles.css';

applyTheme();
createRoot(document.getElementById('root')).render(<App />);
