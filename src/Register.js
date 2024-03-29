import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () =>{

    const[id, idchange]=useState("");
    const[password, passwordchange]=useState("");
    const[email, emailchange]=useState("");
    const navigate=useNavigate();

    const handlesubmit=(e)=>{
        e.preventDefault();
        let regobj={id,password,email};
       // console.log(regobj);

       fetch("http://localhost:8000/user",{
            method: "POST",
            headers:{'content-type': 'application/json'},
            body: JSON.stringify(regobj)
    }).then((res)=>{
        toast.success('Registrado Correctamente')
        navigate('/login');
    }).catch((err)=>{
        toast.error('Fallo:' + err.message);
    });
    }

    return(
        <div>
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>
                    <div className="card">
                    <div className="card-header">
                    <h1>Registrar Usuario</h1>
                    </div>
                    <div className="card-body">

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Nombre Usuario<span className="errmsg">*</span></label>
                                    <input  value={id} onChange={e=>idchange(e.target.value)} className="form-control"></input>

                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Password<span className="errmsg">*</span></label>
                                    <input value={password} onChange={e=>passwordchange(e.target.value)}  type="password" className="form-control"></input>
                                    </div>
                                    </div>
                           <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Email<span className="errmsg">*</span></label>
                                    <input value={email} onChange={e=>emailchange(e.target.value)}  type="password" className="form-control"></input>
                                    </div>
                                    </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button type="submit" className="btn btn-primary">Register </button> |
                        <a className="btn btn-danger">Regresar</a>
                </div>
                </div>
                </form>
             </div>
           

        </div>
    );
}
export default Register;