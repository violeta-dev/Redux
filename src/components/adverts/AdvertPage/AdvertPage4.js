import React, { useEffect, useState } from 'react';
import T from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Divider, Image, Typography, Statistic, Row, Col } from 'antd';

import { getAdvert, deleteAdvert } from '../../../api/adverts';
import Layout from '../../layout';
import { ConfirmationButton } from '../../shared';
import { DeleteOutlined } from '@ant-design/icons';
import placeholder from '../../../assets/photo-placeholder.png';
import Tags from '../Tags';
import { formatter } from '../../../utils/numbers';
import { useSelector, useDispatch } from 'react-redux';
import { advertLoaded, advertDeleted } from '../../../store/actions';
import { getLatestAdvert } from '../../../store/selectors';

const { Title } = Typography;

function AdvertPage (props){
 /* state = {
    advert: null,
    error: null,
  };*/

  //const [advert,setAdvert] = useState(null);
  const [error, setError] = useState(null);

  const advert = useSelector(getLatestAdvert);
  const getAdvertId = () => props.match.params.id;
   console.log(getAdvertId())                         
 //getAdvertId = () => this.props.match.params.id;
  const dispatch = useDispatch();
  const advertId = getLatestAdvert()
  const setAdvert = (advert) => dispatch(advertLoaded(advert))
  
  const handleDeleteClick = (advertId) =>
    dispatch(advertDeleted(advertId))


 /*handleDeleteClick = () => {
    const { history } = this.props;
    deleteAdvert(this.getAdvertId()).then(() => history.push('/'));
  };*/

  /*getAdvert = async () => {    
    try {
      const { result } = await getAdvert(this.getAdvertId());
      if (!result) {
        const error = { message: 'Not found' };
        throw error;
      }
      this.setState({ advert: result });
    } catch (error) {
      this.setState({ error });
    }
  };*/

 const renderAdvert = () => {
    //const { advert, error } = this.state;
    console.log(advert)
    if (error) {
      return <Redirect to="/404" />;
    }

    if (!advert) {
      return null;
    }

    const { name, price, tags, sale, photoUrl } = advert;

    return (
      <Row>
        <Col span={24}>
          <Title level={2}>
            {name} - {sale ? 'Sell' : 'Buy'}
          </Title>
        </Col>
        <Col span={12}>
          <Statistic title="Price" value={price} formatter={formatter} />
          <div style={{ marginTop: 20 }}>
            <span style={{ marginRight: 5 }}>Tags</span>
            <Tags tags={tags} />
          </div>
        </Col>
        <Col span={12}>
          <Image
            src={photoUrl}
            alt={name}
            width={300}
            height={300}
            fallback={placeholder}
          />
        </Col>
        <ConfirmationButton
          danger
          icon={<DeleteOutlined />}
          confirmationProps={{
            title: 'Delete advert?',
            content: 'Are you sure you want to delete this advert?',
            okText: 'Yes',
            cancelText: 'No',
            okButtonProps: {
              danger: true,
            },
          }}
          onConfirm={handleDeleteClick}
          style={{ marginTop: 20 }}
          block
        >
          Delete
        </ConfirmationButton>
      </Row>
    );
  };

  useEffect(() => {
    if (!advert) {
      getAdvert().then(setAdvert);
      console.log(advert)
    }
 
    return () => {
      // cancel request
      console.log('cancel request');
    };
  }, []);
  /*componentDidMount() {
    getAdvert();
  }*/

  
    return (
      <Layout title="Advert detail">
        <Divider>Detail of your advert</Divider>
        {renderAdvert()}
      </Layout>
    );
  }


AdvertPage.propTypes = {
  match: T.shape({ params: T.shape({ id: T.string.isRequired }).isRequired })
    .isRequired,
};

export default AdvertPage;
