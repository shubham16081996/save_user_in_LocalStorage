import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowUsers from './ShowUsers';


const AddUser = () => {

    const getValFromLs = () => {
        const data = localStorage.getItem('users')
        if(data){return JSON.parse(data)}else{return []}
    }

    const [users, setUsers] = useState(getValFromLs())

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [mobile, setMobile] = useState('')
    const [status, setStatus] = useState('')

    const submit = (e)=> {
        e.preventDefault()
        let user = {name,email,address,mobile,status}
        setUsers([...users,user])
        setName('')
        setEmail('')
        setAddress('')
        setMobile('')
        setStatus('')
        
    }

    const deleteuser = (mobile) =>{
        const filteredUsers = users.filter((e,index)=>{
            return e.mobile !== mobile
        })
        setUsers(filteredUsers)
    }


    useEffect(() => {
     localStorage.setItem('users',JSON.stringify(users))
    }, [users])

    return (
        <>

    <div className='container py-3'>
    <div className="row">
    <div className="col-sm-6 bg-warning">
        <form onSubmit={submit} className="py-3">
          <h2 className="my-3">Add a User</h2>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input onChange={(e)=>{setName(e.target.value)}} value={name} type="name" className="form-control" id="name" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input onChange={(e)=>{setEmail(e.target.value)}} value={email}type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input onChange={(e)=>{setAddress(e.target.value)}} value={address} type="text" className="form-control" id="address"/>
        </div>
        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">Mobile</label>
          <input onChange={(e)=>{setMobile(e.target.value)}} value={mobile} type="text" className="form-control"  id="mobile"/>
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">Status (Active/Restricted/Blocked)</label>
          <input onChange={(e)=>{setStatus(e.target.value)}} value={status} type="text" className="form-control"  id="status"/>
        </div> 
        <button type="submit" className="btn btn-primary">Add User</button>
</form>
</div>
<div className='col-sm-6 bg-success'>
    <div className='row'>
            {users.length >0 && <>  

            <h1 className='text-center p-2'>See All Users</h1>

            {users.map((user)=>{
                return <div key={user.mobile} className='col-sm-4'>
                    <ShowUsers name={user.name} email={user.email} add={user.address} mob={user.mobile} status={user.status} deleteuser={deleteuser}/>
                    </div> })}
                    <div className='d-flex justify-content-around my-4'>
                        <button onClick={()=>setUsers([])} className='btn btn-info'>Remove All Users</button>
                    </div>
                    </>} 
                
     </div>
        {users.length < 1 && <div className='text-center p-2'><h1>No User To Show</h1></div>}
        </div>
</div>
</div>

</>
    )
}

export default AddUser
