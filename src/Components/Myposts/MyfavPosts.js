import React from 'react'
import {useHistory} from 'react-router-dom'
import ErrorState from '../ErrorState/ErrorState'
function MyfavPosts() {
    const history = useHistory()
    return (
        <div>
        <ErrorState/>
        </div>
    )
}

export default MyfavPosts
