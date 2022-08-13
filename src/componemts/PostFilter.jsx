import React from 'react';
import MyInput from './UI/Input/MyInput';
import MySelect from './UI/Select/MySelect';

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({...filter, query: e.target.value})}
        placeholder="Search"
      />
      <MySelect
        value={filter.sort}
        onChange={sortedPost => setFilter({...filter, sort: sortedPost})}
        defaultValue="Sort"
        options={[
          { value: 'title', name: 'By name' },
          { value: 'body', name: 'By discription' },
        ]}
      />
    </div>
  );
};

export default PostFilter
