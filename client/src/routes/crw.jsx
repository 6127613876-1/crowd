import { Footer, Navbar, Welcome } from "../components";
import CardSection from '../components/CardSection';
import FundraisingInfoSection from '../components/FundraisingInfoSection';

const crw = () => {
    return (
        <div className="min-h-screen">
                <div className="gradient-bg-welcome">
                    <Navbar />
                    <Welcome />
                </div>
                <CardSection/>
                <FundraisingInfoSection />
                <br /><br /><br /><br />
                <Footer />
        </div>
    )
}

export default crw;
