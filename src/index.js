import ReactDOM from 'react-dom'
import {HardChoiceButton} from './react/stateMachine_button.jsx';
ReactDOM.render(<HardChoiceButton message={'haha'} timer={2} action={()=> {alert('hehe')}} />,document.getElementById('root'))
