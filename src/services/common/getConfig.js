

function getConfig() {
    const token = localStorage.getItem("token") || "";
    return {
        headers: {
            // "Content-Type": "multipart/form-data",
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
            // "Authorization": ""
        }
    }
};

export default getConfig;