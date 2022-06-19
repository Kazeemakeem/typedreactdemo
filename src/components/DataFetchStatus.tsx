import React from 'react'

type DataProps = {
    status: 'loading' | 'success' | 'error' // merely string typing here will accommodate any string
}

const DataFetchStatus = ({status}: DataProps) => {
    let message;
    if (status === 'loading') message = 'loading...'
    if (status === 'success') message = 'data fetched successfully'
    if (status === 'error') message = 'error fetching data'
  return (
    <div>
      <h1>Status - {message}</h1>
    </div>
  )
}

export default DataFetchStatus
