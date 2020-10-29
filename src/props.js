import React from 'react'
//props需要一层一层地传递

const B=(props)=>{
  return(
    <div>{props.name}</div>
  )
};

const A=(props)=>{
  return(
    <div>{props.name}
    <B name={props.name}/>
      {props.children[1]}
    </div>
  )
};

class Props extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'jay'};
  }
  render(){
    return(
      <div>
        你好
        <A name={this.state.name}>
          <div>我是children1</div>
          <div>
            我是children2
            <div>我是children2.1</div>
          </div>

        </A>
      </div>
          )
  }
}
export default Props
