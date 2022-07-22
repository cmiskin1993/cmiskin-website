import React, { useState } from 'react'
import '/Users/cnestel-admin/Documents/Carrie/cmiskin-website/src/components/Contact/Contact.css'

const Contact = () => {

    const [count, setCount] = useState(0)

    const handleCount = e => {

    setCount(e.target.value.length)
    }

  return (

    <div>

    <form>
        <label>Fist Name: </label>
            <input type="text" name="firstName" />
        <label>Last Name: </label>
            <input type="text" name="lastName" />
        <label>Email: </label>
            <input type="text" name="email" />
        <label>Message: {count} </label>
            <textarea type="text" name="message" onChange={ handleCount } />

            <input type="submit" value="Submit" />
    </form>
    
    </div>
  )
}

export default Contact