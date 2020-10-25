import React from 'react';


const ImageCard = ({ image }) => {
    const tags = image.tags.split(',');
    const user = 'https://pixabay.com/users/' + image.user + '-' + image.user_id
    /*     const tagclick = 'https://pixabay.com/images/search/' + tags */
    return (
        <div className="wid rounded overflow-hidden shadow-lg">
            <a href={image.largeImageURL} > <img src={image.webformatURL} alt="" className="w-full" /></a>
            <div className="px-6 py-4">
                <div className="font-bold  text-black-500 text-xl mb-2">
                    PHOTO BY <a target="_blank" href={user}><span className='italic userlink text-teal-400'>{image.user}</span></a>
                </div>
                <ul>
                    <li>
                        <strong><i class="far fa-eye"></i> </strong>
                        {image.views}
                    </li>
                    <li>
                        <strong><i class="fas fa-download"></i> </strong>
                        {image.downloads}
                    </li>
                    <li>
                        <strong><i class="far fa-thumbs-up"></i> </strong>
                        {image.likes}
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
