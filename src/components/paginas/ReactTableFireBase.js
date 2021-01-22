import React from 'react'

export const ReactTableFireBase = () => {

    const columns = [
        {
          Header: "Locker Number",
          accessor: "LockerNumber"
        },
        {
          Header: "Available",
          accessor: "Available"
        },
        {
          Header: "Student Name",
          accessor: "StudentName"
        },
        {
          Header: "Student Number",
          accessor: "StudentNumber"
        },
        {
          Header: "Period",
          accessor: "Period"
        },
        {
          Header: "Teacher",
          accessor: "Teacher"
        }
      ];

    return (
        <>
            <ReactTable data={this.state.data} columns={columns} />
        </>
    )
}
