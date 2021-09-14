import React from 'react';
import { Row, Col } from 'reactstrap';
import '../../css/home/home.css';
import Post from './post';

export default function Home() {
    return (
        <div className="Home">
            <Row>
                <Col xl="8">
                    <div className="stories">
                        <div className="story__list">
                            <div className="story_space"></div>
                            <div className="story__item">
                                <div className="story-item__image">
                                </div>
                                <p className="story-item__name">
                                    chimcanhcut._  a
                                </p>
                            </div>
                        </div>
                    </div>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </Col>
                <Col xl="4">
                <div className="footer">
                    <div className="footer__user">
                        <div className="footer-user__img"></div>
                        <div className="footer-user__name">
                            <p className="footer-user__title">vu_.nguyen_</p>
                            <p className="footer-user__description">Nguyen Vu</p>
                        </div>
                        <div className="footer-user__btn">Switch</div>
                    </div>
                    <div className="footer__suggestion">
                        <p className="footer-suggestion__content">Suggestions For You</p>
                        <p className="footer-suggestion__btn">See All</p>
                    </div>
                    <div className="footer-suggestion__users">
                        <div className="footer__user">
                            <div className="footer-user__img"></div>
                            <div className="footer-user__name">
                                <p className="footer-user__title">namhyy29</p>
                                <p className="footer-user__description">Followed by nktu_1709 + 5 more</p>
                            </div>
                            <div className="footer-user__btn">Follow</div>
                        </div>
                        <div className="footer__user">
                            <div className="footer-user__img"></div>
                            <div className="footer-user__name">
                                <p className="footer-user__title">zuzi_lep</p>
                                <p className="footer-user__description">New to Instagram</p>
                            </div>
                            <div className="footer-user__btn">Follow</div>
                        </div>
                        <div className="footer__user">
                            <div className="footer-user__img"></div>
                            <div className="footer-user__name">
                                <p className="footer-user__title">yusanop</p>
                                <p className="footer-user__description">New to Instagram</p>
                            </div>
                            <div className="footer-user__btn">Follow</div>
                        </div>
                        <div className="footer__user">
                            <div className="footer-user__img"></div>
                            <div className="footer-user__name">
                                <p className="footer-user__title">yud_0204</p>
                                <p className="footer-user__description">Follows you</p>
                            </div>
                            <div className="footer-user__btn">Follow</div>
                        </div>
                        <div className="footer__user">
                            <div className="footer-user__img"></div>
                            <div className="footer-user__name">
                                <p className="footer-user__title">quoctuong901</p>
                                <p className="footer-user__description">Suggested for you</p>
                            </div>
                            <div className="footer-user__btn">Follow</div>
                        </div>
                    </div>
                    <p className="licenses">© 2021 INSTAGRAM FROM FACEBOOK cover by Vu Nguyen</p>
                </div>
                </Col>
            </Row>
        </div>
    );
}