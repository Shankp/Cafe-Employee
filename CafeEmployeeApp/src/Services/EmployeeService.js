export function fetchBaseURL() {
    return fetch('./config.json')
        .then((response) => response.json())
        .then((data) => data.CafeServerURL);
}

export async function GetEmployeeListService(empId) {
    let serverURL = await fetchBaseURL();

    const empList = fetch(`${serverURL}/api/employee/cafe/${empId}`)
        .then(result => result.json())
        .then(rowData => {
            console.log(rowData)
            return rowData;
        })
    return empList;
}

export async function DeleteEmployee(empId) {
    let serverURL = await fetchBaseURL();
    const requestOptions = {
        method: "Delete",
        headers: { "Content-Type": "application/json" }
    };
    const isDeleted = fetch(`${serverURL}/api/employee/delete/${empId}`,
        requestOptions)
        .then(result => result.json())
        .then(rowData => {
            console.log(rowData)
            return rowData
        })
    return isDeleted;
}

export async function CreateEmployee(empInfo, gender, cafeId) {
    let serverURL = await fetchBaseURL();
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            Name: empInfo.employee.Name,
            Email: empInfo.employee.Email,
            PhoneNumber: parseInt(empInfo.employee.PhoneNumber),
            Gender: parseInt(gender),
            CafeId: cafeId,

        })
    };
    const response = await fetch(`${serverURL}/api/employee/add`, requestOptions);
    const data = await response.json();
    return data;
}