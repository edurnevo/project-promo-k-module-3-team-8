import React from 'react';

class FormDesign extends React.Component {
  render() {
    return (
      <>
        <h3 className='colours__title'>Colores</h3>
        <form className='colours__palettes'>
          <label htmlFor='palette1' className='palette-flex palette1'>
            <input
              id='palette1'
              type='radio'
              value='1'
              name='colours'
              className='js-option1'
            />
            <div className='palette1__colour1 colour-box'></div>
            <div className='palette1__colour2 colour-box'></div>
            <div className='palette1__colour3 colour-box'></div>
          </label>
          <label htmlFor='palette2' className='palette-flex palette2'>
            <input
              id='palette2'
              type='radio'
              value='2'
              name='colours'
              className='js-option2'
            />
            <div className='palette2__colour1 colour-box'></div>
            <div className='palette2__colour2 colour-box'></div>
            <div className='palette2__colour3 colour-box'></div>
          </label>
          <label htmlFor='palette3' className='palette-flex palette3'>
            <input
              id='palette3'
              type='radio'
              value='3'
              name='colours'
              className='js-option3'
            />
            <div className='palette3__colour1 colour-box'></div>
            <div className='palette3__colour2 colour-box'></div>
            <div className='palette3__colour3 colour-box'></div>
          </label>
        </form>
      </>
    );
  }
}

export default FormDesign;
