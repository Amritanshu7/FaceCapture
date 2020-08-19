import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
       <p className='f3'>
       <p>Detect Faces in your picture. Give it a try</p>
        <div className='center'>
            <div className='form center pa4 br3 shadow-5'>
                <input className='f4 pa2 w-70 center' type='tex' placeholder='Enter Image URL with image extension like jpg or png' onChange={onInputChange}></input>
                <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit}>Detect</button>
            </div>
        </div>
       </p>
    );
}

export default ImageLinkForm;