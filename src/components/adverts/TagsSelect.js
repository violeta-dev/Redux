import React, { useEffect, useState }  from 'react';
import { Select } from 'antd';

import { getTags } from '../../api/adverts';
import { useSelector, useDispatch } from 'react-redux';
import { advertsTags } from '../../store/actions';
import { getLatestTags } from '../../store/selectors';

const { Option } = Select;

function TagsSelect (props) {
  /*state = {
    tags: null,
  };*/
 
  const dispatch = useDispatch();
  const setTags = tags=> dispatch(advertsTags(tags));
  const tags = useSelector(getLatestTags);
 /*componentDidMount() {
    getTags().then(({ result: tags }) => this.setState({ tags }));
  }*/
  useEffect(() => {
    
      getTags().then(setTags);

  }, []);

  
    //const { tags } = this.state;
    return (
      <Select
        allowClear
        disabled={!tags}
        mode="multiple"
        placeholder="Select tags"
        style={{ width: '100%' }}
        {...props}
      >
        {tags && tags.map(tag => <Option key={tag}>{tag}</Option>)}
      </Select>
    );
  
}

export default TagsSelect;