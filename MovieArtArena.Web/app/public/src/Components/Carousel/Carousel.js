import React from 'react';
import Slider from "react-slick";


class Carousel extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: false,
            centerMode: true,
            centerPadding: "0"

        }

        return (
            <div className="container sizing">
                <Slider {...settings}>
                    <div>
                        <img src="https://static.vibe.com/files/2018/01/black-panther-poster-1517325222-640x933.jpg" alt="poster" />
                    </div>
                    <div>
                        <img src="https://fanart.tv/fanart/movies/293660/movieposter/deadpool-56948e5115048.jpg" alt="poster" />
                    </div>
                    <div>
                        <img src="https://orig00.deviantart.net/4d95/f/2011/007/b/2/child__s_play_movie_cover_3_by_designerdude0326-d36mlvh.jpg" alt="poster" />
                    </div>
                    <div>
                        <img src="http://img.auctiva.com/imgdata/1/1/7/9/1/0/1/webimg/560106212_o.jpg" alt="poster" />
                    </div>
                    <div>
                        <img src="https://monsterzeronj.files.wordpress.com/2013/08/h13w.jpg" alt="poster" />
                    </div>
                    <div>
                        <img src="http://img.moviepostershop.com/juice-movie-poster-1992-1020195456.jpg" alt="poster" />
                    </div>
                    <div>
                        <img src="https://jbchost.com.br/akibaspace/media/2017/02/promologan.jpg" alt="poster" />
                    </div>
                    <div>
                        <img src="http://digitalspyuk.cdnds.net/17/12/480x681/john-wick-chapter-2-poster.jpg" alt="poster" />
                    </div>
                    <div>
                        <img src="https://www.dvdsreleasedates.com/posters/800/T/The-Avengers-2012-movie-poster.jpg" alt="poster" />
                    </div>
                    <div>
                        <img src="http://media.comicbook.com/2017/10/guardians-of-the-galaxy-movie-poster-marvel-cinematic-universe-1038897.jpg" alt="poster" />
                    </div>
                    <div>
                        <img src="http://www.fatmovieguy.com/wp-content/uploads/2015/04/Batman-V-Superman-Dawn-of-Justice-Movie-Poster.jpg" alt="poster" />
                    </div>

                </Slider>
           
            </div>
        );
    }
}

export default Carousel;