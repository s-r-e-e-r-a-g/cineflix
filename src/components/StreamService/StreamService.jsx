import React from 'react'
import './streamService.css'

const StreamService = ({service, name}) => {
    return (
        <div className='streamContainer'>
            <div className='streamTitle'>{name}</div>
            <div className="streamLogo">
                {service?.map((item, i) => (
                    <div className='box' key={item.logo_path + i}>
                        <abbr title={item.provider_name}>
                            <img src={`https://image.tmdb.org/t/p/w92${item.logo_path}`} alt="" />
                        </abbr>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StreamService
