import React from 'react';
import './Cards.css';

const Cards = () => {
    return (
        <div className="cards">
            <div className="card1">
                <p className='boxHeader'>Google</p>
                <div className="insideCardBox"><p>Google LLC (/ˈɡuːɡəl/ ) is an American multinational technology company focusing on online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, artificial intelligence, and consumer electronics. It has been referred to as "the most powerful </p></div>
                <div className="btnDiv">
                <button className='btn'>Google</button>
                </div>
            </div>
            
            <div className="card2">
                <p className='boxHeader'>Bing</p>
                <div className="insideCardBox"><p>Microsoft Bing (commonly known as Bing) is a web search engine owned and operated by Microsoft. The service has its origins in Microsoft's previous search engines: MSN Search, Windows Live Search and later Live Search. Bing provides a variety of search services, including web, video, image, audio, etc files</p></div>
                <div className="btnDiv">
                <button className='btn'>Bing</button>
                </div>
            </div>
            
            <div className="card3">
                <p className='boxHeader'>Google</p>
                <div className="insideCardBox"><p>Yahoo! (/ˈjɑːhuː/, styled yahoo! in its logo) is an American web services provider. It is headquartered in Sunnyvale, California and operated by the namesake company Yahoo! Inc., which is 90% owned by investment funds managed by Apollo Global Management and 10% by Verizon Communications.</p></div>
                <div className="btnDiv">
                <button className='btn'>Safari</button>
                </div>
            </div>
            
        </div>
  )
};
export default Cards;
