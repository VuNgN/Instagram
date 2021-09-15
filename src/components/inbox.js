import React from 'react';
import { Row, Col } from 'reactstrap';
import "../css/inbox.css";

export default function Inbox() {
    return (
        <div className="Inbox">
            <Row>
                <Col xl='5'>
                    <div className="inbox__left">
                        <div className="inbox__header">
                            <p className="inbox-header__user">vu_.nguyen_</p>
                            <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.49998 8C7.23115 8 6.96235 7.90396 6.75739 7.71229L0.307713 1.67776C-0.102571 1.29388 -0.102571 0.671503 0.307713 0.287787C0.71783 -0.095929 1.3829 -0.095929 1.79322 0.287787L7.49998 5.62748L13.2068 0.287974C13.617 -0.0957425 14.2821 -0.0957425 14.6921 0.287974C15.1026 0.67169 15.1026 1.29407 14.6921 1.67794L8.24256 7.71248C8.0375 7.90418 7.76871 8 7.49998 8Z" fill="black" />
                            </svg>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.151 15.5816C21.8209 15.5816 21.5533 15.8505 21.5533 16.1823V21.5163C21.5521 22.5112 20.7501 23.3175 19.7601 23.3185H2.98862C1.99864 23.3175 1.19661 22.5112 1.19545 21.5163V5.86148C1.19661 4.86674 1.99864 4.06042 2.98862 4.05925H8.29575C8.6259 4.05925 8.89347 3.79032 8.89347 3.45851C8.89347 3.12693 8.6259 2.85776 8.29575 2.85776H2.98862C1.33881 2.85964 0.00186789 4.20334 0 5.86148V21.5165C0.00186789 23.1746 1.33881 24.5183 2.98862 24.5202H19.7601C21.4099 24.5183 22.7469 23.1746 22.7488 21.5165V16.1823C22.7488 15.8505 22.4812 15.5816 22.151 15.5816Z" fill="black" />
                                <path d="M22.512 1.31202C21.4615 0.256263 19.7585 0.256263 18.708 1.31202L8.04429 12.0297C7.9712 12.1031 7.91844 12.1942 7.89088 12.2941L6.48857 17.3824C6.4309 17.591 6.4895 17.8144 6.64174 17.9676C6.7942 18.1206 7.01648 18.1795 7.22405 18.1218L12.2867 16.7122C12.3862 16.6845 12.4768 16.6315 12.5499 16.558L23.2134 5.84013C24.2622 4.78366 24.2622 3.07342 23.2134 2.01696L22.512 1.31202ZM9.34667 12.4201L18.0741 3.64835L20.8888 6.47724L12.1611 15.249L9.34667 12.4201ZM8.78443 13.5541L11.0331 15.8143L7.92264 16.6805L8.78443 13.5541ZM22.3682 4.99064L21.7343 5.62776L18.9194 2.79863L19.5535 2.16151C20.137 1.57508 21.0831 1.57508 21.6665 2.16151L22.3682 2.86645C22.9507 3.45358 22.9507 4.40374 22.3682 4.99064Z" fill="black" />
                            </svg>
                        </div>
                        <div className="inbox_nav">
                            <p className="inbox-nav__primary active">PRIMARY</p>
                            <p className="inbox-nav__GENERAL">GENERAL</p>
                        </div>
                        <div className="inbox__users">
                            <div className="inbox-user__item">
                                <div className="inbox-user__img"></div>
                                <div className="inbox-user__name">
                                    <div className="inbox-user__title"></div>
                                    <div className="inbox-user__discription"></div>
                                </div>
                            </div>
                            <div className="inbox-user__item">
                                <div className="inbox-user__img"></div>
                                <div className="inbox-user__name">
                                    <div className="inbox-user__title"></div>
                                    <div className="inbox-user__discription"></div>
                                </div>
                            </div>
                            <div className="inbox-user__item">
                                <div className="inbox-user__img"></div>
                                <div className="inbox-user__name">
                                    <div className="inbox-user__title"></div>
                                    <div className="inbox-user__discription"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xl='7'>
                    <div className="inbox__right">
                        <div className="noMessages">
                            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.1947 34.526L72 35.9675L40.6831 54.7174M22.1947 34.526L40.6831 54.7174M22.1947 34.526C22.0033 34.9818 21.9537 35.4837 22.0523 35.9675C22.1509 36.4513 22.3932 36.895 22.7481 37.2415L40.6831 54.7174M22.1947 34.526C22.3861 34.0703 22.7106 33.6816 23.1266 33.4097C23.5426 33.1378 24.0311 32.9951 24.5295 33L74.3688 33.7091C74.8353 33.6848 75.2994 33.7902 75.7084 34.0135C76.1175 34.2368 76.4553 34.5691 76.6835 34.9727C76.9118 35.3763 77.0214 35.8351 76.9999 36.2971C76.9784 36.7592 76.8267 37.2061 76.562 37.5872L51.5685 79.6304C51.3392 80.0838 50.9753 80.4567 50.5255 80.699C50.0758 80.9414 49.5619 81.0415 49.053 80.986M40.6831 54.7174L49.053 80.986M40.6831 54.7174L74.3688 37.2415L49.053 80.986M40.6831 54.7174L46.8957 79.1207C47.0198 79.6126 47.2931 80.0551 47.6788 80.3885C48.0645 80.722 48.544 80.9305 49.053 80.986M98 50C98 76.5097 76.5097 98 50 98C23.4903 98 2 76.5097 2 50C2 23.4903 23.4903 2 50 2C76.5097 2 98 23.4903 98 50Z" stroke="black" stroke-width="3" />
                            </svg>
                            <p className="inbox-right__title">Your Messages</p>
                            <p className="inbox-right__description">Send private photos and messages to a friend or group</p>
                            <button className="inbox-right__btn">
                                Send Message
                            </button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}