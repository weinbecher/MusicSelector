import React, {Component} from 'react';
const MusicSelector = (props) => {
    const options = props.allMusic.map((music,index) => {
        return (
           
            <option value = {index} key = {index} >
                {music['im:name'].label}
            </option>
        )

    })

    function handleSelect(event){
        props.musicOnSelect(event.target.value);

    }

    return(
        <select id = "music-selector"  onChange = {handleSelect}>
            <option> Choose a music </option>
            {options}
  
            {/* <option value = {music.id.attributes} key = {music.id.attributes} >
                {music['im:name'].label}
            </option> */}


        </select>
    )
}

export default MusicSelector;