import { getStudent } from "../api/student";
const StudentDetail = {
    render: async (id) =>{ 
        const response = await getStudent(id);
        // const data = response.data;
        const {data} = response;
        return(
            `<div>
                <div>id: ${data.id}</div>
                <div>name: ${data.name}</div>
                <div>Masv: ${data.masv}</div>
                <div>createdAt: ${data.createdAt}</div>
                <div>avatar: 
                <img src="${data.avatar}" alt=""></div>
            </div>`
        );
    }
};
export default StudentDetail;
