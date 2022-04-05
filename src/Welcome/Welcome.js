import { Fragment, useState } from 'react'
function Welcome() {
    const [changeText, setChangeState] = useState(false)
    const changeTextHandler = () => {
        setChangeState(!changeText);
    }
    return (
        <Fragment>
            <h2>Hello world</h2>
            {!changeText ? <p>Good Morning</p> : <p>Good Night</p>}
            <button onClick={changeTextHandler}> changeText </button>
        </Fragment>
    )
}

export default Welcome