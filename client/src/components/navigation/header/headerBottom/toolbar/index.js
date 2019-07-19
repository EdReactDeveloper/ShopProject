import React from 'react'
import Authenticated from './Authenticated'; 
import UnAuthenticated from './Unauthenticated'; 
import {connect} from 'react-redux'; 
import '../../styles/Toolbar.scss'; 

const Toolbar = ({auth: {isAuthenticated, loading}}) => {
  return (
    <ul className="toolbar__list">
      {isAuthenticated && !loading ? <Authenticated /> : <UnAuthenticated />
    }
    </ul>
  )
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Toolbar)
