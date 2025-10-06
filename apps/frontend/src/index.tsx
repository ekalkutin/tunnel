import { createRoot } from 'react-dom/client';
import '@ant-design/v5-patch-for-react-19';

import { App } from './App';

const container = document.getElementById('root')!;

const root = createRoot(container);
root.render(<App />);
