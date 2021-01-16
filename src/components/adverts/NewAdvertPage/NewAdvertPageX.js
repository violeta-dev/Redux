import React from 'react';
import { connect } from 'react-redux';
//import { Redirect } from 'react-router-dom';

import T from 'prop-types';
import { Alert, Divider } from 'antd';

import { createAdvert } from '../../../api/adverts';
import { advertCreated } from '../../../store/actions';
import Layout from '../../layout';
import NewAdvertForm from './NewAdvertForm';



class NewAdvertPage extends React.Component {
  state = {
    error: null,
  };

  handleSubmit = async advert => {
    const { history } = this.props;
    const {onAdvertCreated} = this.props
    this.resetError();
    try {
        const createdAdvert = await createAdvert(advert)
        .then(({ result: {rows:advert} }) => history.push(`/adverts/${advert._id}`))
        onAdvertCreated({...createdAdvert, _id: createdAdvert._id,})
       
        
       

    }catch (error){
        this.setState({ error });

    }  
  } 
  resetError = () => this.setState({ error: null });

  componentDidMount() {
    
  }


  render() {
    const { error } = this.state;
    return (
      <Layout title="New advert">
        <Divider>Create an advert</Divider>
        <NewAdvertForm onSubmit={this.handleSubmit} />
        {error && (
          <Alert
            afterClose={this.resetError}
            closable
            message={error}
            showIcon
            type="error"
          />
        )}
      </Layout>
    );
  }
}

NewAdvertPage.propTypes = {
  history: T.shape({ push: T.func.isRequired }).isRequired,
};

//export default NewAdvertPage;
export default connect(null, { onAdvertCreated: advertCreated })(NewAdvertPage);
