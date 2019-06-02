import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker'

const App = () => {
  return (
    <div className="ui container comments">
    <ApprovalCard>
      <CommentDetail author="Sam" timeAgo="Today at 4:44 PM" avatar={faker.image.avatar()} comment="Yeah, well put!"/>
    </ApprovalCard>
      <CommentDetail author="Jane" timeAgo="Today at 1:03 PM" avatar={faker.image.avatar()} comment="I'm inclined to agree, for sure!"/>
      <CommentDetail author="Ralph" timeAgo="Today at 10:34 AM" avatar={faker.image.avatar()} comment="Writing is on the wall :p"/>
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));