import React, { useEffect, useState }  from 'react';
import { Select } from 'antd';

import { getTags } from '../../api/adverts';
import { useSelector, useDispatch } from 'react-redux';
import { advertsTags } from '../../store/actions';
import { getLatestTags } from '../../store/selectors';

const { Option } = Select;

function TagsSelect (props) {
 
 
  const dispatch = useDispatch();
  const setTags = tags=> dispatch(advertsTags(tags));
  const tags = useSelector(getLatestTags);
 
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
        {tags && tags.result.map(tag => <Option key={tag}>{tag}</Option>)}
      </Select>
    );
  
}

export default TagsSelect;