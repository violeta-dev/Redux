import React, { useEffect, useState }  from 'react';
import { Link } from 'react-router-dom';
import { Empty, Button, Spin, List, Divider } from 'antd';

import storage from '../../../utils/storage';
import { getAdverts } from '../../../api/adverts';
import Layout from '../../layout';
import FiltersForm, { defaultFilters } from './FiltersForm';
import AdvertCard from './AdvertCard';

import { useSelector, useDispatch } from 'react-redux';
import { advertsLoaded } from '../../../store/actions';
import { getLatestAdverts } from '../../../store/selectors';



function AdvertsPage (props) {
 /*state = {
    adverts: null,
    loading: false,
    error: null,
    filters: storage.get('filters') || defaultFilters,
  };*/


  const [loading,setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters,setFilters] = useState(storage.get('filters')|| defaultFilters); 

  

  const formatFilters = () => {
   const {
      filters: { name, sale, price, tags },
    } = this.state;
    
   
    const filters = {};
    if (name) {
      filters.name = name;
    }
    if (['sell', 'buy'].includes(sale)) {
      filters.sale = sale === 'sell';
    }
    if (price.length) {
      filters.price = price.join('-');
    }
    if (tags.length) {
      filters.tags = tags.join(',');
    }

    return filters;
  };

  const dispatch = useDispatch();
  const setAdverts = adverts=> dispatch(advertsLoaded(adverts));
  const adverts = useSelector(getLatestAdverts);



 /*const getAdverts = async() => {
    setLoading(true);
    setError(null);
  
    try {
     const result =  await getAdverts(formatFilters())
     .then(() =>
       setLoading(false),
       setAdverts(result),
     )
    }catch (error){
        setLoading(false);
        setError(error);

     }

}*/
    


  

  
 
  


  /* getAdverts = () => {
    this.setState({ loading: true, error: null });
    getAdverts(this.formatFilters())
      .then(({ result }) =>
        this.setState({ loading: false, adverts: result.rows }),
      )
      .catch(error => this.setState({ loading: false, error }));
  };*/ 

  const handleSubmit = filters => {
    storage.set('filters', filters);
    setFilters({ filters });
  };

  const renderLoading = () => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Spin size="large" />
    </div>
  );

  const renderError = () => {
    //const { error } = this.state;
    return (
      <Empty
        description={<span style={{ color: '#ff4d4f' }}>{`${error}`}</span>}
      >
        <Button type="primary" danger onClick={getAdverts}>
          Reload
        </Button>
      </Empty>
    );
  };

  const renderEmpty = () => {
    //const { filters } = this.state;
    const isFiltered =
      JSON.stringify(filters) !== JSON.stringify(defaultFilters);
    return (
      <Empty description={<span>No adverts here!</span>}>
        {isFiltered ? (
          <span>Refine your search</span>
        ) : (
          <Link to="/adverts/new">
            <Button type="primary">Create the first one</Button>
          </Link>
        )}
      </Empty>
    );
  };

  const renderAdvert = advert => {
    console.log(advert)  
    return (
      <List.Item>
        <Link to={`/adverts/${advert._id}`}>
          <AdvertCard {...advert} />
        </Link>
      </List.Item>
    );
  };

  const renderAdverts = () => {
   // const { adverts, loading, error } = this.state;
    console.log(adverts)
    

    if (loading) {
      return renderLoading();
    }

    if (error) {
      return renderError();
    }

    if (!adverts) {
      return renderEmpty;
    }

    /*if (!adverts.length) {
      return renderEmpty();
    }*/
    
    return (
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={adverts.result.rows}
        renderItem={renderAdvert}
      />
    );
  };

 /* componentDidMount() {
    getAdverts();
  }*/

  useEffect(() => {
    if (!adverts) {
      getAdverts().then(setAdverts);
    }
 
    return () => {
      // cancel request
      console.log('cancel request');
    };
  }, []);

 /*useEffect(() => {
    //const { filters } = this.state;
    if (JSON.stringify(filters)) {
      getAdverts().then(setAdverts);
    }
  });*/
  /*componentDidUpdate(prevProps, { filters: prevFilters }) {
    const { filters } = this.state;
    if (JSON.stringify(filters) !== JSON.stringify(prevFilters)) {
      getAdverts();
    }
  }*/

  
    //const { filters } = this.state;
    return (
      <Layout title="Adverts list">
        <Divider>Filter your adverts</Divider>
        <FiltersForm initialFilters={filters} onSubmit={handleSubmit} />
        <Divider>Adverts</Divider>
        {renderAdverts()}
      </Layout>
    );
  }


export default AdvertsPage;
