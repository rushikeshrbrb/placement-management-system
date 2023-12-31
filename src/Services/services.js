import axios from "axios";

export async function saveInfo(regData){
        try {
            const response=await axios.post("http://localhost:4880/register",regData);
            return response.data;
        } catch (error) {
            console.log(error);
            
        }
    }


    
//for update company detalis
export async function updatecompany(updatedUser,email){
    try {
        const response=await axios.put(`http://localhost:4880/User/${email}`,updatedUser);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function fetchcompanybyid(user_id){
    try {
        const response=await axios.get(`http://localhost:9091/User/${user_id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

// export async function saveInfo(regData){
//     try {
//         const response=await axios.post("http://127.0.0.1:4555/admin",regData);
//         return response.data;
//     } catch (error) {
//         console.log(error);
        
//     }

// }
// export async function saveNewConnection(regdata){
//     try {
//         const response=await axios.post("http://127.0.0.1:4555/newconnection",regdata);
//         return response.data;
//     } catch (error) {
//         console.log(error);
        
//     }
// }


// export async function fetchCustomerData(){
//     try{
//         const response=await axios.get("http://127.0.0.1:4555/fetnewconndetail");
//         return response.data;
//     }catch (error) {
//         console.log(error);
//     }
// }

// export async function deleterCustomerData(name){
//     try{
//         const response=await axios.delete(`http://127.0.0.1:4555/deletedetail/${name}`);
//         return response.data;
//     } catch (error) {
//         console.log(error);
//     }
// }
 
// export async function updateCustomerData(updateData,name ){
//     try{
//         const response=await axios.put(`http://127.0.0.1:4555/updatedetail/${name}`,updateData);
//         return response.data;
//     } catch (error) {
//         console.log(error);
//     }
// }

// export async function fetchDataFromName(name ){
//     try{
//         const response=await axios.get(`http://127.0.0.1:4555/fetnewcust/${name}`);
//         return response.data;
//     } catch (error) {
//         console.log(error);
//     }
// }

// export async function saveBookedData (regdata){
//     try {
//         const response=await axios.post("http://127.0.0.1:4555/savebookindata",regdata);
//         return response.data;
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// export async function fetchCustomerBookData(){
//     try{
//         const response=await axios.get("http://127.0.0.1:4555/getbookingdata");
//         return response.data;
//     }catch (error) {
//         console.log(error);
//     }
// }

