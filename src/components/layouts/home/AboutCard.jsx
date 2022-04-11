import React , { useState , Fragment } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import CardModal from '../CardModal';

const AboutCard = props => {
    const data = props.data;
    const [modalShow, setModalShow] = useState(false);
    return (
        <Fragment>
        <section className="about_card_container">
            <div className="card-mine">
                    {
                        data.slice(0).map((item,index) => (
                            <div key={index}>
                                <div className="sc-card-product" style={{backgroundColor:"var(--primary-color5)"}}>
                                    <div className="card-media">
                                        <Link to="/gacha-details"><img src={item.img} alt="axies" /></Link>
                                        <Link to="/login" className="wishlist-button heart"><span className="number-like">{item.wishlist}</span></Link>
                                        <div className="coming-soon">{item.feature}</div>
                                    </div>
                                    <div className="card-title">
                                        <h5 className="style2"><Link to="/gacha-details">"{item.title}"</Link></h5>
                                        <div className="tags">{item.tags}</div>
                                    </div>
                                    <div className="meta-info">
                                        <div className="author">
                                            <div className="avatar">
                                                <img src={item.imgAuthor} alt="axies" />
                                            </div>
                                            <div className="info">
                                                <span>Owned By</span>
                                                <h6> <Link to="/authors-02">{item.nameAuthor}</Link> </h6>
                                            </div>
                                        </div>
                                        <div className="price">
                                            <span>Current Bid</span>
                                            <h5> {item.price}</h5>
                                        </div>
                                    </div>
                                    <div className="card-bottom">
                                        <button className="sc-button style bag fl-button pri-3 no-bg" onClick={() => setModalShow(true)}><span>Place Bid</span></button>
                                        <Link to="/activity-01" className="view-history reload">View History</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
            </div>
        </section>
        <CardModal
        show={modalShow}
        onHide={() => setModalShow(false)}
         />
        </Fragment>
    );
}



AboutCard.propTypes = {
    data: PropTypes.array.isRequired,
}


export default AboutCard;
