import Layout from '../components/layouts'
import Banner from '../components/banner/Banner'
import Advertisement from '../components/ads/Advertisement'
import Product from '../components/product/Product'

const Home = () => {

    return (
        <Layout>
            <Banner />
            <Advertisement />
            <Product />
        </Layout>
    )
}

export default Home