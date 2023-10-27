import Axios from "axios";
import {Link} from "react-router-dom"

function StudentListRow(props)
{
    const {_id,name,email,rollNo} = props.obj; //Object destruction

    const handleClick = () => {
        Axios.delete("https://crud-deployment1-7zno.onrender.com/students/delete-student/" + _id)
        .then((res) => {
            if(res.status === 200){
                alert("Record deleted successfully");
                window.location.reload();
            }
            else    
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{rollNo}</td>
            <td>
                <button class="btn btn-success ms-3"><Link to={"/edit-student/" + _id}>Edit</Link></button>
                <button onClick={handleClick} class="btn btn-danger mx-3">Delete</button>
            </td>
        </tr>
    )
}
export default StudentListRow;


/*
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/AnishJ3/crud-deployment-frontend1.git
git push -u origin main

*/