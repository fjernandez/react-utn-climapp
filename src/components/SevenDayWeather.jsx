import React, { useEffect, useState } from 'react'
import Moment from 'react-moment'
import 'moment/locale/es';
import 'moment-timezone';

const SevenDayWeather = ({ days }) => {
    return (
        <div className='card'>
            <div className='card-image'>
                <img src={days.day.condition.icon} alt={days.day.condition.text} />
            </div>

            <div className='card-content'>
                <h1 className='sevenDayTitle'>
                    <Moment unix tz="America/Argentina/Buenos_Aires" format='dddd'>{days.date_epoch}</Moment>
                </h1>

                <p className="cardname">
                    <b>Mínima: </b>
                    <span>{days.day.mintemp_c}C°</span>
                </p>
                <p className="cardname">
                    <b>Máxima: </b>
                    <span>{days.day.maxtemp_c}C°</span>
                </p>
                <p className="cardname">
                    <b>Humedad: </b>
                    <span>{days.day.avghumidity}%</span>
                </p>
            </div>
        </div>
    )
};

export default SevenDayWeather