import React, { useEffect, useState } from 'react'
import EventCard from '../components/EventCard';

const Thumbnail = ({ arr, image, index }) => {
    return (
        <div>
            {arr.map((imgsrc, i) => (
                <img
                    key={i}
                    height="50px"
                    src={imgsrc}
                    onClick={() => image(i)}
                    className={index == i ? 'active' : ''}
                />
            ))}
        </div>
    )
}

const Slideshow = ({ imgs }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setIndex(0)
    }, []);

    const next = () => {
        if (index == imgs.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1)
        }
    }

    const prev = () => {
        if (index == 0) {
            setIndex(imgs.length - 1);
        } else {
            setIndex(index - 1)
        }
    }

    useEffect(() => {
        const slideshowInterval = setTimeout(() => {
            next();
        }, 2000);
        return () => {
            clearTimeout(slideshowInterval);
        }
    }, [index])


    return (
        <div className="slideshow">
            <img className="mainImg" src={imgs && imgs[index]}></img>
            <div className="actions">
                <button onClick={prev}>⬅</button>
                <button onClick={next}>➡</button>
            </div>
            <Thumbnail arr={imgs} image={setIndex} index={index} />
        </div>
    )
}

export const Home = () => {
    const [events, setEvents] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/events/1')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setEvents(data);
            })

    }, [])

    return (
        <div>
            <div className="slider-container">
                <Slideshow
                    imgs={['https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg',
                        'https://sm.ign.com/ign_tr/cover/m/marvels-av/marvels-avengers_4k2k.jpg',
                        'https://images-na.ssl-images-amazon.com/images/I/91qFANYpjDL.jpg']} />

            </div>
            <div>
                <EventCard event={events} />
                <EventCard event={events} />
                <EventCard event={events} />
                <EventCard event={events} />
                <EventCard event={events} />
                <EventCard event={events} />
                <EventCard event={events} />
                <EventCard event={events} />
                <EventCard event={events} />
                <EventCard event={events} />
                <EventCard event={events} />
                <EventCard event={events} />
                <EventCard event={events} />
                <EventCard event={events} />
                <EventCard event={events} />
                <EventCard event={events} />
            </div>

        </div>
    )
}
export default Home;
