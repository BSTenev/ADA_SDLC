import React from 'react';
import { useState, useRef } from 'react';

import ClientEndWrapper from '../styles/ClientEndWrapper';

import tickImage from '../assets/tickImage.png'

function ClientEnd({itemsList}) {

  const ITEM_FOUND = {
    FOUND: 'FOUND',
    NOT_FOUND: 'NOT FOUND',
    NOT_SUBMITTED: 'NOT SUBMITTED '
  }

  const [items, setItems] = useState(itemsList)
  const [trackPage, setTrackPage] = useState(ITEM_FOUND.NOT_SUBMITTED)
  const [searchCode, setSearchCode] = useState()

  const [currentSearchedNumber, setcurrentSearchedNumber] = useState()

  let codeInputRef = useRef()

  const handleTrackPageClick = () =>{
    setTrackPage(prevState => !prevState)
  }

  const handleSubmit = (e) => {
    // setSearchCode()
    e.preventDefault()
    setSearchCode(codeInputRef.current.value)
    for( let item of items ){
      if(item.trackingNum == codeInputRef.current.value){
        setTrackPage(ITEM_FOUND.FOUND);
        setcurrentSearchedNumber(item)
        return
      }
    }
    setTrackPage(ITEM_FOUND.NOT_FOUND);
  }

  return (
    <ClientEndWrapper >
      {/* <textarea ref={textRef} style={{width: '200px', height: '30px'}}/>
      <button onClick={handleClick} style ={{width: '50px', height: '30px'}}>Search Item</button>
      { item && itemBox} */}

      { 
        trackPage != ITEM_FOUND.FOUND && <>
          <p className='instruction-message'>Track your ‘in-kind’ donation below:</p>
      
          <form className='inputs-container' onSubmit={handleSubmit}>
            <input ref={codeInputRef} className='code-input' placeholder='item code'></input>
            <button type='submit' className='code-submit-btn'><span className='code-submit-text'>Track</span></button>
          </form>
          {trackPage == ITEM_FOUND.NOT_FOUND && <p className='not-found'>This item code does not exist</p>}
        </>
     }
     

     { trackPage == ITEM_FOUND.FOUND && 
      <>
              <div className='quick-nav-wrapper'>
          <h4 className='quick-nav' >Home</h4>
          <h4 className='quick-nav' style={{ margin: '5px', textDecoration: 'none'}}>/</h4>
          <h4 className='quick-nav' onClick={handleTrackPageClick}>Track donation</h4>
        </div>
        <h5 className='tracking-number'>Tracking Number: #{currentSearchedNumber.trackingNum}</h5>

        <h3 className='proccessed-date'>{currentSearchedNumber.dateAdded}</h3>
        <div className='item-received-container'>
          <h2>{currentSearchedNumber.timeAdded}</h2>
          <div className='item-received-separation-line line'>

          </div>
          <div className='item-received-content-container'>
            <p>image</p>
            <div className='receive-text-container'>
              <p>Item Received</p>
              <h3>{currentSearchedNumber.itemName}</h3>
            </div>
        </div>
        </div>
        {
          currentSearchedNumber.sold &&
           <>
            <h3 className='proccessed-date'>{currentSearchedNumber.dateSold}</h3>
          <div className='item-sold-container'>
            <h2>{currentSearchedNumber.timeSold}</h2>
            <div className='item-sold-separation-line line'></div>
            <div className='item-sold-content-container'>
            <div className='sold-text-container'>
              <img src={tickImage} alt='a tick image' />
                <p className='soldParagraph'>Your '{currentSearchedNumber.itemName}' has been been successfully sold for £{currentSearchedNumber.price}</p>
              </div>
            </div>
          </div>
           </>
        }
      </>
     }
    </ClientEndWrapper>
  );
}

export default ClientEnd;
