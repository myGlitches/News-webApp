import { NewsProvider } from './context/NewsContext';
import Content from './components/content/Content'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  return (
    <NewsProvider>
    <div className='container'>
    <Sidebar />
    <Content/>
    </div>
    </NewsProvider>
  );
}

export default App;
