import ReactDOM from 'react-dom';
import CodeCell from './components/code-cell';
import TextEditor from './components/text-editor';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import { store } from './state';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        {/* <CodeCell/> */}
        <TextEditor></TextEditor>
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
