import ReactDom from 'react-dom/client';
import Page from './components/Page';
import './css/index.css';

const root = ReactDom.createRoot(document.getElementById('root')!);

root.render(<Page />);
