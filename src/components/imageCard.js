import React from 'react';


const ImageCard = ({ image }) => {
    const tags = image.tags.split(',');
    const user = 'https://pixabay.com/users/' + image.user + '-' + image.user_id
    /*     const tagclick = 'https://pixabay.com/images/search/' + tags */
    return (
        <div className="wid rounded overflow-hidden shadow-lg">
            <a target="_blank" href={image.largeImageURL} > <img src={image.webformatURL} alt="" className="custimgsty" /></a>
            <div className="px-6 py-4">
                <div className=" italic  text-black-500 text-xl mb-2">
                    photo by <a target="_blank" href={user}><span className='italic userlink text-teal-400'>{image.user}</span></a>
                </div>
                <ul>
                    <li>
                        <strong><i class="far fa-eye"></i> </strong>
                        {image.views}
                    </li>
                    <li>
                        <strong><i class="far fa-thumbs-up"></i> </strong>
                        {image.likes}
                    </li>
                    <li>
                        <strong><i class="far fa-heart"></i> </strong>
                        {image.favorites}
                    </li>
                </ul>
            </div>
            <div className="px-6 pt-4 pb-2">
                {tags.map((tag, index) => (<span key={index} className="tagstyle inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{tag}</span>))}

            </div>
        </div>
    )
}

export default ImageCard;
