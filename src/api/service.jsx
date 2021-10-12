
export async function getServiceList() {
    return await fetch('https://shehnshah-backend.herokuapp.com/api/bookings/getListing')
      .then(data => data.json())
  }

  export async function serviceProvider() {
    return await fetch('https://shehnshah-backend.herokuapp.com/api/organizations')
      .then(data => data.json())
  }
  
 