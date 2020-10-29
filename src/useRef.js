import React, { useState, useRef } from 'react';

const UseRef = () => {
  //这里useState绑定个input,关联一个状态name
  const [ name, setname ] = useState('baby张');
  const refvalue = useRef();// 先创建一个空的useRef
  function addRef() {
    console.log(refvalue.current);   //这个就是input
    refvalue.current.value = name;   //点击按钮时候给这个ref赋值
    // refvalue.current = name  //这样写时，即使ref没有绑定在dom上，值依然会存在创建的ref上，并且可以使用它
    console.log(refvalue.current.value);
  }
  return (
    <div>
      <input
        defaultValue={name}  //如果需要获取model的值并且还需要改变它的时候，就需要使用value结合onChange事件，仅获取用value
        onChange={(e) => {
          setname(e.target.value);
        }}
      />
      <button onClick={addRef}>给下面插入名字</button>
      <p>给我个UseRef名字：</p>
      <input ref={refvalue} />
    </div>
  );
};

export default UseRef;
