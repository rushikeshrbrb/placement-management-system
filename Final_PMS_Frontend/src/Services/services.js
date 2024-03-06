import axios from "axios";
import { getToken } from "./TokenUtils";

const headers = {
  "Content-Type": "application/json", // Set the content type to JSON
  Authorization: `Bearer ${localStorage.getItem("token")}`,

  // Include the authorization token in the header
};
// const token=localStorage.getItem('token');
// import * as jwt from "jsonwebtoken";
// import User from "@/models/user";
// export const verifyToken = async (token: string) => {
//   try {
//     // Verifies the token using the secret key, retrieves the user ID from the token payload
//     let decodedToken = jwt.verify(token, secretKey) as { user_id: string };
//     // Finds the user based on the decoded user ID from the token
//     let user = await User.findById(decodedToken?.user_id).exec();

//     return user; // Returns the user if the verification is successful
//   } catch (error) {
//     return null; // Returns null if there's an error during token verification or user retrieval
//   }
// };

export async function saveInfo(regData) {
  try {
    const response = await axios.post(
      "http://localhost:8080/register",
      regData
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// //for update company detalis
// export const updatecompany = async (userId, updatedUser ) => {
//     try {

//         console.log(userId);
//         console.log(updatedUser);

//         const form = new FormData();
//      form.append("companyName", updatedUser?.companyName )

//         const response=await axios.put(`http://localhost:8090/updatecompany/${userId}`,updatedUser);

//         return response.data;
//     } catch (error) {
//         console.log(error);
//     }
// }

export const updatecompany = async (userId, updatedUser) => {
  try {
    console.log("called");
    const response = await axios.put(
      `http://localhost:8080/company/updateCompanyByUserId/${userId}`,
      updatedUser /*, {headers:{'Authorization':`Bearer ${getToken()}`
    }}*/
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const findcompany = async (userId) => {
  console.log(userId);
  try {
    const response = await axios.get(
      `http://localhost:8080/company/findcompany/${userId}` /*,
        {
          headers: {
            'Authorization': `Bearer ${getToken()}`
          }
        }*/
    );

    console.log(userId);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//   //for update company detalis
//   export async function updatecompany(updatedUser, email) {
//     try {
//       const response = await axios.put(`http://localhost:4880/User/${email},updatedUser`);
//       return response.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }

////updateByAdminId

export async function updateAdmin(userId, updatedUser) {
  try {
    console.log(getToken);
    const response = await axios.put(
      `http://localhost:8080/admin/updateByAdminId/${userId}`,
      updatedUser,
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// var tk=localStorage.getItem("token")

export async function getAdminByUserId(userId) {
  try {
    const response = await axios.get(
      `http://localhost:8080/admin/getoneAdmin/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchcompanybyid(user_id) {
  try {
    const response = await axios.get(`http://localhost:8080/User/${user_id}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchStudentByid(userId) {
  try {
    const response = await axios.get(
      `http://localhost:8080/getByUserId/${userId}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function updateStudent(updatedUser, userId) {
  try {
    console.log("Inside update:", userId);
    console.log("Inside update:", updatedUser);
    const response = await axios.put(
      `http://localhost:8080/updateByUserId/${userId}`,
      updatedUser
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const API_URL = "http://localhost:8080/api/questions";

export const getAllQuestions = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching questions:", error);
    throw error;
  }
};
export const createQuestion = async (question) => {
  try {
    const response = await axios.post(API_URL, question);
    return response.data;
  } catch (error) {
    console.error("Error creating question:", error);
    throw error;
  }
};

// export const findcompany = async (userId) => {
//   console.log(userId);
//   try {

//       const response=await axios.get(`http://localhost:8090/findcompany/${userId}`);
//       console.log(userId);
//       return response.data;
//   } catch (error) {
//       console.log(error);

// JOB API
//http://localhost:8080/jobcompany/20
export async function saveJob(regData) {
  try {
    const response = await axios.post(`http://localhost:8080/create`, regData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getHodByUserId(userId) {
  try {
    const response = await axios.get(
      `http://localhost:8080/hod/${userId}` /*,{
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    }*/
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function updateHod(userId, updatedUser) {
  try {
    console.log(getToken);
    console.log(localStorage.getItem("token"));
    const response = await axios.put(
      `http://localhost:8080/updateByHodId/${userId}`,
      updatedUser /*, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }*/
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function updatePlacementOfficer(userId, updatedUser) {
  try {
    const response = await axios.put(
      `http://localhost:8080/placement/updateByPlacementOfficerId/${userId}`,
      updatedUser
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getPlacementOfficerByUserId(userId) {
  try {
    const response = await axios.get(
      `http://localhost:8080/placement/getonePlacementOfficer/${userId}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
