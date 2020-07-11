import React from "react";

class UserItem extends React.Component {
  // You can also do - "class UserList extends Component",
  // just that you'd have to import React this way -
  // import React, {Component} from "react".
  

  render() {
    return (
      <div className='list-card'>
        <h1>{this.props.name}</h1>
        <h3>{this.props.email}</h3>
      </div>
    );
  }
}

export default UserItem;
