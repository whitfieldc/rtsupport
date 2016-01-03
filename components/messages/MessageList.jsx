import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component{
  render(){
    return(
      <ul>{
        this.props.messages.map( mess => {
          return <Message
            key = {mess.id}
            message={mess}
            {...this.props} />
        })
      }</ul>
    )
  }

}

MessageList.propTypes = {
  messages: React.PropTypes.array.isRequired

}

export default MessageList