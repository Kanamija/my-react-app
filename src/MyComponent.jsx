import React, {useState} from 'react';

function MyComponent() {
    const [name, setName] = useState();

    let updateName = () => {
        setName("Kanami")
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}></button>
        </div>
    )
}

export default MyComponent