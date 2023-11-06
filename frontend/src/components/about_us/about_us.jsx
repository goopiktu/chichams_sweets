import NavigationBar from "../navbar/navbar";
import Container from "react-bootstrap/Container";

import Cake1 from "../cake_display/assets/Estrel1.jpg";
import Cake2 from "../cake_display/assets/Estrel2.jpg";

import './about_us.css';
function AboutUs(){
        return(
                <div>
                        <NavigationBar/>

                        <Container className="media">
                                <img className="design-image-1" src={Cake1} width={550} height={646}/>
                                <div className="design-text-1">
                                        <p>
                                                Lorem ipsum dolor sit amet consectetur. Ut aliquam nisi urna vitae mauris molestie. Ridiculus leo id donec ac. Rhoncus dictumst at in lectus arcu amet lectus. Consectetur quis morbi at cursus turpis et. Duis facilisis nunc nullam enim quis eu cursus velit aliquet. Justo mattis aliquam pretium non faucibus. Habitant porta sodales risus risus ornare lorem diam.
                                                Lorem ipsum dolor sit amet consectetur. Ut aliquam nisi urna vitae mauris molestie. Ridiculus leo id donec ac. Rhoncus dictumst at in lectus arcu amet lectus. Consectetur quis morbi at cursus turpis et. Duis facilisis nunc nullam enim quis eu cursus velit aliquet. Justo mattis aliquam pretium non faucibus. Habitant porta sodales risus risus ornare lorem diam.
                                                Lorem ipsum dolor sit amet consectetur. Ut aliquam nisi urna vitae mauris molestie. Ridiculus leo id donec ac. Rhoncus dictumst at in lectus arcu amet lectus. Consectetur quis morbi at cursus turpis et. Duis facilisis nunc nullam enim quis eu cursus velit aliquet. Justo mattis aliquam pretium non faucibus. Habitant porta sodales risus risus ornare lorem diam.
                                        </p>
                                </div>
                        </Container>

                        <Container className="media">
                                <div className="design-text-2">
                                        <p>
                                                Lorem ipsum dolor sit amet consectetur. Ut aliquam nisi urna vitae mauris molestie. Ridiculus leo id donec ac. Rhoncus dictumst at in lectus arcu amet lectus. Consectetur quis morbi at cursus turpis et. Duis facilisis nunc nullam enim quis eu cursus velit aliquet. Justo mattis aliquam pretium non faucibus. Habitant porta sodales risus risus ornare lorem diam.
                                                Lorem ipsum dolor sit amet consectetur. Ut aliquam nisi urna vitae mauris molestie. Ridiculus leo id donec ac. Rhoncus dictumst at in lectus arcu amet lectus. Consectetur quis morbi at cursus turpis et. Duis facilisis nunc nullam enim quis eu cursus velit aliquet. Justo mattis aliquam pretium non faucibus. Habitant porta sodales risus risus ornare lorem diam.
                                                Lorem ipsum dolor sit amet consectetur. Ut aliquam nisi urna vitae mauris molestie. Ridiculus leo id donec ac. Rhoncus dictumst at in lectus arcu amet lectus. Consectetur quis morbi at cursus turpis et. Duis facilisis nunc nullam enim quis eu cursus velit aliquet. Justo mattis aliquam pretium non faucibus. Habitant porta sodales risus risus ornare lorem diam.
                                        </p>
                                </div>
                                <img className="design-image-2" src={Cake2} width={550} height={646}/>
                        </Container>
                </div>
        );
}

export default AboutUs
