
import axios from "axios"

const getPendingRequests = async() => {
  let headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"));
  let response = await axios.get("/admin/communities")
}

export {getPendingRequests}
