import { useRef, useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import emailjs from '@emailjs/browser';
import './App.css'


import ClientEnd from './components/ClientEnd';

import logo from './assets/Logo.png'


function App() {
  
  const daysArray = [
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday', 
    'Sundary'
  ]
  const monthsArray = [
    'January',
    'February',
    'March', 
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  let date = new Date()


  
  const [selectEnd, setSelectEnd] = useState(true)

  // select the page on the staff end
  const [page, setPage] = useState(false)

  // state to be used as a dummy item list database
  const [itemsList, setItemsList] = useState([])

  // tracking number state - which will be incremented on each newly adde ditem
  const [trackingNum, setTrackingNum] = useState(1)

  const [anonCheck, setAnonCheck] = useState(false)

  const [trackingNumSelection, setTrackingNumSelection] = useState(false)
  const [currentlySearchedItem, setcurrentlySearchedItem] = useState()

  let checkBoxFormRef = useRef()

  const handleSoldCheckBox = (e) => {
    // console.log(e.target.parentNode.parentNode)
    
    // create a form variable for the bellow emailjs.sendform function (as it only accepts a form html...)
    const form = e.target.parentNode.parentNode
    for(let i = 0; i < itemsList.length; i ++){
      if(e.target.name[e.target.name.length - 1] == itemsList[i].trackingNum){
        let updatedItemsList = [...itemsList];
        updatedItemsList[i].sold = !updatedItemsList[i].sold
        updatedItemsList[i].dateSold = `${daysArray[date.getDay() - 1]} ${date.getDate()}th ${monthsArray[date.getMonth()]}`
        updatedItemsList[i].timeSold = `${date.getHours()}:${date.getMinutes()}`
        setItemsList(updatedItemsList)
        // console.log(itemsList[i].sold)
        break;
      }
    }
    emailjs.sendForm('service_qiradee', 'template_jlehe1h', form, 'Z6lcqP4ZaOE7QlHd1')
    .then((result) => {
        // console.log(result.text);
        // alert('Form submitted. We will be in touch with you as soon as possible!')
        // e.target.reset()
    }, (error) => {
        // console.log(error.text);
    }); 
  }

  let enteredItemList = itemsList.map( element => {
    return <div className='item-details-container' style={{background: '#F4E9EA', display: 'grid', width: '60%', margin: '0 auto'}}>
    <form style={{display: 'flex'}}>
      <p className='item-properties'>{element.itemName}</p>
      <p className='item-properties'>£ {element.price}</p>
      <p className='item-properties'>#{element.trackingNum}</p>
      
      <label key={element.name + element.price} className='item-properties' htmlFor={`checkbox${element.trackingNum}`}>
        { 
        element.sold ?
          <>
            <input type='hidden' name='user_email' value={element.email && element.email} />
            <input key={element.name + element.price} name={`checkbox${element.trackingNum}`} onChange={handleSoldCheckBox} type='checkbox' checked/>
          </>
          :
          <>
            <input type='hidden' name='user_email' value={element.email && element.email} />
            <input key={element.name + element.price} name={`checkbox${element.trackingNum}`} onChange={handleSoldCheckBox} type='checkbox'/>
          </>
        }
      </label>
    </form>
  </div>
  })

  // upon pressing search
  const handleSearchSubmit = (e) => {
    // prevent default behaviour
    e.preventDefault();
    // loop through the dummy state database
    for(let item of itemsList){
      if(item.trackingNum == trackingInputRef.current.value){
        setTrackingNumSelection(trackingInputRef.current.value)
        setcurrentlySearchedItem(item)
        return
      }
    }
  }

  const handleCheckboxClick = () => {
    setAnonCheck(prevState => !prevState)
  }

  let trackingInputRef = useRef();

  const formRef = useRef();

  // UPON PRESSING ENTER
  const handleSubmit = (e) => {
    // PREVENT DEFAULT PAGE BEHAVIOUR ON SUBMIT (SUCH AS REFRESHING)
    e.preventDefault();
    // add item to the dummy state database
    setItemsList([...itemsList, {
      firstName: e.target.user_first_name.value,
      lastName: e.target.user_last_name.value,
      contactNo: e.target.user_contact_num.value,
      email: e.target.user_email.value,
      address: e.target.user_address.value,
      itemName: e.target.donation_title.value,
      price: Number(e.target.donation_price.value).toFixed(2),
      trackingNum: trackingNum,
      sold: false,
      dateAdded:   `${daysArray[date.getDay() - 1]} ${date.getDate()}th ${monthsArray[date.getMonth()]}`,
      timeAdded: `${date.getHours()}:${date.getMinutes()}`
    }])
    // update the tracking number
    setTrackingNum(prevState => prevState + 1)

    // send the email through the emailJS library
    emailjs.sendForm('service_qiradee', 'template_f74ior5', formRef.current, 'Z6lcqP4ZaOE7QlHd1')
      .then((result) => {
        // reset the form fields
          e.target.reset()
      }, (error) => {
          // console.log(error.text);
      });
  }

  const handleSetPage1 = () => {
    setPage(false)
  }

  const handleSetPage2 = () => {
    setPage(true)
  }

  return (
    
      selectEnd ?  <div className="App" >
        <div className='prototype-dummy-page-switch' style={{position: 'absolute', left: '40%',cursor: 'pointer', display: 'flex', gap: '1rem'}}>
          <p onClick={() => {setSelectEnd(true)}}>Staff End</p>
          <p onClick={() => {setSelectEnd(false)}}>Client End</p>
        </div>
      {
        !page && 
          <>
          <div className='links-wrapper'>
            <img className='logo-image' src={logo} alt="Mustard Tree's Logo, showing the name in white in front of a red background"/>
            <div className='pages-container'>
              <p onClick={handleSetPage1} className={!page ? 'page-link onPage' : 'page-link'}>Enter Item</p>
              <p onClick={handleSetPage2} className={page ? 'page-link onPage' : 'page-link'}>Item List</p>
            </div>
          </div>

          <div style={{display: 'flex', gap: '5rem', justifyContent: 'center'}}>
            <form ref={formRef} style={{display: 'grid'}} onSubmit={handleSubmit}>
              <div className='donor-details'>
                <input disabled={anonCheck} name="user_first_name"  className='donor-input' placeholder='First Name'/>
                <input disabled={anonCheck} name="user_last_name"  className='donor-input' placeholder='Last Name'/>
                <input disabled={anonCheck} name="user_contact_num" className='donor-input' placeholder='Contact No.'/>
                <input disabled={anonCheck} name="user_email"  className='donor-input' placeholder='Email'/>
                <input disabled={anonCheck} name="user_address"  className='donor-input' style={{gridColumn: '1 / 3'}} placeholder='Address'/>
                <input name="donation_title" className='donor-input' placeholder='Enter Item Name...'/>
                <input name="donation_price" className='donor-input' placeholder='Enter Item Price...'/>
              </div>
              <button className='enter-item-submit'>ENTER</button>
            </form>
            <div style={{display: 'grid', justifyContent: 'center', alignItems: 'center'}}>
              <p className='tracking-num-box'>Tracking No:#{trackingNum}</p>
              <div>
              {anonCheck ? 
                <input onClick={handleCheckboxClick} style={{width: '2rem'}}name='anon-checkbox' type='checkbox' checked />
                : <input onClick={handleCheckboxClick} style={{width: '2rem'}}name='anon-checkbox' type='checkbox' /> }
              <label style={{color: 'white'}} htmlFor='anon-checkbox'>Anonymous</label>
              </div>
            </div>
          </div>
          </>
      }
      { page &&
        <>
        <div className='links-wrapper'>
                <img className='logo-image' src={logo} alt="Mustard Tree's Logo, showing the name in white in front of a red background"/>
                <div className='pages-container'>
                  <p onClick={handleSetPage1} className={!page ? 'page-link onPage' : 'page-link'}>Enter Item</p>
                  <p onClick={handleSetPage2} className={page ? 'page-link onPage' : 'page-link'}>Item List</p>
                </div>
              </div>
              <form onSubmit={handleSearchSubmit} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem',  marginBottom: '1rem'}}>
              <input ref={trackingInputRef} className='search-input' placeholder='Enter Tracking Number...'></input>
              <button className='search-submit-btn' type='submit'>SEARCH</button>
            </form>
            {trackingNumSelection ? 
            <>
              <div className='item-details-container' style={{ width: '60%', margin: '0 auto'}}>
                <div style={{display: 'flex'}}>
                  <p className='item-property-title'>Item Name</p>
                  <p className='item-property-title'>Item Price</p>
                  <p className='item-property-title'>Track No.</p>
                  <p className='item-property-title'>Sold</p>
                </div>
              </div>
              <div className='item-details-container' style={{background: '#F4E9EA', display: 'grid', width: '60%', margin: '0 auto'}}>
                <form ref={checkBoxFormRef} style={{display: 'flex'}}>
                  <p className='item-properties'>{currentlySearchedItem.itemName}</p>
                  <p className='item-properties'>{currentlySearchedItem.price}</p>
                  <p className='item-properties'>#{currentlySearchedItem.trackingNum}</p>
                  
                  <label className='item-properties' htmlFor={`checkbox${currentlySearchedItem.trackingNum}`}>
                    {currentlySearchedItem.sold ?
                    <>
                      <input type='hidden' name='user_email' value={currentlySearchedItem.email && currentlySearchedItem.email} />
                      <input key={`checkbox${currentlySearchedItem.trackingNum}`} name={`checkbox${currentlySearchedItem.trackingNum}`} onChange={handleSoldCheckBox} type='checkbox' checked/>
                    </>
                  :
                  <>
                    <input type='hidden' name='user_email' value={currentlySearchedItem.email && currentlySearchedItem.email} />
                    <input key={`checkbox${currentlySearchedItem.trackingNum} + 1`}name={`checkbox${currentlySearchedItem.trackingNum}`} onChange={handleSoldCheckBox} type='checkbox'/>
                  </>
                  }
                  </label>
                </form>
              </div>
              
            </>
            :
            <>
            <div >
                <div style={{display: 'flex',  width: '60%', margin: '0 auto'}}>
                  <p className='item-property-title'>Item Name</p>
                  <p className='item-property-title'>Item Price</p>
                  <p className='item-property-title'>Track No.</p>
                  <p className='item-property-title'>Sold</p>
                </div>
              </div>
            {enteredItemList}
            </>
            }
        </>
      }
    </div> 
    : 
    <>
    <div className='prototype-dummy-page-switch' style={{position: 'absolute', left: '40%',cursor: 'pointer', display: 'flex', gap: '1rem'}}>
          <p onClick={() => {setSelectEnd(true)}}>Staff End</p>
          <p onClick={() => {setSelectEnd(false)}}>Client End</p>
        </div>
    <Header />
    <ClientEnd itemsList={itemsList}/>
    <Footer />
    </>
    
  );
}

export default App;
