import photo_reg from '../images/register.png'

function Register(){
    return(
        <div>
            <img className='img-reg' src={photo_reg} />             
            <form action="/register_user" method="post">
                <label> Id </label> <input name="id"></input> <br/> <br/>
                <label> Name </label> <input name="name"/> <br/> <br/>
                <label> Lastname </label> <input name="lastname"></input> <br/> <br/>
                <label> Birthday </label> <input name="birthday"></input> <br/> <br/>
                <button className='btn-reg-cons'> Register </button>
            </form>
        </div>
    )
}

export default Register