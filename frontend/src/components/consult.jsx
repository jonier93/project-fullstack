import photo_consult from '../images/consult.png'

function Consult() {
    function consult_user(){
        let id = document.getElementById("ident").value
        let obj_data = {
            "id": id
        }
        fetch('/consult_user', {
            "method":"post",
            "headers": {"Content-Type":"application/json"},
            "body": JSON.stringify(obj_data)
        })
        .then(resp => resp.json())
        .then(data => alert(data.status + " " + data.id + " " + data.name))
        .cath(err => alert("Error", err))
    }
    return(
        <div>
            <img className='img-consult' src={photo_consult} /> <br/> 
            <label> Id </label> <input id="ident"/> <br/> <br/>
            <textarea /> <br/> <br/>
            <button onClick={consult_user} className='btn-reg-cons'> Consult </button>
        </div>
    )
}

export default Consult