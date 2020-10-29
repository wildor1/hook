import React,{useState, useEffect, useLayoutEffect} from 'react';
import ReactDOM from 'react-dom';
import UseRef from './useRef'
import UseContext from './useContext'
import UseReducer from './useReducer'
import Props from './props'



const App = (props) => {
  //创建了一个叫hook的变量，sethook方法可以改变这个变量,初始值为‘react hook 是真的好用啊’
  const [ hook, sethook ] = useState('react hook 是真的好用啊');
  const [ name ] = useState('baby张');
  return (
    <header>
      <h3>UseEffect,useState</h3>
      <Child hook={hook} name={name} />
      {/**上面的变量和下面方法也是可以直接使用的 */}
      <button onClick={() => sethook('我改变了react hook 的值' + new Date().getTime())}>改变hook</button>
      <h3>如下是useRef</h3>
      <UseRef />
      <h3>如下是useContext</h3>
      <UseContext />
      <h3>如下是useReducer</h3>
      <UseReducer />
      <h3>如下是props</h3>
      <Props />
    </header>
  );
};

const Child = (props) => {
  const [ newhook, setnewhook ] = useState(props.hook);
  //这样写可以代替以前的componentDidMount，第二个参数为空数组，表示该useEffect只执行一次
  useEffect(() => {
    console.log('first componentDidMount');
  }, []);

  //第二个参数，数组里是hook,当hook变化时，useEffect会触发，当hook变化时，先销毁再执行第一个函数。
  useEffect(
    () => {
      setnewhook(props.hook + '222222222');
      console.log('useEffect');
      return () => {
        console.log('componentWillUnmount ');
      };
    },
    [ props.hook ]     //click改变了hook的值
  );

  //useLayoutEffect 强制useeffect的执行为同步，并且先执行useLayoutEffect内部的函数
  useLayoutEffect(
    () => {
      console.log('useLayoutEffect');
      return () => {
        console.log('useLayoutEffect componentWillUnmount');
      };
    },
    [ props.hook ]
  );

  return (
    <div>
      <p>{props.name}</p>
      {newhook}
    </div>
  );
};

ReactDOM.render(

    <App />,
  document.getElementById('root')
);
