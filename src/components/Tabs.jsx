import React, {useState} from 'react';



const Tabs = (props) => {
      
  const tabs = [
    {label:'tab1', content: "this is tab1"},
    {label:'tab2', content: "this is tab2"},
    {label:'tab3', content: "this is tab3"},
  ] 

    const clickHandler = (e, tab) => {
        console.log("tab.content " + tab)
        props.passTheContent(tab.content)
    }

    return (
        <div className = "d-flex justify-content-center">
                {tabs.map((tab, i) => {return <p key={i}> <button onClick={(e) => {clickHandler(e, tab)}}>{tab.label} </button>
                </p>})}
        </div>
    )
}

export default Tabs
