export function fetchBaseURL() {
    return fetch('./config.json')
        .then((response) => response.json())
        .then((data) => data.CafeServerURL);
}

export async function GetCafeList() {
    let serverURL = await fetchBaseURL();

    const cafeList = fetch(`${serverURL}/api/cafe/location?location=`)
        .then(result => result.json())
        .then(rowData => {
            console.log(rowData)
            return rowData;
        })
    return cafeList;
}

export async function DeleteCafe(cafeId) {
    let serverURL = await fetchBaseURL();
    const requestOptions = {
        method: "Delete",
        headers: { "Content-Type": "application/json" }
    };
    const isDeleted = fetch(`${serverURL}/api/cafe/delete/${cafeId}`,
        requestOptions)
        .then(result => result.json())
        .then(rowData => {
            console.log(rowData)
            return rowData
        })
    return isDeleted;
}

export async function CreateCafe(cafeInfo) {
    let serverURL = await fetchBaseURL();
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            Name: cafeInfo.cafe.Name,
            Description: cafeInfo.cafe.Description,
            Location: cafeInfo.cafe.Location
        })
    };
    const response = await fetch(`${serverURL}/api/cafe/add`, requestOptions);
    const data = await response.json();
    return data;
}


