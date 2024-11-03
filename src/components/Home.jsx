import Banner from './Banner';
import ExploreGadgets from './ExploreGadgets';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='min-h-screen'>
            <ExploreGadgets></ExploreGadgets>

            </div>
        </div>
    );
};

export default Home;