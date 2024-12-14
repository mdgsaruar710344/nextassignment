import React from 'react';

function InputEmail() {
  return (
    <div className='mt-10 mb-10'>
      <div >
        <form className='flex flex-row gap-10 '>
        <input className='mr-15 w-3/4 border-gray-700 border-2'
          type='email'
          placeholder='Enter your Email here!'

          ></input>
          <button className='btn btn-secondary' type='submit'>Submit</button>
        </form>
   

      </div>
 
    </div>
  );
}

export default InputEmail;