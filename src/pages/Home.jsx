import Layout from '../components/layouts'
import Banner from '../components/banner/Banner'
import Advertisement from '../components/ads/Advertisement'
import Product from '../components/product/Product'
import Service from '../components/service/Service'
import Feedback from './Feedback'

const Home = () => {

    return (
        <Layout>
            <Banner />
            <Service />
            <Product />
            <Advertisement />
            <Feedback />
        </Layout>
    )
}

export default Home