import React from 'react';
import postImage from '../../images/image1.jpg';
import '../../css/home/post.css'

export default function Post(props) {
    return (
        <div className="posts">
            <div className="posts__header">
                <div className="post-header__img">

                </div>
                <div className="post__name">
                    just.baby
                </div>
                <div className="post-header__option">
                    <p>...</p>
                </div>
            </div>
            {/* If you post more than one photo, add "many-pictures" class 
                If you post an image with the tag , add "tags-pictures" class
            */}
            <div className="posts__media">
                <img src={postImage} alt="" />
                <div className="post-media__next">
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.81205 5.53176L1.50969 0.191706C1.38705 0.068097 1.22334 0 1.04878 0C0.874224 0 0.710514 0.068097 0.587877 0.191706L0.197395 0.584873C-0.0566941 0.841066 -0.0566941 1.25745 0.197395 1.51326L4.64991 5.99751L0.192455 10.4867C0.0698176 10.6104 0.00210571 10.7751 0.00210571 10.9508C0.00210571 11.1267 0.0698176 11.2915 0.192455 11.4152L0.582936 11.8083C0.70567 11.9319 0.869283 12 1.04384 12C1.2184 12 1.38211 11.9319 1.50475 11.8083L6.81205 6.46336C6.93497 6.33936 7.00249 6.1738 7.0021 5.9978C7.00249 5.82112 6.93497 5.65566 6.81205 5.53176Z" fill="black" />
                    </svg>
                </div>
                <div className="post-media__back">
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.35226 6.00254L6.80974 1.51317C6.93248 1.38985 7 1.22498 7 1.04917C7 0.873268 6.93248 0.708488 6.80974 0.584976L6.41915 0.191805C6.29661 0.0680976 6.1328 0 5.95823 0C5.78367 0 5.62005 0.0680976 5.49741 0.191805L0.190066 5.53678C0.0669414 5.66068 -0.000481766 5.82624 2.59534e-06 6.00224C-0.000481766 6.17902 0.0668445 6.34439 0.190066 6.46839L5.49247 11.8082C5.61511 11.9319 5.77873 12 5.95339 12C6.12795 12 6.29157 11.9319 6.41431 11.8082L6.8048 11.415C7.0589 11.1591 7.0589 10.7425 6.8048 10.4867L2.35226 6.00254Z" fill="black" />
                    </svg>
                </div>
                <div className="post-media__tags">
                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 0C3.3458 0 2 1.4194 2 3.16406C2 4.90873 3.3458 6.32812 5 6.32812C6.6542 6.32812 8 4.90873 8 3.16406C8 1.4194 6.6542 0 5 0Z" fill="white" />
                        <path d="M8.73258 8.3952C7.91124 7.51563 6.82242 7.03125 5.66667 7.03125H4.33333C3.1776 7.03125 2.08876 7.51563 1.26742 8.3952C0.450111 9.27045 0 10.4258 0 11.6484C0 11.8426 0.149244 12 0.333333 12H9.66667C9.85076 12 10 11.8426 10 11.6484C10 10.4258 9.54989 9.27045 8.73258 8.3952Z" fill="white" />
                    </svg>
                </div>
            </div>
            <div className="post__footer">
                <div className="post-footer__interact">
                    <svg class="post-interact__icons" width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.85 0C16.575 0 14.4301 1.04637 13 2.74669C11.5698 1.04637 9.425 0 7.15 0C3.11987 0 0 3.13881 0 7.19344C0 12.1632 4.41988 16.1527 11.1147 22.2993L13 24L14.8853 22.2993C21.5801 16.1526 26 12.1631 26 7.19344C26 3.13881 22.8801 0 18.85 0ZM13.8022 20.5786L13.5386 20.8206L13 21.3064L12.4615 20.8207L12.1981 20.5789C9.047 17.6862 6.32556 15.188 4.5265 12.9543C2.77919 10.7847 2 9.008 2 7.19344C2 5.76438 2.52637 4.44775 3.48219 3.48619C4.43481 2.52781 5.73737 2 7.15 2C8.78337 2 10.3981 2.76044 11.4694 4.03406L13 5.85381L14.5306 4.03406C15.6019 2.76044 17.2166 2 18.85 2C20.2627 2 21.5652 2.52781 22.5179 3.48612C23.4736 4.44775 24 5.76431 24 7.19344C24 9.008 23.2208 10.7846 21.4736 12.9541C19.6746 15.1879 16.9533 17.6859 13.8022 20.5786Z" fill="black" />
                    </svg>
                    <svg class="post-interact__icons" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.784 16.017C21.581 14.467 22 12.741 22 11C22 4.935 17.065 0 11 0C4.935 0 0 4.935 0 11C0 17.065 4.935 22 11 22C12.742 22 14.468 21.581 16.018 20.785L20.758 21.97C20.838 21.99 20.919 22 21 22C21.262 22 21.518 21.897 21.707 21.707C21.955 21.458 22.056 21.098 21.97 20.757L20.784 16.017ZM18.751 16.127L19.625 19.625L16.127 18.75C15.88 18.689 15.618 18.724 15.396 18.848C14.055 19.602 12.534 20 11 20C6.037 20 2 15.962 2 11C2 6.038 6.037 2 11 2C15.963 2 20 6.038 20 11C20 12.534 19.602 14.054 18.849 15.395C18.724 15.618 18.688 15.88 18.751 16.127Z" fill="#231F20" />
                    </svg>
                    <svg class="post-interact__icons" width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3462 2.76319L4.11514 2.51943L10.1031 8.69103L20.3462 2.76319ZM11.2753 10.8583L13.3659 19.5384L21.6073 4.87505L11.2753 10.8583ZM24.76 0.354378C24.9805 0.342207 25.1999 0.394933 25.3932 0.506588C25.5866 0.618243 25.7463 0.784367 25.8542 0.986156C25.9621 1.18794 26.0139 1.41734 26.0038 1.64837C25.9936 1.8794 25.9219 2.10284 25.7968 2.29339L13.9816 23.3145C13.8732 23.5412 13.7011 23.7276 13.4885 23.8488C13.2759 23.97 13.033 24.02 12.7924 23.9923C12.5518 23.9645 12.3251 23.8603 12.1428 23.6935C11.9605 23.5268 11.8313 23.3056 11.7726 23.0597L8.83571 10.8583L0.357305 2.12054C0.189529 1.94727 0.0749916 1.72546 0.0283793 1.48356C-0.0182329 1.24166 0.00520412 0.990688 0.0956855 0.762829C0.186167 0.53497 0.339568 0.340608 0.536221 0.204663C0.732874 0.0687185 0.963815 -0.00261263 1.19943 -0.000184132L24.76 0.354378Z" fill="black" />
                    </svg>
                    <svg class="post-interact__icons" width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 0H3C1.346 0 0 1.346 0 3V22C0 22.382 0.218 22.73 0.561 22.898C0.905 23.065 1.313 23.024 1.614 22.789L10 16.267L18.386 22.789C18.565 22.929 18.782 23 19 23C19.149 23 19.3 22.966 19.439 22.898C19.782 22.73 20 22.382 20 22V3C20 1.346 18.654 0 17 0ZM18 19.956L10.614 14.211C10.434 14.07 10.217 14 10 14C9.783 14 9.566 14.07 9.386 14.21L2 19.956V3C2 2.449 2.449 2 3 2H17C17.551 2 18 2.449 18 3V19.956Z" fill="black" />
                    </svg>
                </div>
                <div className="post-footer__views">
                    <p className="post-views__number">3,130</p>
                    <p>likes</p>
                </div>
                <div className="post-footer__caption-comments">
                    <div className="footer__caption">
                        <p className="footer-caption-comments__name post__name">just.baby</p>
                        <p className="post__text post-caption-comments__text">90s RB typa heart</p>
                    </div>
                    <p className="post__text view-all-comments">View all 17 comments</p>
                    <div className="footer__comments">
                        <div className="comment__item">
                            <p className="footer-caption-comments__name post__name">1999.stories</p>
                            <p className="post__text post-comments__text">90s RB typa heart</p>
                        </div>
                        <div className="comment__item">
                            <p className="footer-caption-comments__name post__name">bijo_bijo_bijob</p>
                            <p className="post__text post-comments__text">どうも美女サークルです！💕</p>
                        </div>
                    </div>
                    <p className="post__time">1 HOUR AGO</p>
                </div>
                <div className="post-footer__addComment">
                    <svg class="footer-comment__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM12 22.5C6.201 22.5 1.5 17.799 1.5 12C1.5 6.201 6.201 1.5 12 1.5C17.799 1.5 22.5 6.201 22.5 12C22.5 17.799 17.799 22.5 12 22.5Z" fill="black" />
                        <path d="M8.25 9.75C9.07843 9.75 9.75 9.07843 9.75 8.25C9.75 7.42157 9.07843 6.75 8.25 6.75C7.42157 6.75 6.75 7.42157 6.75 8.25C6.75 9.07843 7.42157 9.75 8.25 9.75Z" fill="black" />
                        <path d="M15.75 9.75C16.5784 9.75 17.25 9.07843 17.25 8.25C17.25 7.42157 16.5784 6.75 15.75 6.75C14.9216 6.75 14.25 7.42157 14.25 8.25C14.25 9.07843 14.9216 9.75 15.75 9.75Z" fill="black" />
                        <path d="M17.25 12C17.25 14.8995 14.8995 17.25 12 17.25C9.1005 17.25 6.75 14.8995 6.75 12H5.25C5.25 15.7279 8.27208 18.75 12 18.75C15.7279 18.75 18.75 15.7279 18.75 12H17.25Z" fill="black" />
                    </svg>
                    <input type="text" className="footer-comment__input" placeholder="Add a comment..." /> 
                    <button className="footer-comment__btn">Post</button>
                </div>
            </div>
        </div>
    );
}