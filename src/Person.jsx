import './App.css'

function Person(props) {
    return (
      <div className='personStyle'>
        <h1>{props.name}</h1>
        <h2>{props.age}</h2>
        <h2>{props.job}</h2>
        <img src={props.img} alt='some pic' width="300" height='300' />
      </div>
    );
  }

  export default Person;