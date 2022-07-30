import React , {Component, Fragment} from 'react';
import './Home.css';

class Home extends Component {
    render() {
        return(
            <Fragment>
            <div className="wrapper">
                <section className="description">
                    <h3 className="title-head">Hello World Lorem, ipsum.</h3>
                    <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing el.</p>
                </section>
                <section className="img-ilustration">
                    <img src="./img-header.svg" alt="" />
                </section>
            </div>
            <div className="about">
                <div className="img-about">
                    <img src="./img-header.svg" alt="" />
                </div>
                <div className="description-about">
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea porro velit minima quo ipsam corporis eligendi, dolore deserunt pariatur animi. Obcaecati rem et impedit quia minus ad est quos labore! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus blanditiis molestiae sint, corrupti quis cumque facere, maxime porro expedita, ratione tempora ipsum rem impedit! Provident ad dolorem hic incidunt, blanditiis, molestias doloremque aliquam velit id similique.</p>
                </div>
            </div>
            </Fragment>
        )
    }
}

export default Home;