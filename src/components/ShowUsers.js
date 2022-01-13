import React from 'react'
import Icon from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

const ShowUsers = (props) => {
    const {name,email,add,mob,status,deleteuser} = props
    return (
        <><div className="card my-3">
            <div className="card-body">
              <h5 className="card-title text-center">{name}</h5>
              <p className="card-text">Email:{email}</p>
              <p className="card-text">Address:{add}</p>
              <p className="card-text">Mobile:{mob}</p>
              <p className="card-text">Status:{status}</p>
              <button className='btn btn-danger' onClick={()=>deleteuser(mob)}>
                  <Icon icon={trash}/>
              </button>
            </div>
            </div>
      </>
    )
}

export default ShowUsers
